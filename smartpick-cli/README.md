# SmartPick CLI — Rust Edition

Terminal port of the SmartPick smartphone finder web app (parent folder).
The **weighted match algorithm is a line-for-line port** of `js/finder.js`
(budget 25 / use-case 20 / brand 15 / OS 15 / specs 15 / features 10,
normalized to 25–100%), over the same 55-device catalog — embedded here as
`src/phones.json`.

## Run

```bash
cargo run
```

## Commands

```
quiz                       6-step requirement finder (weighted match)
list [brand] [--max=500]   browse catalog (--sort=price|rating|newest)
find <text>                search by name/brand
detail <phone>             full specs
prices <phone>             multi-store comparison + best price badge
compare <a> | <b> [| <c>]  side-by-side with ◀ winner marks
top [n]                    highest rated
wishlist add|remove|show   saved to wishlist.json
```
