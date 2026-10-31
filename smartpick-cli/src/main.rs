//! SmartPick CLI — Rust terminal port of the SmartPick smartphone finder
//! (parent folder web app). Ports the **exact weighted match algorithm**
//! from `js/finder.js`, the 55-device catalog (embedded as phones.json),
//! store price comparison, compare table and wishlist.
//!
//! Run with `cargo run`, then `help`.

use std::io::{self, BufRead, Write};

use serde_json::{json, Value};

const PHONES_JSON: &str = include_str!("phones.json");
const WISHLIST_FILE: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/wishlist.json");

const CYAN: &str = "\x1b[36m";
const GREEN: &str = "\x1b[32m";
const YELLOW: &str = "\x1b[33m";
const RED: &str = "\x1b[31m";
const DIM: &str = "\x1b[2m";
const BOLD: &str = "\x1b[1m";
const RESET: &str = "\x1b[0m";

// ── small helpers ───────────────────────────────────────────

/// Number, or a numeric string like "6.7 inches" (parseFloat semantics).
fn num_of(v: &Value) -> Option<f64> {
    match v {
        Value::Number(n) => n.as_f64(),
        Value::String(s) => {
            let t: String = s
                .trim_start()
                .chars()
                .take_while(|c| c.is_ascii_digit() || *c == '.' || *c == '-')
                .collect();
            t.parse().ok()
        }
        _ => None,
    }
}

fn max_of(v: &Value) -> f64 {
    v.as_array()
        .map(|a| {
            a.iter()
                .filter_map(num_of)
                .fold(f64::MIN, f64::max)
        })
        .unwrap_or(0.0)
}

/// JS truthiness: true, non-zero number, non-empty string.
fn truthy(v: &Value) -> bool {
    match v {
        Value::Bool(b) => *b,
        Value::Number(n) => n.as_f64().map(|f| f != 0.0).unwrap_or(false),
        Value::String(s) => !s.is_empty(),
        _ => false,
    }
}

fn money(v: f64) -> String {
    format!("${v:.0}")
}

fn stars(rating: f64) -> String {
    let full = rating.round() as usize;
    format!("{}{}", "★".repeat(full.clamp(1, 5)), "☆".repeat(5 - full.clamp(1, 5)))
}

fn ask(readline: &dyn Fn() -> Option<String>, question: &str) -> String {
    print!("{question}");
    let _ = io::stdout().flush();
    match readline() {
        Some(s) => s.trim().to_string(),
        None => {
            println!("\nBye! 👋");
            std::process::exit(0);
        }
    }
}

// ── Quiz answers + the exact match algorithm from finder.js ──

#[derive(Default)]
struct Answers {
    budget: Option<(f64, f64)>,
    use_case: Option<String>,
    brand: Option<String>,
    os: Option<String>,
    ram: Option<f64>,
    storage: Option<f64>,
    screen: Option<String>,
    battery_priority: Option<String>,
    features: Vec<String>,
}

fn feature_matches(phone: &Value, feature: &str) -> bool {
    let specs = &phone["specs"];
    match feature {
        "5g" => truthy(&specs["connectivity"]["fiveG"]),
        "wirelesscharging" => truthy(&specs["battery"]["wirelessCharging"]),
        "fastcharging" => specs["battery"]["wiredCharging"].as_f64().unwrap_or(0.0) >= 65.0,
        "waterresistance" => specs["features"]["waterResistance"]
            .as_str()
            .map(|s| s.contains("IP68"))
            .unwrap_or(false),
        "foldable" => truthy(&specs["features"]["foldable"]),
        "highrefreshrate" => specs["display"]["refreshRate"].as_f64().unwrap_or(0.0) >= 120.0,
        "stylus" => truthy(&specs["features"]["stylus"]),
        "headphonejack" => truthy(&specs["features"]["headphoneJack"]),
        "microsd" => truthy(&specs["features"]["microSD"]),
        "nfc" => truthy(&specs["connectivity"]["nfc"]),
        _ => false,
    }
}

/// Port of QuizEngine.calculateMatchScore — weights: budget 25, use-case 20,
/// brand 15, OS 15, specs 15, features 10 → normalized to 25..100.
fn calculate_match_score(phone: &Value, a: &Answers) -> i64 {
    let mut score = 0.0;
    let total_weight = 100.0;

    // 1. Budget (25)
    match a.budget {
        Some((min, max)) => {
            let price = phone["price"]["current"].as_f64().unwrap_or(0.0);
            if price >= min && price <= max {
                score += 25.0;
            } else {
                let diff = (price - min).abs().min((price - max).abs());
                if diff <= 100.0 {
                    score += 15.0;
                } else if diff <= 200.0 {
                    score += 8.0;
                }
            }
        }
        None => score += 20.0,
    }

    // 2. Use case (20)
    match a.use_case.as_deref() {
        Some(uc) => match uc {
            "photography" => {
                score += (phone["ratings"]["camera"].as_f64().unwrap_or(0.0) / 5.0) * 20.0
            }
            "gaming" => {
                score += (phone["ratings"]["performance"].as_f64().unwrap_or(0.0) / 5.0) * 20.0;
                if phone["specs"]["display"]["refreshRate"].as_f64().unwrap_or(0.0) >= 120.0 {
                    score += 2.0;
                }
            }
            "business" => score += ((phone["ratings"]["performance"].as_f64().unwrap_or(0.0)
                + phone["ratings"]["battery"].as_f64().unwrap_or(0.0))
                / 10.0)
                * 20.0,
            "social" => score += ((phone["ratings"]["camera"].as_f64().unwrap_or(0.0)
                + phone["ratings"]["display"].as_f64().unwrap_or(0.0))
                / 10.0)
                * 20.0,
            "battery" => {
                score += (phone["ratings"]["battery"].as_f64().unwrap_or(0.0) / 5.0) * 20.0;
                if phone["specs"]["battery"]["capacity"].as_f64().unwrap_or(0.0) >= 5000.0 {
                    score += 2.0;
                }
            }
            "basic" => score += if phone["price"]["current"].as_f64().unwrap_or(0.0) < 450.0 {
                20.0
            } else {
                10.0
            },
            "music" => score += if truthy(&phone["specs"]["features"]["headphoneJack"]) {
                20.0
            } else {
                12.0
            },
            _ => score += 15.0,
        },
        None => score += 15.0,
    }

    // 3. Brand (15)
    match a.brand.as_deref() {
        Some(b) if !b.is_empty() && b != "any" => {
            if phone["brand"].as_str().unwrap_or("").eq_ignore_ascii_case(b) {
                score += 15.0;
            }
        }
        _ => score += 15.0,
    }

    // 4. OS (15)
    match a.os.as_deref() {
        Some(os) if !os.is_empty() && os != "any" => {
            if phone["os"]
                .as_str()
                .unwrap_or("")
                .to_lowercase()
                .contains(&os.to_lowercase())
            {
                score += 15.0;
            }
        }
        _ => score += 15.0,
    }

    // 5. Specs (15) — proportional
    let mut spec_points = 0.0;
    let mut spec_count = 0.0;
    if let Some(ram) = a.ram {
        spec_count += 1.0;
        if max_of(&phone["specs"]["performance"]["ram"]) >= ram {
            spec_points += 1.0;
        }
    }
    if let Some(storage) = a.storage {
        spec_count += 1.0;
        if max_of(&phone["specs"]["performance"]["storage"]) >= storage {
            spec_points += 1.0;
        }
    }
    if let Some(screen) = a.screen.as_deref() {
        spec_count += 1.0;
        let size = num_of(&phone["specs"]["display"]["size"]).unwrap_or(0.0);
        let hit = match screen {
            "small" => size < 6.2,
            "medium" => (6.2..=6.6).contains(&size),
            "large" => size > 6.6 && size <= 7.0,
            "xlarge" => size > 7.0,
            _ => false,
        };
        if hit {
            spec_points += 1.0;
        }
    }
    if let Some(bp) = a.battery_priority.as_deref() {
        spec_count += 1.0;
        let cap = phone["specs"]["battery"]["capacity"].as_f64().unwrap_or(0.0);
        let hit = match bp {
            "basic" => cap >= 3000.0,
            "good" => cap >= 4300.0,
            "beast" => cap >= 5000.0,
            _ => false,
        };
        if hit {
            spec_points += 1.0;
        }
    }
    score += if spec_count > 0.0 {
        (spec_points / spec_count) * 15.0
    } else {
        12.0
    };

    // 6. Features (10)
    if a.features.is_empty() {
        score += 10.0;
    } else {
        let matched = a
            .features
            .iter()
            .filter(|f| feature_matches(phone, f))
            .count();
        score += (matched as f64 / a.features.len() as f64) * 10.0;
    }

    let final_score = ((score / total_weight) * 100.0).round() as i64;
    final_score.clamp(25, 100)
}

fn run_quiz(readline: &dyn Fn() -> Option<String>) -> Answers {
    println!("{BOLD}🔍 Smart Requirement Finder{RESET} {DIM}(Enter = skip){RESET}");
    let mut a = Answers::default();

    let budget = ask(readline, "1/6 Budget in $ (e.g. 300-600): ");
    if !budget.is_empty() {
        a.budget = (|| {
            let (min, max) = budget.split_once('-')?;
            Some((min.trim().parse().ok()?, max.trim().parse().ok()?))
        })()
        .or_else(|| budget.parse::<f64>().ok().map(|max| (0.0, max)));
    }

    let uc = ask(
        readline,
        "2/6 Primary use — photography/gaming/business/social/battery/basic/music: ",
    )
    .to_lowercase();
    if !uc.is_empty() {
        a.use_case = Some(uc);
    }

    let brand = ask(readline, "3/6 Brand (apple/samsung/google/… or any): ");
    if !brand.is_empty() {
        a.brand = Some(brand);
    }

    let os = ask(readline, "4/6 OS — ios/android/any: ");
    if !os.is_empty() {
        a.os = Some(os);
    }

    let ram = ask(readline, "5/6 Minimum RAM in GB (e.g. 8): ");
    if let Ok(v) = ram.parse() {
        a.ram = Some(v);
    }
    let storage = ask(readline, "    Minimum storage in GB (e.g. 256): ");
    if let Ok(v) = storage.parse() {
        a.storage = Some(v);
    }
    let screen = ask(readline, "    Screen — small/medium/large/xlarge: ");
    if !screen.is_empty() {
        a.screen = Some(screen);
    }
    let bp = ask(readline, "    Battery — basic/good/beast: ");
    if !bp.is_empty() {
        a.battery_priority = Some(bp);
    }

    let features = ask(
        readline,
        "6/6 Perks (comma-separated: 5g,fastcharging,waterresistance,foldable,stylus,nfc,headphonejack,microsd,highrefreshrate): ",
    );
    a.features = features
        .split(',')
        .map(|f| f.trim().to_lowercase())
        .filter(|f| !f.is_empty())
        .collect();

    a
}

// ── Display ─────────────────────────────────────────────────

fn show_card(phone: &Value, score: Option<i64>) {
    let name = phone["name"].as_str().unwrap_or("?");
    let brand = phone["brand"].as_str().unwrap_or("");
    let price = phone["price"]["current"].as_f64().unwrap_or(0.0);
    let rating = phone["ratings"]["overall"].as_f64().unwrap_or(0.0);
    let popular = if truthy(&phone["isPopular"]) { " ⭐" } else { "" };
    let match_tag = match score {
        Some(s) => format!("  {GREEN}{s}% match{RESET}"),
        None => String::new(),
    };
    println!(
        "• {BOLD}{name}{RESET} {DIM}({brand}){RESET} — {YELLOW}{}{RESET} {stars}{popular}{match_tag}",
        money(price),
        stars = stars(rating),
    );
}

fn find_phone<'a>(db: &'a [Value], query: &str) -> Option<&'a Value> {
    let q = query.to_lowercase();
    db.iter()
        .find(|p| {
            p["name"].as_str().unwrap_or("").to_lowercase() == q
                || p["id"].as_str().unwrap_or("") == q
        })
        .or_else(|| {
            db.iter().find(|p| {
                p["name"]
                    .as_str()
                    .unwrap_or("")
                    .to_lowercase()
                    .contains(&q)
            })
        })
        .or_else(|| {
            db.iter().find(|p| {
                p["brand"]
                    .as_str()
                    .unwrap_or("")
                    .to_lowercase()
                    .contains(&q)
            })
        })
}

fn show_detail(phone: &Value) {
    let s = &phone["specs"];
    println!();
    println!(
        "{BOLD}📱 {}{RESET} {DIM}({} · {}){RESET}",
        phone["name"].as_str().unwrap_or("?"),
        phone["brand"].as_str().unwrap_or(""),
        phone["releaseYear"].as_i64().unwrap_or(0)
    );
    println!(
        "   OS {} · {} · {}",
        phone["os"].as_str().unwrap_or(""),
        phone["weight"].as_str().unwrap_or(""),
        s["display"]["size"].as_str().unwrap_or("?")
    );
    println!(
        "   🖥  {} {}Hz · {} · {}",
        s["display"]["type"].as_str().unwrap_or(""),
        s["display"]["refreshRate"].as_i64().unwrap_or(0),
        s["display"]["resolution"].as_str().unwrap_or(""),
        s["display"]["protection"].as_str().unwrap_or("")
    );
    println!(
        "   ⚙  {} · RAM {} GB · storage {:?} GB",
        s["performance"]["chipset"].as_str().unwrap_or(""),
        max_of(&s["performance"]["ram"]),
        s["performance"]["storage"]
            .as_array()
            .map(|a| a.iter().filter_map(Value::as_i64).collect::<Vec<_>>())
            .unwrap_or_default()
    );
    println!(
        "   📷 main: {} · selfie: {} · video: {}",
        s["camera"]["main"].as_str().unwrap_or(""),
        s["camera"]["front"].as_str().unwrap_or(""),
        s["camera"]["video"].as_str().unwrap_or("")
    );
    println!(
        "   🔋 {} mAh · {}W wired · {}W wireless · {}",
        s["battery"]["capacity"].as_i64().unwrap_or(0),
        s["battery"]["wiredCharging"].as_i64().unwrap_or(0),
        s["battery"]["wirelessCharging"].as_i64().unwrap_or(0),
        s["features"]["waterResistance"].as_str().unwrap_or("")
    );
    let r = &phone["ratings"];
    println!(
        "   {} overall {:.1} · cam {:.1} · perf {:.1} · batt {:.1}",
        stars(r["overall"].as_f64().unwrap_or(0.0)),
        r["overall"].as_f64().unwrap_or(0.0),
        r["camera"].as_f64().unwrap_or(0.0),
        r["performance"].as_f64().unwrap_or(0.0),
        r["battery"].as_f64().unwrap_or(0.0),
    );
    let pros = phone["pros"].as_array().map(|a| a.len()).unwrap_or(0);
    if pros > 0 {
        println!("   {GREEN}+{RESET} {}", join_list(&phone["pros"]));
        println!("   {RED}-{RESET} {}", join_list(&phone["cons"]));
    }
}

fn join_list(v: &Value) -> String {
    v.as_array()
        .map(|a| {
            a.iter()
                .filter_map(Value::as_str)
                .collect::<Vec<_>>()
                .join(" · ")
        })
        .unwrap_or_default()
}

fn show_prices(phone: &Value) {
    let stores = &phone["price"]["stores"];
    println!();
    println!(
        "{BOLD}💰 {} — store prices{RESET}",
        phone["name"].as_str().unwrap_or("?")
    );
    let official = stores["official"].as_f64().unwrap_or(0.0);
    let mut best: Option<(String, f64)> = None;
    for key in ["amazon", "bestbuy", "walmart", "official"] {
        let price = stores[key].as_f64();
        let Some(price) = price else { continue };
        if best.as_ref().map(|(_, p)| price < *p).unwrap_or(true) {
            best = Some((key.to_string(), price));
        }
    }
    for key in ["amazon", "bestbuy", "walmart", "official"] {
        let Some(price) = stores[key].as_f64() else { continue };
        let is_best = best.as_ref().map(|(k, _)| *k == key).unwrap_or(false);
        let badge = if is_best { format!(" {GREEN}◀ Best Price{RESET}") } else { String::new() };
        println!("   {:<10} {:>8}{badge}", key, money(price));
    }
    if let Some((_, best_price)) = best {
        let save = official - best_price;
        if save > 0.0 {
            println!("   {DIM}Save {} vs official{RESET}", money(save));
        }
    }
    if let Some(history) = phone["price"]["history"].as_array() {
        let prices: Vec<f64> = history
            .iter()
            .filter_map(|h| h["price"].as_f64())
            .collect();
        if !prices.is_empty() {
            let lo = prices.iter().cloned().fold(f64::MAX, f64::min);
            let hi = prices.iter().cloned().fold(f64::MIN, f64::max);
            println!("   {DIM}6-month history: low {} · high {}{RESET}", money(lo), money(hi));
        }
    }
}

fn show_compare(phones: &[&Value]) {
    println!();
    let row = |label: &str, get: &dyn Fn(&Value) -> String, best: &dyn Fn(&Value) -> f64, higher: bool| {
        let values: Vec<f64> = phones.iter().map(|p| best(p)).collect();
        let target = if higher {
            values.iter().cloned().fold(f64::MIN, f64::max)
        } else {
            values.iter().cloned().fold(f64::MAX, f64::min)
        };
        let cells: Vec<String> = phones
            .iter()
            .zip(values.iter())
            .map(|(p, v)| {
                let text = get(p);
                if *v == target && !text.is_empty() {
                    format!("{GREEN}{text} ◀{RESET}")
                } else {
                    text
                }
            })
            .collect();
        println!("{:<14}{}", label, cells.join("   "));
    };
    let header: Vec<String> = phones
        .iter()
        .map(|p| format!("{BOLD}{}{RESET}", p["name"].as_str().unwrap_or("?")))
        .collect();
    println!("{}", header.join("   vs   "));
    println!("{DIM}{}", "-".repeat(70));
    row("price", &|p| money(p["price"]["current"].as_f64().unwrap_or(0.0)), &|p| {
        p["price"]["current"].as_f64().unwrap_or(0.0)
    }, false);
    row("overall", &|p| format!("{:.1}", p["ratings"]["overall"].as_f64().unwrap_or(0.0)), &|p| {
        p["ratings"]["overall"].as_f64().unwrap_or(0.0)
    }, true);
    row("camera", &|p| format!("{:.1}", p["ratings"]["camera"].as_f64().unwrap_or(0.0)), &|p| {
        p["ratings"]["camera"].as_f64().unwrap_or(0.0)
    }, true);
    row("battery", &|p| format!("{:.1}", p["ratings"]["battery"].as_f64().unwrap_or(0.0)), &|p| {
        p["ratings"]["battery"].as_f64().unwrap_or(0.0)
    }, true);
    row("performance", &|p| format!("{:.1}", p["ratings"]["performance"].as_f64().unwrap_or(0.0)), &|p| {
        p["ratings"]["performance"].as_f64().unwrap_or(0.0)
    }, true);
    row("mAh", &|p| p["specs"]["battery"]["capacity"].as_i64().unwrap_or(0).to_string(), &|p| {
        p["specs"]["battery"]["capacity"].as_f64().unwrap_or(0.0)
    }, true);
    row("weight", &|p| p["weight"].as_str().unwrap_or("").to_string(), &|p| {
        num_of(&p["weight"].clone()).unwrap_or(f64::MAX)
    }, false);
    println!();
}

// ── Wishlist ────────────────────────────────────────────────

fn load_wishlist() -> Vec<String> {
    std::fs::read_to_string(WISHLIST_FILE)
        .ok()
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_default()
}

// ── REPL ────────────────────────────────────────────────────

fn main() {
    let db: Vec<Value> = serde_json::from_str(PHONES_JSON).expect("embedded phones.json");
    println!(
        "{BOLD}⚡ SmartPick CLI{RESET} — {} phones {DIM}(Rust port of the web app){RESET}",
        db.len()
    );
    println!("{DIM}Type help for commands.{RESET}");

    let stdin = io::stdin();
    let readline = || {
        let mut line = String::new();
        if stdin.lock().read_line(&mut line).unwrap_or(0) == 0 {
            None
        } else {
            Some(line)
        }
    };

    loop {
        print!("{CYAN}smartpick>{RESET} ");
        let _ = io::stdout().flush();
        let mut line = String::new();
        if stdin.lock().read_line(&mut line).unwrap_or(0) == 0 {
            break;
        }
        let mut parts = line.split_whitespace().map(|s| s.to_string());
        let cmd = parts.next().unwrap_or_default().to_lowercase();
        let rest = parts.collect::<Vec<_>>().join(" ");

        match cmd.as_str() {
            "" => continue,
            "quit" | "exit" | "q" => break,
            "help" | "?" => println!(
                "quiz                      6-step requirement finder (weighted match)\n\
                 list [brand] [--max=500]  browse catalog (--sort=price|rating|newest)\n\
                 find <text>               search by name/brand\n\
                 detail <phone>            full specs\n\
                 prices <phone>            multi-store comparison + best price\n\
                 compare <a> | <b> [| <c>] side-by-side (use | between names)\n\
                 top [n]                   highest rated\n\
                 wishlist [add|remove|show] <phone>\n\
                 quit"
            ),
            "quiz" => {
                let answers = run_quiz(&readline);
                let mut ranked: Vec<(&Value, i64)> = db
                    .iter()
                    .map(|p| (p, calculate_match_score(p, &answers)))
                    .collect();
                ranked.sort_by(|a, b| b.1.cmp(&a.1));
                println!();
                println!("{BOLD}🏆 Top matches for you:{RESET}");
                for (phone, score) in ranked.iter().take(10) {
                    show_card(phone, Some(*score));
                }
            }
            "list" | "ls" => {
                let mut brand = String::new();
                let mut max_price = f64::INFINITY;
                let mut sort = "rating".to_string();
                for token in rest.split_whitespace() {
                    if let Some(v) = token.strip_prefix("--max=") {
                        max_price = v.parse().unwrap_or(f64::INFINITY);
                    } else if let Some(v) = token.strip_prefix("--sort=") {
                        sort = v.to_string();
                    } else {
                        brand = token.to_lowercase();
                    }
                }
                let mut picks: Vec<&Value> = db
                    .iter()
                    .filter(|p| {
                        (brand.is_empty()
                            || p["brand"].as_str().unwrap_or("").to_lowercase().contains(&brand))
                            && p["price"]["current"].as_f64().unwrap_or(0.0) <= max_price
                    })
                    .collect();
                match sort.as_str() {
                    "price" => picks.sort_by(|a, b| {
                        a["price"]["current"]
                            .as_f64()
                            .unwrap_or(0.0)
                            .partial_cmp(&b["price"]["current"].as_f64().unwrap_or(0.0))
                            .unwrap_or(std::cmp::Ordering::Equal)
                    }),
                    "newest" => picks.sort_by(|a, b| {
                        b["releaseYear"].as_i64().unwrap_or(0).cmp(&a["releaseYear"].as_i64().unwrap_or(0))
                    }),
                    _ => picks.sort_by(|a, b| {
                        b["ratings"]["overall"]
                            .as_f64()
                            .unwrap_or(0.0)
                            .partial_cmp(&a["ratings"]["overall"].as_f64().unwrap_or(0.0))
                            .unwrap_or(std::cmp::Ordering::Equal)
                    }),
                }
                println!("{DIM}{} phone(s){RESET}", picks.len());
                for p in picks.iter().take(20) {
                    show_card(p, None);
                }
            }
            "find" | "search" => {
                if rest.is_empty() {
                    println!("{RED}Usage: find <text>{RESET}");
                    continue;
                }
                let hits: Vec<&Value> = db
                    .iter()
                    .filter(|p| {
                        format!("{} {}",
                            p["name"].as_str().unwrap_or(""),
                            p["brand"].as_str().unwrap_or(""))
                            .to_lowercase()
                            .contains(&rest.to_lowercase())
                    })
                    .collect();
                println!("{DIM}{} hit(s){RESET}", hits.len());
                for p in hits {
                    show_card(p, None);
                }
            }
            "detail" | "info" => match find_phone(&db, &rest) {
                Some(p) => show_detail(p),
                None => println!("{RED}No phone matches '{rest}'{RESET}"),
            },
            "prices" | "price" => match find_phone(&db, &rest) {
                Some(p) => show_prices(p),
                None => println!("{RED}No phone matches '{rest}'{RESET}"),
            },
            "compare" | "cmp" => {
                let names: Vec<&str> = rest.split('|').map(|s| s.trim()).collect();
                let found: Vec<Option<&Value>> =
                    names.iter().map(|n| find_phone(&db, n)).collect();
                if found.iter().any(|f| f.is_none()) || names.len() < 2 || names.len() > 3 {
                    println!("{RED}Usage: compare <phone1> | <phone2> [| <phone3>]{RESET}");
                    for (n, f) in names.iter().zip(found.iter()) {
                        if f.is_none() {
                            println!("{DIM}(no match for '{n}'){RESET}");
                        }
                    }
                    continue;
                }
                let phones: Vec<&Value> = found.into_iter().flatten().collect();
                show_compare(&phones);
            }
            "top" => {
                let n: usize = rest.parse().unwrap_or(10);
                let mut ranked: Vec<&Value> = db.iter().collect();
                ranked.sort_by(|a, b| {
                    b["ratings"]["overall"]
                        .as_f64()
                        .unwrap_or(0.0)
                        .partial_cmp(&a["ratings"]["overall"].as_f64().unwrap_or(0.0))
                        .unwrap_or(std::cmp::Ordering::Equal)
                });
                for p in ranked.into_iter().take(n) {
                    show_card(p, None);
                }
            }
            "wishlist" | "wl" => {
                let mut parts = rest.split_whitespace();
                let sub = parts.next().unwrap_or("show").to_lowercase();
                let name = parts.collect::<Vec<_>>().join(" ");
                let mut list = load_wishlist();
                match sub.as_str() {
                    "add" => match find_phone(&db, &name) {
                        Some(p) => {
                            let id = p["name"].as_str().unwrap_or("").to_string();
                            if list.contains(&id) {
                                println!("Already in wishlist.");
                            } else {
                                list.push(id.clone());
                                let _ = std::fs::write(
                                    WISHLIST_FILE,
                                    serde_json::to_string_pretty(&list).unwrap(),
                                );
                                println!("{GREEN}♥ Added{RESET} {id}");
                            }
                        }
                        None => println!("{RED}No phone matches '{name}'{RESET}"),
                    },
                    "remove" | "rm" => {
                        let before = list.len();
                        list.retain(|w| !w.eq_ignore_ascii_case(&name));
                        if list.len() != before {
                            let _ = std::fs::write(
                                WISHLIST_FILE,
                                serde_json::to_string_pretty(&list).unwrap(),
                            );
                            println!("Removed from wishlist.");
                        } else {
                            println!("'{name}' was not in the wishlist.");
                        }
                    }
                    _ => {
                        if list.is_empty() {
                            println!("{DIM}Wishlist is empty. Try: wishlist add iPhone 15 Pro Max{RESET}");
                        }
                        for w in &list {
                            match find_phone(&db, w) {
                                Some(p) => show_card(p, None),
                                None => println!("• {w}"),
                            }
                        }
                    }
                }
            }
            other => println!("{RED}Unknown command '{other}'{RESET} — type help"),
        }
    }
    println!("Bye! 👋");
}
