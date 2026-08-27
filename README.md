# ⚡ SmartPick — Smartphone Finder & Price Comparator

> A modern, responsive web application designed to help users find the perfect smartphone based on their custom requirements and track live multi-store prices.

![SmartPick Banner](https://picsum.photos/seed/smartpickpreview/1200/500)

---

## 🌟 Key Features

1. **🔍 Smart Requirement Finder (Quiz Wizard)**:
   - 6-step interactive questionnaire covering Budget, Primary Use-Case, Brand Preference, OS, Hardware Specs (RAM/Storage/Display/Battery), and Special Perks (5G, IP68, Wireless Charging, Foldables).
   - Dynamic weighted match percentage score calculation (e.g. *98% Match for You!*).
   - Celebration confetti animation on completion.

2. **💰 Multi-Store Price Checker**:
   - Compares live simulated pricing across **Amazon**, **Best Buy**, **Walmart**, and **Official Brand Stores**.
   - Identifies the lowest price with a **"Best Price"** badge and calculates instant savings.
   - 6-Month interactive **Price History Line Chart** (built with high-DPI HTML5 Canvas and hover tooltips) with all-time low markers.

3. **⚖️ 3-Way Smartphone Comparator**:
   - Compare up to 3 phones side-by-side.
   - Dynamic green highlighting (`winner-cell`) on winning specs and red highlights on weaker specs.
   - Automated Overall Benchmark Score & **"Best Value"** (Score-per-dollar) badge.
   - Interactive Add Phone modal, shareable comparison link via URL parameters, and clean Print/PDF export stylesheet.

4. **🔎 Advanced Search & Filters**:
   - Multi-criteria filter sidebar: Price range slider, Brand checkboxes (Apple, Samsung, Pixel, OnePlus, Xiaomi, Sony, Motorola, Asus, Nothing, Realme, Vivo), OS radio buttons, RAM pills, Display types, and Feature checkboxes.
   - Live search with instant autocomplete dropdown and **Web Speech API Voice Search** (`🎙️`).
   - Multiple sort algorithms: Price Low-to-High, High-to-Low, Rating, Newest, Most Popular, Best Value.

5. **📱 Comprehensive Phone Detail Pages**:
   - High-res photo gallery with multi-view thumbnail switcher.
   - Full technical datasheet: Display, Performance, Camera, Battery, Connectivity, and Build.
   - Editor-reviewed **Pros & Cons** analysis.
   - Similar smartphone recommendations within the same price bracket.

6. **❤️ LocalStorage Wishlist**:
   - Save favorite phones with heart icon toggles and pulsing animations.
   - Shareable wishlist link generation and bulk management.

7. **🏆 Curated Top Picks Leaderboards**:
   - Ranked lists for Best Overall, Best Camera, Best Gaming, Best Budget (Under $400), Best Battery, Best Business & Foldables, Best iPhones, and Best Androids.

8. **🌙 Dark & Light Mode + 🌐 Multi-Currency Converter**:
   - Default deep dark theme (`#0f0f13`) with glowing accents and smooth toggle to clean Light mode.
   - Instant currency conversion across **USD ($)**, **EUR (€)**, **GBP (£)**, and **INR (₹)**.

---

## 📁 File Structure

```
SmartPick/
├── index.html              ← Homepage (Hero, Search, Categories, Trending)
├── finder.html             ← Requirement Quiz Wizard
├── phones.html             ← All Phones Listing & Filter Sidebar
├── phone-detail.html       ← Single Phone Detail & Price History
├── compare.html            ← 3-Way Side-by-Side Comparator
├── wishlist.html           ← Saved Wishlist
├── top-picks.html          ← Curated Leaderboards & Rankings
│
├── css/
│   ├── dark-light.css      ← Theme variables (Dark default / Light)
│   ├── style.css           ← Base styles, Google Fonts & Layout
│   ├── components.css      ← Phone cards, buttons, badges, tables, modals
│   ├── animations.css      ← Hover lifts, float, confetti, skeleton loaders
│   └── responsive.css      ← Mobile-first breakpoints & print stylesheets
│
├── js/
│   ├── data/
│   │   └── phones.js       ← Complete database with 30 smartphones
│   ├── finder.js           ← Quiz wizard logic & weighted match score
│   ├── compare.js          ← Side-by-side comparison & winner evaluation
│   ├── filters.js          ← Search, fuzzy matching & multi-attribute filters
│   ├── wishlist.js         ← LocalStorage wishlist management
│   ├── priceChart.js       ← Canvas price history chart & tooltips
│   ├── ui.js               ← UI renderers, currency converter, toasts
│   └── app.js              ← Master application controller
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Run Locally
No build tools, bundlers, or package managers required. Simply open `index.html` in any modern web browser or serve with your favorite local server:

```bash
# Using Python
python -m http.server 8000

# Or using Node serve / live-server / VS Code Live Server
npx serve .
```

Visit `http://localhost:8000` in your browser.

---

## 🛠️ Built With
- **HTML5**: Semantic tags, Open Graph meta, Accessibility (ARIA).
- **Vanilla CSS3**: CSS Custom Properties, Grid, Flexbox, Glassmorphism, Responsive Media Queries.
- **Vanilla JavaScript (ES6+)**: Zero external dependencies.
- **Canvas API**: High-DPI interactive chart visualization.
- **Web Speech API**: Integrated voice search.
- **Google Fonts**: *Plus Jakarta Sans*, *Inter*, *JetBrains Mono*.

---

## 📄 License
MIT License © 2026 SmartPick
