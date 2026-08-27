Act as a Senior Full-Stack Web Developer and UI/UX Design Expert.

Build a complete, fully functional Smartphone Finder & 
Price Comparison Website using HTML, CSS, and JavaScript.

═══════════════════════════════════════
📋 PROJECT OVERVIEW
═══════════════════════════════════════

Project Name  : SmartPick - Smartphone Finder & Comparator
Purpose       : Help users find the perfect smartphone based
                on their requirements and compare prices
Target Users  : Anyone looking to buy a smartphone
Platform      : Responsive Web Application

═══════════════════════════════════════
🌟 CORE FEATURES LIST
═══════════════════════════════════════

1. 🔍 Smart Requirement Finder
2. 📊 Price Checker
3. ⚖️  Smartphone Comparator (side by side)
4. 🔎 Advanced Search & Filter
5. 📱 Smartphone Detail Page
6. ❤️  Wishlist / Save for Later
7. 🏆 Top Picks / Recommendations
8. 📈 Price History Chart
9. 🌙 Dark / Light Mode Toggle
10. 📤 Share & Export Results

═══════════════════════════════════════
🔍 FEATURE 1: SMART REQUIREMENT FINDER
═══════════════════════════════════════

Create a Step-by-Step Quiz / Wizard that asks:

STEP 1 - Budget Range:
──────────────────────
- Under $200
- $200 - $400
- $400 - $700
- $700 - $1000
- Above $1000
- (Custom range slider input)

STEP 2 - Primary Use Case:
───────────────────────────
- 📸 Photography & Video
- 🎮 Gaming
- 💼 Business & Productivity
- 📱 Social Media & Entertainment
- 🔋 Long Battery Life Priority
- 📞 Basic Calling & Messaging
- 🎵 Music & Media

STEP 3 - Preferred Brand:
──────────────────────────
- Apple (iPhone)
- Samsung
- Google Pixel
- OnePlus
- Xiaomi / Redmi
- Motorola
- Sony
- No Preference

STEP 4 - Operating System:
───────────────────────────
- iOS (Apple)
- Android
- No Preference

STEP 5 - Key Specifications:
─────────────────────────────
- RAM : 4GB / 6GB / 8GB / 12GB / 16GB+
- Storage : 64GB / 128GB / 256GB / 512GB / 1TB
- Screen Size : 
  • Small (under 6.0")
  • Medium (6.0" - 6.5")
  • Large (6.5" - 7.0")
  • Extra Large (7.0"+)
- Camera Priority:
  • Single Camera (Basic)
  • Dual Camera
  • Triple Camera
  • Quad Camera+
- Battery Capacity:
  • Basic (3000-4000mAh)
  • Good  (4000-5000mAh)
  • Beast (5000mAh+)

STEP 6 - Special Features:
────────────────────────────
(Multi-select checkboxes)
[ ] 5G Connectivity
[ ] Wireless Charging
[ ] Fast Charging (65W+)
[ ] Water Resistant (IP68)
[ ] Foldable Display
[ ] High Refresh Rate (120Hz+)
[ ] Stylus / S-Pen Support
[ ] Headphone Jack
[ ] MicroSD Card Slot
[ ] Face ID / Fingerprint
[ ] NFC Payment Support

→ After quiz: Show matched smartphones with 
  match percentage (e.g., "95% Match for You!")

═══════════════════════════════════════
💰 FEATURE 2: PRICE CHECKER
═══════════════════════════════════════

For each smartphone display:
────────────────────────────
- Current Price (Simulated/Static Data)
- Original MRP / Retail Price
- Discount Percentage badge
- Price across multiple stores:
  • Amazon    🛒
  • Best Buy  🏪
  • Walmart   🏬
  • Apple Store 🍎
  • Samsung Store 📱
  • Flipkart  (for Indian market)

Price Display Format:
──────────────────────
┌─────────────────────────────┐
│ 📦 Amazon        $799  🏆Best│
│ 🏪 Best Buy      $829        │
│ 🏬 Walmart       $819        │
│ 🍎 Apple Store   $899        │
└─────────────────────────────┘

Features:
─────────
- "Best Price" badge on cheapest store
- Price difference calculator
- "You Save: $XX" display
- Price drop alert (simulated toggle)
- Last updated timestamp
- Price history line chart (Chart.js or Canvas)
  showing last 6 months price trend

═══════════════════════════════════════
⚖️ FEATURE 3: SMARTPHONE COMPARATOR
═══════════════════════════════════════

Compare up to 3 smartphones side by side:
──────────────────────────────────────────

COMPARISON TABLE LAYOUT:
─────────────────────────

┌────────────────┬────────────┬────────────┬────────────┐
│  Feature       │ Phone 1    │ Phone 2    │ Phone 3    │
├────────────────┼────────────┼────────────┼────────────┤
│ 📸 Image       │ [img]      │ [img]      │ [img]      │
│ 💰 Price       │ $799       │ $999       │ $699       │
│ 📱 Display     │ 6.1" OLED  │ 6.7" AMOLED│ 6.4" LCD   │
│ ⚡ Processor   │ A16 Bionic │ Snapdragon │ Dimensity  │
│ 🧠 RAM         │ 6GB        │ 12GB       │ 8GB        │
│ 💾 Storage     │ 128GB      │ 256GB      │ 128GB      │
│ 📷 Camera      │ 48MP+12MP  │ 108MP      │ 64MP       │
│ 🔋 Battery     │ 3279mAh    │ 5000mAh    │ 4500mAh    │
│ ⚡ Charging    │ 20W        │ 65W        │ 33W        │
│ 📶 5G          │ ✅         │ ✅         │ ✅         │
│ 💧 Water Resist│ IP68       │ IP67       │ ❌         │
│ 🔊 OS          │ iOS 17     │ Android 14 │ Android 13 │
│ ⭐ Rating      │ 4.5/5      │ 4.7/5      │ 4.2/5      │
└────────────────┴────────────┴────────────┴────────────┘

Compare Features:
──────────────────
- Green highlight = Better spec in that row
- Red highlight = Weaker spec in that row
- "Winner" badge on best overall phone
- Overall Score (calculated automatically)
- "Best Value" badge (best specs per dollar)
- Remove phone from comparison button (X)
- Add to compare button on every phone card
- Share comparison as image or link

═══════════════════════════════════════
🔎 FEATURE 4: ADVANCED SEARCH & FILTERS
═══════════════════════════════════════

SEARCH BAR:
────────────
- Live search with autocomplete/suggestions
- Search by: phone name, brand, chipset
- Recent searches history
- Voice search button (Web Speech API)

FILTER PANEL (Left sidebar or Top bar):
─────────────────────────────────────────

Price Range:
  └── Dual-handle range slider ($0 - $2000)

Brand: (Checkbox list)
  └── Apple / Samsung / Google / OnePlus / 
      Xiaomi / Motorola / Sony / Realme

Operating System:
  └── iOS | Android

RAM:
  └── 4GB | 6GB | 8GB | 12GB | 16GB+

Storage:
  └── 64GB | 128GB | 256GB | 512GB | 1TB

Display Size:
  └── Range slider (4.5" to 7.5")

Display Type:
  └── OLED | AMOLED | LCD | IPS | LTPO

Camera (Main):
  └── 12MP+ | 48MP+ | 64MP+ | 108MP+ | 200MP+

Battery:
  └── 3000+ | 4000+ | 5000+ mAh

Refresh Rate:
  └── 60Hz | 90Hz | 120Hz | 144Hz+

Special Features: (Checkboxes)
  └── 5G | Wireless Charging | IP68 | 
      Fast Charging | Foldable | NFC

SORT OPTIONS:
──────────────
- Price: Low to High
- Price: High to Low
- Rating: High to Low
- Newest First
- Most Popular
- Best Match (based on quiz)
- Best Value for Money

═══════════════════════════════════════
📱 FEATURE 5: SMARTPHONE DETAIL PAGE
═══════════════════════════════════════

Each phone detail page should include:
───────────────────────────────────────

HERO SECTION:
─────────────
- Large phone image (multiple views/gallery)
- Phone name + Brand logo
- Star rating + number of reviews
- Current best price (large display)
- "Add to Compare" button
- "Add to Wishlist" (heart icon)
- "Share" button

SPECS TABLE (Full):
────────────────────
General:
  - Brand, Model, Release Date, OS, Weight, Colors

Display:
  - Size, Type, Resolution, Refresh Rate, 
    Brightness (nits), Protection (Gorilla Glass)

Performance:
  - Chipset/Processor, CPU cores, GPU,
    RAM options, Storage options

Camera:
  - Main Camera (MP, aperture, OIS)
  - Ultra Wide (MP, FOV)
  - Telephoto (MP, zoom)
  - Front Camera (MP)
  - Video recording (4K/8K support)
  - Special features (Night mode, AI, etc.)

Battery:
  - Capacity (mAh)
  - Wired charging speed (W)
  - Wireless charging (W)
  - Reverse wireless charging

Connectivity:
  - 5G / 4G LTE
  - WiFi version
  - Bluetooth version
  - NFC
  - USB type + version
  - GPS

Security:
  - Fingerprint (type + location)
  - Face Recognition

Additional:
  - Water resistance (IP rating)
  - Headphone jack
  - MicroSD slot
  - Stylus support
  - Foldable display

PROS & CONS SECTION:
──────────────────────
✅ Pros (3-5 bullet points)
❌ Cons (3-5 bullet points)

PRICE COMPARISON TABLE:
────────────────────────
(As described in Feature 2)

SIMILAR PHONES SECTION:
────────────────────────
- 4 similar phones in same price range
- Horizontal scroll cards

═══════════════════════════════════════
❤️ FEATURE 6: WISHLIST
═══════════════════════════════════════

- Add/Remove phones to Wishlist
- Heart icon toggle on every phone card
- Dedicated Wishlist page
- Wishlist count badge on nav icon
- Save wishlist to localStorage
- Share wishlist feature
- Move to compare from wishlist
- "Remove All" button

═══════════════════════════════════════
🏆 FEATURE 7: TOP PICKS SECTION
═══════════════════════════════════════

Curated Lists on Homepage:
───────────────────────────
- 🏆 Best Overall Smartphones 2024
- 📸 Best Camera Phones
- 🎮 Best Gaming Phones
- 💰 Best Budget Phones (Under $300)
- 🔋 Best Battery Life Phones
- 💼 Best Business Phones
- 📱 Best iPhones Ranked
- 🤖 Best Android Phones
- 🆕 Latest Released Phones
- ⭐ Editor's Choice

Each category shows:
─────────────────────
- Top 5 phones in horizontal scroll
- Rank badge (#1, #2, #3...)
- Quick specs preview
- Price badge
- "View All" button

═══════════════════════════════════════
📈 FEATURE 8: PRICE HISTORY CHART
═══════════════════════════════════════

- Line chart showing price over 6-12 months
- Show price drops and increases
- Highlight lowest ever price
- Highlight current price point
- Show on phone detail page
- Built using Canvas API or Chart.js CDN
- Tooltip on hover showing exact price + date

═══════════════════════════════════════
🎨 UI / DESIGN REQUIREMENTS
═══════════════════════════════════════

OVERALL THEME:
───────────────
- Modern, Clean, Tech-focused design
- Premium feel like GSMArena + Versus.com

COLOR SCHEME (Dark Mode Default):
───────────────────────────────────
- Background    : #0f0f13 (deep dark)
- Card BG       : #1a1a24 (dark card)
- Primary Color : #6c63ff (purple accent)
- Secondary     : #00d4ff (cyan blue)
- Success       : #00ff88 (green)
- Warning       : #ffbb00 (amber)
- Danger        : #ff4757 (red)
- Text Primary  : #ffffff
- Text Secondary: #a0a0b0
- Border Color  : #2a2a3a

LIGHT MODE:
────────────
- Background    : #f5f5fa
- Card BG       : #ffffff
- Text Primary  : #1a1a2e
- Border Color  : #e0e0ee

TYPOGRAPHY:
────────────
- Heading Font : 'Inter' or 'Plus Jakarta Sans'
- Body Font    : 'Inter'
- Mono Font    : 'JetBrains Mono' (for specs)
- Import from Google Fonts

COMPONENTS STYLE:
──────────────────
- Rounded cards (border-radius: 16px)
- Glassmorphism effect on hero cards
- Subtle gradient backgrounds
- Box shadows: 0 8px 32px rgba(0,0,0,0.3)
- Smooth hover lift effect on cards
- Gradient buttons with hover glow
- Pill-shaped filter badges
- Sticky header with blur backdrop

═══════════════════════════════════════
📐 LAYOUT & PAGES STRUCTURE
═══════════════════════════════════════

PAGES:
───────
1. 🏠 Homepage          (index.html)
2. 🔍 Finder Quiz       (finder.html)
3. 📋 Phone Listing     (phones.html)
4. 📱 Phone Detail      (phone-detail.html)
5. ⚖️  Compare Page     (compare.html)
6. ❤️  Wishlist Page    (wishlist.html)
7. 🏆 Top Picks Page    (top-picks.html)

HOMEPAGE SECTIONS:
───────────────────
1. Hero Banner:
   - Headline: "Find Your Perfect Smartphone"
   - Subheadline: "Compare prices, specs & reviews"
   - CTA Button: "Start Finding →"
   - CTA Button 2: "Compare Phones"
   - Animated floating phone mockup image

2. Quick Search Bar (centered, large)
3. Top Categories (icon grid)
4. Featured Phones (horizontal scroll)
5. Top Picks sections (by category)
6. How It Works (3 steps)
7. Price Alert Banner / CTA
8. Footer

NAVIGATION BAR:
────────────────
- Logo (left)
- Nav Links: Home | Find Phone | Compare | Top Picks
- Search icon
- Wishlist icon (with badge count)
- Dark/Light toggle
- Mobile: Hamburger menu

FOOTER:
────────
- Logo + tagline
- Links: About | Contact | Privacy | Terms
- Social icons
- "Data last updated" timestamp

═══════════════════════════════════════
⚙️ TECHNICAL REQUIREMENTS
═══════════════════════════════════════

HTML:
──────
- Semantic HTML5 structure
- SEO meta tags on all pages
- Open Graph tags for sharing
- Proper heading hierarchy (h1-h6)
- Alt text on all images
- ARIA labels for accessibility

CSS:
─────
- CSS Custom Properties (variables)
- CSS Grid + Flexbox layout
- Mobile-first responsive design
- Breakpoints:
  • Mobile  : 320px - 480px
  • Tablet  : 481px - 768px  
  • Laptop  : 769px - 1024px
  • Desktop : 1025px - 1440px
  • Wide    : 1441px+
- Smooth transitions (0.3s ease)
- CSS animations for loading states
- Print stylesheet for comparison table

JAVASCRIPT:
────────────

Data Layer:
  - phones.js → Large JSON array of 30-50 smartphones
    with all specs, prices, images (use placeholder images)

Each phone object structure:
────────────────────────────
{
  id: "iphone-15-pro",
  name: "iPhone 15 Pro",
  brand: "Apple",
  image: "url",
  gallery: ["url1","url2","url3"],
  releaseYear: 2023,
  os: "iOS 17",
  price: {
    current: 999,
    original: 1099,
    stores: {
      amazon: 999,
      bestbuy: 1029,
      walmart: 1019,
      official: 1099
    },
    history: [
      {month:"Jan", price:1099},
      {month:"Feb", price:1050},
      ...
    ]
  },
  specs: {
    display: {
      size: "6.1",
      type: "OLED",
      resolution: "2556x1179",
      refreshRate: 120,
      protection: "Ceramic Shield"
    },
    performance: {
      chipset: "Apple A17 Pro",
      ram: [8],
      storage: [128, 256, 512, 1024]
    },
    camera: {
      main: "48MP f/1.78",
      ultrawide: "12MP f/2.2",
      telephoto: "12MP 3x zoom",
      front: "12MP f/1.9",
      video: "4K 60fps"
    },
    battery: {
      capacity: 3274,
      wiredCharging: 20,
      wirelessCharging: 15,
      reverseWireless: false
    },
    connectivity: {
      fiveG: true,
      wifi: "WiFi 6E",
      bluetooth: "5.3",
      nfc: true,
      usb: "USB-C 3.0"
    },
    features: {
      waterResistance: "IP68",
      headphoneJack: false,
      microSD: false,
      fingerprint: "Side-mounted",
      faceID: true
    }
  },
  ratings: {
    overall: 4.7,
    camera: 4.8,
    battery: 4.2,
    performance: 4.9,
    display: 4.8,
    value: 4.0
  },
  pros: ["Excellent performance", "Great camera"],
  cons: ["Expensive", "No charger included"],
  tags: ["flagship", "5g", "premium", "camera"],
  isPopular: true,
  isEditorChoice: true
}

JavaScript Modules:
────────────────────
- phones.js        → Phone data (30-50 phones)
- finder.js        → Quiz logic & matching algorithm
- compare.js       → Comparison logic
- filters.js       → Search & filter functions
- wishlist.js      → Wishlist management
- priceChart.js    → Price history chart
- ui.js            → UI rendering functions
- app.js           → Main app controller

Key JS Functions:
──────────────────
findPhonesByRequirements(answers)  
  → Returns sorted array with match %

comparePhones(phone1, phone2, phone3)
  → Returns comparison data + highlights winner

filterPhones(filters)
  → Returns filtered array

searchPhones(query)
  → Returns search results with fuzzy match

calculateMatchScore(phone, requirements)
  → Returns 0-100 match percentage

getBestPrice(phone)
  → Returns lowest price + store name

renderPhoneCard(phone)
  → Returns HTML string for phone card

renderComparisonTable(phones[])
  → Returns full comparison table HTML

═══════════════════════════════════════
📱 SAMPLE PHONES DATA (Include These)
═══════════════════════════════════════

Include at least these 30 smartphones:

Apple iPhones:
- iPhone 15 Pro Max
- iPhone 15 Pro
- iPhone 15
- iPhone 14
- iPhone SE (2022)

Samsung Galaxy:
- Galaxy S24 Ultra
- Galaxy S24+
- Galaxy S24
- Galaxy A54
- Galaxy A34
- Galaxy Z Fold 5
- Galaxy Z Flip 5

Google Pixel:
- Pixel 8 Pro
- Pixel 8
- Pixel 7a

OnePlus:
- OnePlus 12
- OnePlus 12R
- OnePlus Nord CE 3

Xiaomi:
- Xiaomi 14 Pro
- Redmi Note 13 Pro
- POCO F5 Pro

Sony:
- Xperia 1 V
- Xperia 5 V

Motorola:
- Moto G84
- Moto Edge 40 Pro

Others:
- Asus ROG Phone 7
- Nothing Phone 2
- Realme GT 5
- Vivo X90 Pro

═══════════════════════════════════════
✨ ANIMATIONS & INTERACTIONS
═══════════════════════════════════════

Loading States:
- Skeleton loading cards
- Spinner for search results
- Progress bar for quiz steps

Card Interactions:
- Hover: lift shadow + scale(1.02)
- Click: ripple effect
- Wishlist: heart pulse animation
- Compare add: bounce animation

Page Transitions:
- Fade-in on page load
- Slide-in for filter panel
- Smooth scroll behavior

Comparison:
- Highlight winning spec (green flash)
- Animated counter for scores
- Slide-in columns

Quiz Wizard:
- Slide left/right between steps
- Progress bar animation
- Confetti on completion

═══════════════════════════════════════
📁 COMPLETE FILE STRUCTURE
═══════════════════════════════════════

SmartPick/
│
├── index.html              ← Homepage
├── finder.html             ← Requirement Quiz
├── phones.html             ← All Phones Listing
├── phone-detail.html       ← Single Phone Detail
├── compare.html            ← Comparison Page
├── wishlist.html           ← Wishlist Page
├── top-picks.html          ← Top Picks Page
│
├── css/
│   ├── style.css           ← Main styles
│   ├── components.css      ← Reusable components
│   ├── responsive.css      ← Media queries
│   ├── animations.css      ← All animations
│   └── dark-light.css      ← Theme variables
│
├── js/
│   ├── data/
│   │   └── phones.js       ← All phone data
│   ├── finder.js           ← Quiz logic
│   ├── compare.js          ← Comparison logic
│   ├── filters.js          ← Filter & search
│   ├── wishlist.js         ← Wishlist
│   ├── priceChart.js       ← Charts
│   ├── ui.js               ← UI rendering
│   └── app.js              ← Main controller
│
├── images/
│   └── (phone images/placeholders)
│
└── README.md

═══════════════════════════════════════
✅ DELIVERABLES
═══════════════════════════════════════

Generate in this order:
1. ✅ phones.js (complete data for all 30 phones)
2. ✅ index.html (homepage)
3. ✅ style.css (main stylesheet)
4. ✅ finder.html + finder.js (quiz feature)
5. ✅ phones.html + filters.js (listing page)
6. ✅ phone-detail.html (detail page)
7. ✅ compare.html + compare.js (comparator)
8. ✅ wishlist.html + wishlist.js
9. ✅ app.js (main controller)
10. ✅ README.md

═══════════════════════════════════════
⚡ BONUS FEATURES
═══════════════════════════════════════

- 🌐 Currency converter (USD/EUR/GBP/INR)
- 📊 Radar chart for phone ratings comparison
- 🖨️ Print/Export comparison as PDF
- 🔔 Price drop notification toggle
- 📰 Phone news/review section
- 🗣️ Voice search functionality
- 🔗 Shareable comparison link (URL params)
- 🏷️ Deal of the day banner
- 📧 Email comparison feature
- ♿ Full accessibility (WCAG 2.1)

Start by generating phones.js with 
complete data for all 30 smartphones first.
Add detailed comments throughout all code.