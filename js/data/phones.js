/**
 * SmartPick - Complete Smartphone Database
 * Contains 30 smartphones with full specifications, pricing, and metadata
 */

const PHONES_DATA = [
  // ═══════════════════════════════════════
  // APPLE iPHONES
  // ═══════════════════════════════════════
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone15promax/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone15promax1/600/700",
      "https://picsum.photos/seed/iphone15promax2/600/700",
      "https://picsum.photos/seed/iphone15promax3/600/700"
    ],
    releaseYear: 2023,
    os: "iOS 17",
    weight: "221g",
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    price: {
      current: 1199,
      original: 1199,
      stores: { amazon: 1149, bestbuy: 1199, walmart: 1179, official: 1199 },
      history: [
        { month: "Jan", price: 1199 }, { month: "Feb", price: 1199 },
        { month: "Mar", price: 1149 }, { month: "Apr", price: 1129 },
        { month: "May", price: 1099 }, { month: "Jun", price: 1149 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "OLED", resolution: "2796x1290", refreshRate: 120, brightness: 2000, protection: "Ceramic Shield" },
      performance: { chipset: "Apple A17 Pro", cpu: "6-core", gpu: "Apple GPU 6-core", ram: [8], storage: [256, 512, 1024] },
      camera: { main: "48MP f/1.78 OIS", ultrawide: "12MP f/2.2", telephoto: "12MP 5x zoom", front: "12MP f/1.9", video: "4K 60fps, ProRes" },
      battery: { capacity: 4441, wiredCharging: 27, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.8, camera: 4.9, battery: 4.5, performance: 4.9, display: 4.9, value: 3.8 },
    pros: ["Best-in-class performance", "Exceptional 5x telephoto camera", "Premium titanium build", "USB-C with USB 3", "Action button"],
    cons: ["Very expensive", "No charger in box", "Heavy at 221g", "Slow wired charging"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "gaming", "productivity"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone15pro/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone15pro1/600/700",
      "https://picsum.photos/seed/iphone15pro2/600/700",
      "https://picsum.photos/seed/iphone15pro3/600/700"
    ],
    releaseYear: 2023,
    os: "iOS 17",
    weight: "187g",
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 949, bestbuy: 999, walmart: 979, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 959 }, { month: "Apr", price: 949 },
        { month: "May", price: 929 }, { month: "Jun", price: 949 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2556x1179", refreshRate: 120, brightness: 2000, protection: "Ceramic Shield" },
      performance: { chipset: "Apple A17 Pro", cpu: "6-core", gpu: "Apple GPU 6-core", ram: [8], storage: [128, 256, 512, 1024] },
      camera: { main: "48MP f/1.78 OIS", ultrawide: "12MP f/2.2", telephoto: "12MP 3x zoom", front: "12MP f/1.9", video: "4K 60fps, ProRes" },
      battery: { capacity: 3274, wiredCharging: 27, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.7, camera: 4.8, battery: 4.2, performance: 4.9, display: 4.8, value: 4.0 },
    pros: ["Excellent A17 Pro chip", "Great triple camera system", "Lightweight titanium build", "USB-C finally"],
    cons: ["Expensive", "No charger included", "Small battery", "3x zoom vs 5x on Pro Max"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "productivity"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone15/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone151/600/700",
      "https://picsum.photos/seed/iphone152/600/700",
      "https://picsum.photos/seed/iphone153/600/700"
    ],
    releaseYear: 2023,
    os: "iOS 17",
    weight: "171g",
    colors: ["Blue", "Pink", "Yellow", "Green", "Black"],
    price: {
      current: 799,
      original: 799,
      stores: { amazon: 749, bestbuy: 799, walmart: 769, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 779 },
        { month: "Mar", price: 759 }, { month: "Apr", price: 749 },
        { month: "May", price: 729 }, { month: "Jun", price: 749 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2556x1179", refreshRate: 60, brightness: 2000, protection: "Ceramic Shield" },
      performance: { chipset: "Apple A16 Bionic", cpu: "6-core", gpu: "Apple GPU 5-core", ram: [6], storage: [128, 256, 512] },
      camera: { main: "48MP f/1.6 OIS", ultrawide: "12MP f/2.4", telephoto: "None", front: "12MP f/1.9", video: "4K 60fps" },
      battery: { capacity: 3349, wiredCharging: 20, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: false }
    },
    ratings: { overall: 4.5, camera: 4.5, battery: 4.3, performance: 4.6, display: 4.5, value: 4.2 },
    pros: ["Dynamic Island", "Great 48MP camera", "USB-C", "Beautiful colors"],
    cons: ["60Hz display", "No telephoto", "USB 2.0 speeds", "No charger included"],
    tags: ["midrange", "5g", "camera", "social-media"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone14/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone141/600/700",
      "https://picsum.photos/seed/iphone142/600/700",
      "https://picsum.photos/seed/iphone143/600/700"
    ],
    releaseYear: 2022,
    os: "iOS 17",
    weight: "172g",
    colors: ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"],
    price: {
      current: 699,
      original: 799,
      stores: { amazon: 649, bestbuy: 699, walmart: 679, official: 699 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 769 },
        { month: "Mar", price: 749 }, { month: "Apr", price: 699 },
        { month: "May", price: 679 }, { month: "Jun", price: 649 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2532x1170", refreshRate: 60, brightness: 1200, protection: "Ceramic Shield" },
      performance: { chipset: "Apple A15 Bionic", cpu: "6-core", gpu: "Apple GPU 5-core", ram: [6], storage: [128, 256, 512] },
      camera: { main: "12MP f/1.5 OIS", ultrawide: "12MP f/2.4", telephoto: "None", front: "12MP f/1.9", video: "4K 60fps" },
      battery: { capacity: 3279, wiredCharging: 20, wirelessCharging: 7.5, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "Lightning", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: false }
    },
    ratings: { overall: 4.3, camera: 4.2, battery: 4.1, performance: 4.4, display: 4.3, value: 4.0 },
    pros: ["Still powerful A15 chip", "Great camera", "Emergency SOS via satellite", "Crash detection"],
    cons: ["60Hz display", "Lightning port", "Minimal upgrade from 13", "No telephoto"],
    tags: ["midrange", "5g", "camera", "social-media"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "iphone-se-2022",
    name: "iPhone SE (2022)",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphonese2022/400/500",
    gallery: [
      "https://picsum.photos/seed/iphonese20221/600/700",
      "https://picsum.photos/seed/iphonese20222/600/700",
      "https://picsum.photos/seed/iphonese20223/600/700"
    ],
    releaseYear: 2022,
    os: "iOS 17",
    weight: "144g",
    colors: ["Midnight", "Starlight", "Red"],
    price: {
      current: 429,
      original: 429,
      stores: { amazon: 379, bestbuy: 429, walmart: 399, official: 429 },
      history: [
        { month: "Jan", price: 429 }, { month: "Feb", price: 429 },
        { month: "Mar", price: 399 }, { month: "Apr", price: 379 },
        { month: "May", price: 369 }, { month: "Jun", price: 379 }
      ]
    },
    specs: {
      display: { size: "4.7", type: "LCD", resolution: "1334x750", refreshRate: 60, brightness: 625, protection: "Ion-X Glass" },
      performance: { chipset: "Apple A15 Bionic", cpu: "6-core", gpu: "Apple GPU 4-core", ram: [4], storage: [64, 128, 256] },
      camera: { main: "12MP f/1.8 OIS", ultrawide: "None", telephoto: "None", front: "7MP f/2.2", video: "4K 60fps" },
      battery: { capacity: 2018, wiredCharging: 20, wirelessCharging: 7.5, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.0", nfc: true, usb: "Lightning", gps: true },
      features: { waterResistance: "IP67", headphoneJack: false, microSD: false, fingerprint: "Touch ID (Home button)", faceID: false, foldable: false, stylus: false, fastCharging: false, highRefreshRate: false }
    },
    ratings: { overall: 3.9, camera: 3.5, battery: 3.0, performance: 4.4, display: 3.2, value: 4.2 },
    pros: ["Affordable iPhone", "Powerful A15 chip", "Compact size", "Touch ID"],
    cons: ["Tiny battery", "Outdated design", "Small LCD screen", "Single camera"],
    tags: ["budget", "5g", "basic", "compact"],
    isPopular: false,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // SAMSUNG GALAXY
  // ═══════════════════════════════════════
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxys24ultra/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxys24ultra1/600/700",
      "https://picsum.photos/seed/galaxys24ultra2/600/700",
      "https://picsum.photos/seed/galaxys24ultra3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "232g",
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
    price: {
      current: 1299,
      original: 1299,
      stores: { amazon: 1249, bestbuy: 1299, walmart: 1279, official: 1299 },
      history: [
        { month: "Jan", price: 1299 }, { month: "Feb", price: 1299 },
        { month: "Mar", price: 1249 }, { month: "Apr", price: 1199 },
        { month: "May", price: 1249 }, { month: "Jun", price: 1249 }
      ]
    },
    specs: {
      display: { size: "6.8", type: "AMOLED", resolution: "3120x1440", refreshRate: 120, brightness: 2600, protection: "Gorilla Armor" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12], storage: [256, 512, 1024] },
      camera: { main: "200MP f/1.7 OIS", ultrawide: "12MP f/2.2", telephoto: "50MP 5x + 10MP 3x", front: "12MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 5000, wiredCharging: 45, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: true, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.8, camera: 4.9, battery: 4.6, performance: 4.8, display: 4.9, value: 3.9 },
    pros: ["200MP camera is incredible", "S Pen included", "Galaxy AI features", "Titanium build", "7 years of updates"],
    cons: ["Very expensive", "Heavy and large", "No charger in box", "S Pen silo smaller"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "gaming", "productivity", "stylus"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "galaxy-s24-plus",
    name: "Galaxy S24+",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxys24plus/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxys24plus1/600/700",
      "https://picsum.photos/seed/galaxys24plus2/600/700",
      "https://picsum.photos/seed/galaxys24plus3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "196g",
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 949, bestbuy: 999, walmart: 979, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 949 }, { month: "Apr", price: 929 },
        { month: "May", price: 949 }, { month: "Jun", price: 949 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "3120x1440", refreshRate: 120, brightness: 2600, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12], storage: [256, 512] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "10MP 3x zoom", front: "12MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 4900, wiredCharging: 45, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.6, camera: 4.5, battery: 4.5, performance: 4.8, display: 4.8, value: 4.1 },
    pros: ["Bright QHD+ display", "Galaxy AI features", "Strong performance", "Good battery life"],
    cons: ["No S Pen", "50MP vs 200MP on Ultra", "Expensive", "No charger in box"],
    tags: ["flagship", "5g", "premium", "camera", "entertainment"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-s24",
    name: "Galaxy S24",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxys24/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxys241/600/700",
      "https://picsum.photos/seed/galaxys242/600/700",
      "https://picsum.photos/seed/galaxys243/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "167g",
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    price: {
      current: 799,
      original: 799,
      stores: { amazon: 749, bestbuy: 799, walmart: 779, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 799 },
        { month: "Mar", price: 749 }, { month: "Apr", price: 729 },
        { month: "May", price: 749 }, { month: "Jun", price: 749 }
      ]
    },
    specs: {
      display: { size: "6.2", type: "AMOLED", resolution: "2340x1080", refreshRate: 120, brightness: 2600, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Exynos 2400", cpu: "8-core", gpu: "Xclipse 940", ram: [8], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "10MP 3x zoom", front: "12MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 4000, wiredCharging: 25, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.4, camera: 4.4, battery: 4.0, performance: 4.5, display: 4.6, value: 4.2 },
    pros: ["Compact flagship", "Galaxy AI", "120Hz AMOLED", "7 years of updates"],
    cons: ["Exynos chip in some regions", "Small 4000mAh battery", "Slow charging", "No charger"],
    tags: ["flagship", "5g", "compact", "camera"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-a54",
    name: "Galaxy A54 5G",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxya54/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxya541/600/700",
      "https://picsum.photos/seed/galaxya542/600/700",
      "https://picsum.photos/seed/galaxya543/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "202g",
    colors: ["Awesome Graphite", "Awesome Lime", "Awesome Violet", "Awesome White"],
    price: {
      current: 349,
      original: 449,
      stores: { amazon: 329, bestbuy: 349, walmart: 339, official: 449 },
      history: [
        { month: "Jan", price: 449 }, { month: "Feb", price: 429 },
        { month: "Mar", price: 399 }, { month: "Apr", price: 379 },
        { month: "May", price: 349 }, { month: "Jun", price: 329 }
      ]
    },
    specs: {
      display: { size: "6.4", type: "AMOLED", resolution: "2340x1080", refreshRate: 120, brightness: 1000, protection: "Gorilla Glass 5" },
      performance: { chipset: "Exynos 1380", cpu: "8-core", gpu: "Mali-G68 MP5", ram: [6, 8], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "5MP macro", front: "32MP f/2.2", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 25, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP67", headphoneJack: false, microSD: true, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.2, camera: 4.0, battery: 4.5, performance: 3.8, display: 4.3, value: 4.6 },
    pros: ["Great value for money", "Big 5000mAh battery", "120Hz AMOLED", "IP67 water resistance", "MicroSD slot"],
    cons: ["Average chipset", "No wireless charging", "Slow charging", "Plasticky feel"],
    tags: ["budget", "5g", "battery", "value", "social-media"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-a34",
    name: "Galaxy A34 5G",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxya34/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxya341/600/700",
      "https://picsum.photos/seed/galaxya342/600/700",
      "https://picsum.photos/seed/galaxya343/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "199g",
    colors: ["Awesome Graphite", "Awesome Lime", "Awesome Violet", "Awesome Silver"],
    price: {
      current: 279,
      original: 399,
      stores: { amazon: 259, bestbuy: 279, walmart: 269, official: 399 },
      history: [
        { month: "Jan", price: 399 }, { month: "Feb", price: 369 },
        { month: "Mar", price: 349 }, { month: "Apr", price: 299 },
        { month: "May", price: 279 }, { month: "Jun", price: 259 }
      ]
    },
    specs: {
      display: { size: "6.6", type: "AMOLED", resolution: "2340x1080", refreshRate: 120, brightness: 1000, protection: "Gorilla Glass 5" },
      performance: { chipset: "Dimensity 1080", cpu: "8-core", gpu: "Mali-G68 MC4", ram: [6, 8], storage: [128, 256] },
      camera: { main: "48MP f/1.8 OIS", ultrawide: "8MP f/2.2", telephoto: "5MP macro", front: "13MP f/2.2", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 25, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP67", headphoneJack: true, microSD: true, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.0, camera: 3.8, battery: 4.5, performance: 3.6, display: 4.2, value: 4.7 },
    pros: ["Excellent value", "Great battery", "120Hz AMOLED", "Headphone jack", "MicroSD slot"],
    cons: ["Mediocre chipset", "Average cameras", "No wireless charging", "Plasticky build"],
    tags: ["budget", "5g", "battery", "value", "basic"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "galaxy-z-fold-5",
    name: "Galaxy Z Fold 5",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxyzfold5/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxyzfold51/600/700",
      "https://picsum.photos/seed/galaxyzfold52/600/700",
      "https://picsum.photos/seed/galaxyzfold53/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "253g",
    colors: ["Icy Blue", "Phantom Black", "Cream"],
    price: {
      current: 1799,
      original: 1799,
      stores: { amazon: 1699, bestbuy: 1799, walmart: 1749, official: 1799 },
      history: [
        { month: "Jan", price: 1799 }, { month: "Feb", price: 1799 },
        { month: "Mar", price: 1699 }, { month: "Apr", price: 1649 },
        { month: "May", price: 1599 }, { month: "Jun", price: 1699 }
      ]
    },
    specs: {
      display: { size: "7.6", type: "AMOLED", resolution: "2176x1812", refreshRate: 120, brightness: 1750, protection: "UTG Glass" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [12], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "10MP 3x zoom", front: "10MP (cover) + 4MP (under display)", video: "8K 30fps" },
      battery: { capacity: 4400, wiredCharging: 25, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IPX8", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: true, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.4, camera: 4.3, battery: 3.8, performance: 4.7, display: 4.8, value: 3.2 },
    pros: ["Incredible foldable display", "Powerful multitasking", "S Pen support", "Improved hinge"],
    cons: ["Extremely expensive", "Heavy", "Visible crease", "Average battery"],
    tags: ["flagship", "5g", "premium", "foldable", "productivity", "entertainment"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-z-flip-5",
    name: "Galaxy Z Flip 5",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxyzflip5/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxyzflip51/600/700",
      "https://picsum.photos/seed/galaxyzflip52/600/700",
      "https://picsum.photos/seed/galaxyzflip53/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "187g",
    colors: ["Mint", "Graphite", "Cream", "Lavender"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 899, bestbuy: 999, walmart: 949, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 949 }, { month: "Apr", price: 899 },
        { month: "May", price: 879 }, { month: "Jun", price: 899 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "2640x1080", refreshRate: 120, brightness: 1750, protection: "UTG Glass" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [8], storage: [256, 512] },
      camera: { main: "12MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "None", front: "10MP f/2.4", video: "4K 60fps" },
      battery: { capacity: 3700, wiredCharging: 25, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IPX8", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.2, camera: 3.8, battery: 3.5, performance: 4.5, display: 4.4, value: 3.5 },
    pros: ["Stylish flip form factor", "Large cover screen", "Flex Mode for selfies", "Compact when folded"],
    cons: ["Expensive for specs", "Average cameras", "Small battery", "Visible crease"],
    tags: ["flagship", "5g", "foldable", "social-media", "compact"],
    isPopular: true,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // GOOGLE PIXEL
  // ═══════════════════════════════════════
  {
    id: "pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel8pro/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel8pro1/600/700",
      "https://picsum.photos/seed/pixel8pro2/600/700",
      "https://picsum.photos/seed/pixel8pro3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 14",
    weight: "213g",
    colors: ["Obsidian", "Porcelain", "Bay"],
    price: {
      current: 899,
      original: 999,
      stores: { amazon: 849, bestbuy: 899, walmart: 879, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 949 },
        { month: "Mar", price: 899 }, { month: "Apr", price: 849 },
        { month: "May", price: 849 }, { month: "Jun", price: 849 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "LTPO OLED", resolution: "2992x1344", refreshRate: 120, brightness: 2400, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Google Tensor G3", cpu: "9-core", gpu: "Immortalis-G715", ram: [12], storage: [128, 256, 512, 1024] },
      camera: { main: "50MP f/1.68 OIS", ultrawide: "48MP f/1.95", telephoto: "48MP 5x zoom", front: "10.5MP f/2.2", video: "4K 60fps" },
      battery: { capacity: 5050, wiredCharging: 30, wirelessCharging: 23, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.6, camera: 4.8, battery: 4.4, performance: 4.3, display: 4.7, value: 4.3 },
    pros: ["Best Android camera", "7 years of updates", "AI features like Magic Eraser", "Bright 120Hz display", "Temperature sensor"],
    cons: ["Tensor chip less powerful than Snapdragon", "Can run warm", "No fast charging", "Limited availability"],
    tags: ["flagship", "5g", "camera", "photography", "ai"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "pixel-8",
    name: "Pixel 8",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel8/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel81/600/700",
      "https://picsum.photos/seed/pixel82/600/700",
      "https://picsum.photos/seed/pixel83/600/700"
    ],
    releaseYear: 2023,
    os: "Android 14",
    weight: "187g",
    colors: ["Obsidian", "Hazel", "Rose"],
    price: {
      current: 599,
      original: 699,
      stores: { amazon: 549, bestbuy: 599, walmart: 579, official: 699 },
      history: [
        { month: "Jan", price: 699 }, { month: "Feb", price: 679 },
        { month: "Mar", price: 649 }, { month: "Apr", price: 599 },
        { month: "May", price: 569 }, { month: "Jun", price: 549 }
      ]
    },
    specs: {
      display: { size: "6.2", type: "OLED", resolution: "2400x1080", refreshRate: 120, brightness: 2000, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Google Tensor G3", cpu: "9-core", gpu: "Immortalis-G715", ram: [8], storage: [128, 256] },
      camera: { main: "50MP f/1.68 OIS", ultrawide: "12MP f/2.2", telephoto: "None", front: "10.5MP f/2.2", video: "4K 60fps" },
      battery: { capacity: 4575, wiredCharging: 27, wirelessCharging: 18, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.5, camera: 4.6, battery: 4.3, performance: 4.2, display: 4.5, value: 4.5 },
    pros: ["Excellent camera for the price", "7 years of updates", "Clean Android", "Compact and light"],
    cons: ["No telephoto", "Tensor chip heats up", "USB 2.0", "No fast charging"],
    tags: ["midrange", "5g", "camera", "photography", "compact", "value"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "pixel-7a",
    name: "Pixel 7a",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel7a/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel7a1/600/700",
      "https://picsum.photos/seed/pixel7a2/600/700",
      "https://picsum.photos/seed/pixel7a3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "193g",
    colors: ["Charcoal", "Snow", "Sea", "Coral"],
    price: {
      current: 399,
      original: 499,
      stores: { amazon: 349, bestbuy: 399, walmart: 379, official: 499 },
      history: [
        { month: "Jan", price: 499 }, { month: "Feb", price: 469 },
        { month: "Mar", price: 449 }, { month: "Apr", price: 399 },
        { month: "May", price: 379 }, { month: "Jun", price: 349 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2400x1080", refreshRate: 90, brightness: 1400, protection: "Gorilla Glass 3" },
      performance: { chipset: "Google Tensor G2", cpu: "8-core", gpu: "Mali-G710 MP7", ram: [8], storage: [128] },
      camera: { main: "64MP f/1.89 OIS", ultrawide: "13MP f/2.2", telephoto: "None", front: "13MP f/2.2", video: "4K 30fps" },
      battery: { capacity: 4385, wiredCharging: 18, wirelessCharging: 7.5, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP67", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.3, camera: 4.4, battery: 4.0, performance: 4.0, display: 4.2, value: 4.7 },
    pros: ["Incredible value", "Great camera for the price", "90Hz OLED", "Wireless charging"],
    cons: ["Slow charging", "Only 128GB storage", "Average battery life", "Tensor G2 heats up"],
    tags: ["budget", "5g", "camera", "value", "photography"],
    isPopular: true,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // ONEPLUS
  // ═══════════════════════════════════════
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplus12/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplus121/600/700",
      "https://picsum.photos/seed/oneplus122/600/700",
      "https://picsum.photos/seed/oneplus123/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "220g",
    colors: ["Flowy Emerald", "Silky Black"],
    price: {
      current: 799,
      original: 799,
      stores: { amazon: 749, bestbuy: 799, walmart: 779, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 799 },
        { month: "Mar", price: 769 }, { month: "Apr", price: 749 },
        { month: "May", price: 749 }, { month: "Jun", price: 749 }
      ]
    },
    specs: {
      display: { size: "6.82", type: "LTPO AMOLED", resolution: "3168x1440", refreshRate: 120, brightness: 4500, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.6 OIS (Sony LYT-808)", ultrawide: "48MP f/2.2", telephoto: "64MP 3x zoom", front: "32MP f/2.4", video: "4K 60fps, Dolby Vision" },
      battery: { capacity: 5400, wiredCharging: 100, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP65", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.7, camera: 4.6, battery: 4.8, performance: 4.9, display: 4.9, value: 4.5 },
    pros: ["Blazing 100W fast charging", "Incredible 4500 nit display", "Hasselblad camera tuning", "Huge 5400mAh battery"],
    cons: ["No IP68", "Large and heavy", "USB 2.0 speeds", "OxygenOS bloat"],
    tags: ["flagship", "5g", "premium", "battery", "gaming", "fast-charging"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplus12r/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplus12r1/600/700",
      "https://picsum.photos/seed/oneplus12r2/600/700",
      "https://picsum.photos/seed/oneplus12r3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "207g",
    colors: ["Iron Gray", "Cool Blue"],
    price: {
      current: 499,
      original: 499,
      stores: { amazon: 449, bestbuy: 499, walmart: 479, official: 499 },
      history: [
        { month: "Jan", price: 499 }, { month: "Feb", price: 499 },
        { month: "Mar", price: 469 }, { month: "Apr", price: 449 },
        { month: "May", price: 449 }, { month: "Jun", price: 449 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "LTPO AMOLED", resolution: "2780x1264", refreshRate: 120, brightness: 4500, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [8, 16], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS (Sony IMX890)", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "4K 60fps" },
      battery: { capacity: 5500, wiredCharging: 100, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "None", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.3, camera: 3.8, battery: 4.7, performance: 4.5, display: 4.6, value: 4.7 },
    pros: ["100W SUPERVOOC charging", "Huge 5500mAh battery", "120Hz AMOLED", "Great gaming performance"],
    cons: ["No water resistance", "Average cameras", "No wireless charging", "Plastic frame"],
    tags: ["midrange", "5g", "battery", "gaming", "fast-charging", "value"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "oneplus-nord-ce3",
    name: "OnePlus Nord CE 3",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplusnordce3/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplusnordce31/600/700",
      "https://picsum.photos/seed/oneplusnordce32/600/700",
      "https://picsum.photos/seed/oneplusnordce33/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "184g",
    colors: ["Aqua Surge", "Gray Shimmer"],
    price: {
      current: 299,
      original: 349,
      stores: { amazon: 279, bestbuy: 299, walmart: 289, official: 349 },
      history: [
        { month: "Jan", price: 349 }, { month: "Feb", price: 329 },
        { month: "Mar", price: 309 }, { month: "Apr", price: 299 },
        { month: "May", price: 289 }, { month: "Jun", price: 279 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "2412x1080", refreshRate: 120, brightness: 950, protection: "Gorilla Glass 5" },
      performance: { chipset: "Snapdragon 782G", cpu: "8-core", gpu: "Adreno 642L", ram: [8, 12], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 67, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "None", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.0, camera: 3.7, battery: 4.4, performance: 3.9, display: 4.1, value: 4.6 },
    pros: ["67W fast charging", "120Hz AMOLED", "Decent performance", "Good battery"],
    cons: ["No water resistance", "Average cameras", "No wireless charging", "Average ultrawide"],
    tags: ["budget", "5g", "battery", "fast-charging", "value"],
    isPopular: false,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // XIAOMI
  // ═══════════════════════════════════════
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    image: "https://picsum.photos/seed/xiaomi14pro/400/500",
    gallery: [
      "https://picsum.photos/seed/xiaomi14pro1/600/700",
      "https://picsum.photos/seed/xiaomi14pro2/600/700",
      "https://picsum.photos/seed/xiaomi14pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "223g",
    colors: ["Black", "White", "Green"],
    price: {
      current: 849,
      original: 899,
      stores: { amazon: 799, bestbuy: 849, walmart: 829, official: 899 },
      history: [
        { month: "Jan", price: 899 }, { month: "Feb", price: 899 },
        { month: "Mar", price: 869 }, { month: "Apr", price: 849 },
        { month: "May", price: 829 }, { month: "Jun", price: 799 }
      ]
    },
    specs: {
      display: { size: "6.73", type: "LTPO AMOLED", resolution: "3200x1440", refreshRate: 120, brightness: 3000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.42 OIS (Leica)", ultrawide: "50MP f/2.0", telephoto: "50MP 3.2x zoom", front: "32MP f/2.0", video: "8K 24fps" },
      battery: { capacity: 4880, wiredCharging: 120, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.6, camera: 4.7, battery: 4.5, performance: 4.8, display: 4.8, value: 4.4 },
    pros: ["Leica camera system", "120W HyperCharge", "Stunning display", "Great value flagship"],
    cons: ["MIUI has ads", "Limited global availability", "Heavy", "USB 2.0"],
    tags: ["flagship", "5g", "camera", "photography", "fast-charging", "value"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "redmi-note-13-pro",
    name: "Redmi Note 13 Pro",
    brand: "Xiaomi",
    image: "https://picsum.photos/seed/redminote13pro/400/500",
    gallery: [
      "https://picsum.photos/seed/redminote13pro1/600/700",
      "https://picsum.photos/seed/redminote13pro2/600/700",
      "https://picsum.photos/seed/redminote13pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "187g",
    colors: ["Midnight Black", "Lavender Purple", "Ocean Teal"],
    price: {
      current: 279,
      original: 329,
      stores: { amazon: 259, bestbuy: 279, walmart: 269, official: 329 },
      history: [
        { month: "Jan", price: 329 }, { month: "Feb", price: 319 },
        { month: "Mar", price: 299 }, { month: "Apr", price: 289 },
        { month: "May", price: 279 }, { month: "Jun", price: 259 }
      ]
    },
    specs: {
      display: { size: "6.67", type: "AMOLED", resolution: "2400x1080", refreshRate: 120, brightness: 1800, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Snapdragon 7s Gen 2", cpu: "8-core", gpu: "Adreno 710", ram: [8, 12], storage: [128, 256, 512] },
      camera: { main: "200MP f/1.65 OIS", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "4K 30fps" },
      battery: { capacity: 5100, wiredCharging: 67, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.2", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP54", headphoneJack: true, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.1, camera: 4.2, battery: 4.4, performance: 3.8, display: 4.3, value: 4.8 },
    pros: ["200MP camera at this price!", "67W fast charging", "Great AMOLED display", "Incredible value"],
    cons: ["MIUI ads", "Average ultrawide", "No wireless charging", "IP54 only"],
    tags: ["budget", "5g", "camera", "fast-charging", "value"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "poco-f5-pro",
    name: "POCO F5 Pro",
    brand: "Xiaomi",
    image: "https://picsum.photos/seed/pocof5pro/400/500",
    gallery: [
      "https://picsum.photos/seed/pocof5pro1/600/700",
      "https://picsum.photos/seed/pocof5pro2/600/700",
      "https://picsum.photos/seed/pocof5pro3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "204g",
    colors: ["Black", "White"],
    price: {
      current: 399,
      original: 449,
      stores: { amazon: 369, bestbuy: 399, walmart: 389, official: 449 },
      history: [
        { month: "Jan", price: 449 }, { month: "Feb", price: 429 },
        { month: "Mar", price: 419 }, { month: "Apr", price: 399 },
        { month: "May", price: 389 }, { month: "Jun", price: 369 }
      ]
    },
    specs: {
      display: { size: "6.67", type: "AMOLED", resolution: "3200x1440", refreshRate: 120, brightness: 1400, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Snapdragon 8+ Gen 1", cpu: "8-core", gpu: "Adreno 730", ram: [8, 12], storage: [256, 512] },
      camera: { main: "64MP f/1.79 OIS", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "8K 24fps" },
      battery: { capacity: 5160, wiredCharging: 67, wirelessCharging: 30, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP53", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.3, camera: 3.9, battery: 4.5, performance: 4.6, display: 4.5, value: 4.8 },
    pros: ["Flagship chip at mid-range price", "QHD+ 120Hz display", "67W + wireless charging", "Great gaming phone"],
    cons: ["Average cameras", "MIUI ads", "No IP68", "Plastic frame"],
    tags: ["midrange", "5g", "gaming", "fast-charging", "value", "battery"],
    isPopular: false,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // SONY
  // ═══════════════════════════════════════
  {
    id: "xperia-1-v",
    name: "Xperia 1 V",
    brand: "Sony",
    image: "https://picsum.photos/seed/xperia1v/400/500",
    gallery: [
      "https://picsum.photos/seed/xperia1v1/600/700",
      "https://picsum.photos/seed/xperia1v2/600/700",
      "https://picsum.photos/seed/xperia1v3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "187g",
    colors: ["Black", "Platinum Silver", "Khaki Green"],
    price: {
      current: 1199,
      original: 1399,
      stores: { amazon: 1099, bestbuy: 1199, walmart: 1149, official: 1399 },
      history: [
        { month: "Jan", price: 1399 }, { month: "Feb", price: 1349 },
        { month: "Mar", price: 1299 }, { month: "Apr", price: 1249 },
        { month: "May", price: 1199 }, { month: "Jun", price: 1099 }
      ]
    },
    specs: {
      display: { size: "6.5", type: "OLED", resolution: "3840x1644", refreshRate: 120, brightness: 1000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [12], storage: [256, 512] },
      camera: { main: "52MP f/1.9 OIS (Exmor T)", ultrawide: "12MP f/2.2", telephoto: "12MP 3.5-5.2x zoom", front: "12MP f/2.0", video: "4K 120fps" },
      battery: { capacity: 5000, wiredCharging: 30, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: true, microSD: true, fingerprint: "Side-mounted", faceID: false, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.4, camera: 4.7, battery: 4.3, performance: 4.6, display: 4.9, value: 3.5 },
    pros: ["4K OLED display", "Pro camera controls", "Headphone jack", "MicroSD slot", "21:9 cinematic ratio"],
    cons: ["Very expensive", "Niche market", "Average selfie camera", "Low brightness"],
    tags: ["flagship", "5g", "camera", "photography", "music", "entertainment"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "xperia-5-v",
    name: "Xperia 5 V",
    brand: "Sony",
    image: "https://picsum.photos/seed/xperia5v/400/500",
    gallery: [
      "https://picsum.photos/seed/xperia5v1/600/700",
      "https://picsum.photos/seed/xperia5v2/600/700",
      "https://picsum.photos/seed/xperia5v3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "182g",
    colors: ["Black", "Platinum Silver", "Blue"],
    price: {
      current: 899,
      original: 999,
      stores: { amazon: 849, bestbuy: 899, walmart: 879, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 969 },
        { month: "Mar", price: 949 }, { month: "Apr", price: 899 },
        { month: "May", price: 879 }, { month: "Jun", price: 849 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2520x1080", refreshRate: 120, brightness: 1000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [8], storage: [128, 256] },
      camera: { main: "52MP f/1.9 OIS (Exmor T)", ultrawide: "12MP f/2.2", telephoto: "None", front: "12MP f/2.0", video: "4K 120fps" },
      battery: { capacity: 5000, wiredCharging: 30, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: true, microSD: true, fingerprint: "Side-mounted", faceID: false, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 4.3, camera: 4.5, battery: 4.4, performance: 4.5, display: 4.4, value: 3.8 },
    pros: ["Compact flagship", "Headphone jack", "MicroSD", "Great main camera", "5000mAh battery"],
    cons: ["No telephoto", "Expensive", "Niche appeal", "Average front camera"],
    tags: ["flagship", "5g", "compact", "camera", "music"],
    isPopular: false,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // MOTOROLA
  // ═══════════════════════════════════════
  {
    id: "moto-g84",
    name: "Moto G84 5G",
    brand: "Motorola",
    image: "https://picsum.photos/seed/motog84/400/500",
    gallery: [
      "https://picsum.photos/seed/motog841/600/700",
      "https://picsum.photos/seed/motog842/600/700",
      "https://picsum.photos/seed/motog843/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "168g",
    colors: ["Midnight Blue", "Marshmallow Blue", "Viva Magenta"],
    price: {
      current: 249,
      original: 299,
      stores: { amazon: 229, bestbuy: 249, walmart: 239, official: 299 },
      history: [
        { month: "Jan", price: 299 }, { month: "Feb", price: 289 },
        { month: "Mar", price: 269 }, { month: "Apr", price: 259 },
        { month: "May", price: 249 }, { month: "Jun", price: 229 }
      ]
    },
    specs: {
      display: { size: "6.55", type: "OLED", resolution: "2400x1080", refreshRate: 120, brightness: 1300, protection: "Gorilla Glass 3" },
      performance: { chipset: "Snapdragon 695", cpu: "8-core", gpu: "Adreno 619", ram: [8, 12], storage: [256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "8MP f/2.2", telephoto: "None", front: "16MP f/2.4", video: "1080p 60fps" },
      battery: { capacity: 5000, wiredCharging: 33, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 5", bluetooth: "5.1", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP54", headphoneJack: true, microSD: true, fingerprint: "Side-mounted", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true }
    },
    ratings: { overall: 3.9, camera: 3.7, battery: 4.4, performance: 3.5, display: 4.2, value: 4.7 },
    pros: ["Excellent value", "120Hz OLED", "Headphone jack", "MicroSD slot", "Clean Moto software"],
    cons: ["Weak chipset", "No wireless charging", "IP54 only", "Average cameras"],
    tags: ["budget", "5g", "battery", "basic", "value", "music"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "moto-edge-40-pro",
    name: "Moto Edge 40 Pro",
    brand: "Motorola",
    image: "https://picsum.photos/seed/motoedge40pro/400/500",
    gallery: [
      "https://picsum.photos/seed/motoedge40pro1/600/700",
      "https://picsum.photos/seed/motoedge40pro2/600/700",
      "https://picsum.photos/seed/motoedge40pro3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "199g",
    colors: ["Interstellar Black", "Lunar Blue"],
    price: {
      current: 699,
      original: 799,
      stores: { amazon: 649, bestbuy: 699, walmart: 679, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 769 },
        { month: "Mar", price: 749 }, { month: "Apr", price: 699 },
        { month: "May", price: 679 }, { month: "Jun", price: 649 }
      ]
    },
    specs: {
      display: { size: "6.67", type: "OLED", resolution: "2400x1080", refreshRate: 165, brightness: 1300, protection: "Gorilla Glass 5" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [12], storage: [256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "50MP f/2.2", telephoto: "12MP 2x zoom", front: "60MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 4600, wiredCharging: 125, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.1", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.3, camera: 4.1, battery: 4.2, performance: 4.6, display: 4.5, value: 4.3 },
    pros: ["125W TurboPower charging", "165Hz display", "Great selfie camera", "Flagship performance"],
    cons: ["Average main camera", "Mediocre battery life", "Limited availability", "MIUI-influenced software"],
    tags: ["flagship", "5g", "fast-charging", "gaming", "selfie"],
    isPopular: false,
    isEditorChoice: false
  },

  // ═══════════════════════════════════════
  // OTHERS
  // ═══════════════════════════════════════
  {
    id: "asus-rog-phone-7",
    name: "Asus ROG Phone 7",
    brand: "Asus",
    image: "https://picsum.photos/seed/rogphone7/400/500",
    gallery: [
      "https://picsum.photos/seed/rogphone71/600/700",
      "https://picsum.photos/seed/rogphone72/600/700",
      "https://picsum.photos/seed/rogphone73/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "239g",
    colors: ["Phantom Black", "Storm White"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 929, bestbuy: 999, walmart: 969, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 969 }, { month: "Apr", price: 949 },
        { month: "May", price: 929 }, { month: "Jun", price: 929 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "AMOLED", resolution: "2448x1080", refreshRate: 165, brightness: 1500, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.9", ultrawide: "13MP f/2.2", telephoto: "5MP macro", front: "12MP f/2.8", video: "8K 24fps" },
      battery: { capacity: 6000, wiredCharging: 65, wirelessCharging: false, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.1", gps: true },
      features: { waterResistance: "IPX4", headphoneJack: true, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.5, camera: 3.8, battery: 4.9, performance: 4.9, display: 4.7, value: 4.0 },
    pros: ["Ultimate gaming phone", "Massive 6000mAh battery", "165Hz display", "AeroActive cooler", "Headphone jack"],
    cons: ["Bulky and heavy", "Average cameras", "Gaming aesthetic not for everyone", "Expensive"],
    tags: ["flagship", "5g", "gaming", "battery", "entertainment"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "nothing-phone-2",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    image: "https://picsum.photos/seed/nothingphone2/400/500",
    gallery: [
      "https://picsum.photos/seed/nothingphone21/600/700",
      "https://picsum.photos/seed/nothingphone22/600/700",
      "https://picsum.photos/seed/nothingphone23/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "201g",
    colors: ["Dark Gray", "White"],
    price: {
      current: 549,
      original: 599,
      stores: { amazon: 499, bestbuy: 549, walmart: 529, official: 599 },
      history: [
        { month: "Jan", price: 599 }, { month: "Feb", price: 589 },
        { month: "Mar", price: 569 }, { month: "Apr", price: 549 },
        { month: "May", price: 529 }, { month: "Jun", price: 499 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "LTPO OLED", resolution: "2412x1080", refreshRate: 120, brightness: 1600, protection: "Gorilla Glass 5" },
      performance: { chipset: "Snapdragon 8+ Gen 1", cpu: "8-core", gpu: "Adreno 730", ram: [8, 12], storage: [128, 256, 512] },
      camera: { main: "50MP f/1.88 OIS", ultrawide: "50MP f/2.2", telephoto: "None", front: "32MP f/2.4", video: "4K 60fps" },
      battery: { capacity: 4700, wiredCharging: 45, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP54", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.2, camera: 4.0, battery: 4.2, performance: 4.4, display: 4.3, value: 4.3 },
    pros: ["Unique Glyph Interface", "Clean Nothing OS", "Great display", "Good cameras", "Stylish design"],
    cons: ["IP54 only", "USB 2.0", "Glyph is gimmicky", "Limited availability"],
    tags: ["midrange", "5g", "social-media", "entertainment"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "realme-gt-5",
    name: "Realme GT 5",
    brand: "Realme",
    image: "https://picsum.photos/seed/realmegt5/400/500",
    gallery: [
      "https://picsum.photos/seed/realmegt51/600/700",
      "https://picsum.photos/seed/realmegt52/600/700",
      "https://picsum.photos/seed/realmegt53/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "199g",
    colors: ["Purple", "Silver"],
    price: {
      current: 499,
      original: 549,
      stores: { amazon: 459, bestbuy: 499, walmart: 479, official: 549 },
      history: [
        { month: "Jan", price: 549 }, { month: "Feb", price: 529 },
        { month: "Mar", price: 509 }, { month: "Apr", price: 499 },
        { month: "May", price: 479 }, { month: "Jun", price: 459 }
      ]
    },
    specs: {
      display: { size: "6.74", type: "AMOLED", resolution: "2772x1240", refreshRate: 144, brightness: 10000, protection: "Gorilla Glass 5" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [12, 16], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.8 OIS (Sony IMX890)", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "4K 60fps" },
      battery: { capacity: 5240, wiredCharging: 240, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "None", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.2, camera: 3.9, battery: 4.6, performance: 4.6, display: 4.5, value: 4.5 },
    pros: ["Insane 240W charging (0-100% in 9 min)", "144Hz display", "Great performance", "Big battery"],
    cons: ["No water resistance", "Average cameras", "No wireless charging", "Realme UI bloat"],
    tags: ["midrange", "5g", "fast-charging", "gaming", "battery"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "vivo-x90-pro",
    name: "Vivo X90 Pro",
    brand: "Vivo",
    image: "https://picsum.photos/seed/vivox90pro/400/500",
    gallery: [
      "https://picsum.photos/seed/vivox90pro1/600/700",
      "https://picsum.photos/seed/vivox90pro2/600/700",
      "https://picsum.photos/seed/vivox90pro3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "215g",
    colors: ["Legendary Black", "Classic Blue"],
    price: {
      current: 799,
      original: 899,
      stores: { amazon: 749, bestbuy: 799, walmart: 779, official: 899 },
      history: [
        { month: "Jan", price: 899 }, { month: "Feb", price: 879 },
        { month: "Mar", price: 849 }, { month: "Apr", price: 819 },
        { month: "May", price: 799 }, { month: "Jun", price: 749 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "AMOLED", resolution: "2800x1260", refreshRate: 120, brightness: 1300, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Dimensity 9200", cpu: "8-core", gpu: "Immortalis-G715", ram: [8, 12], storage: [256, 512] },
      camera: { main: "50MP f/1.75 OIS (ZEISS)", ultrawide: "12MP f/2.0", telephoto: "12MP 2x portrait", front: "32MP f/2.4", video: "8K 30fps" },
      battery: { capacity: 4870, wiredCharging: 120, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.4, camera: 4.6, battery: 4.4, performance: 4.5, display: 4.5, value: 4.2 },
    pros: ["ZEISS camera optics", "120W + 50W wireless charging", "Great night mode", "IP68"],
    cons: ["Funtouch OS bloat", "Limited global availability", "USB 2.0", "Heavy"],
    tags: ["flagship", "5g", "camera", "photography", "fast-charging"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "oneplus-open",
    name: "OnePlus Open",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplusopen/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplusopen1/600/700",
      "https://picsum.photos/seed/oneplusopen2/600/700",
      "https://picsum.photos/seed/oneplusopen3/600/700"
    ],
    releaseYear: 2023,
    os: "Android 13",
    weight: "239g",
    colors: ["Emerald Dusk", "Voyager Black"],
    price: {
      current: 1499,
      original: 1699,
      stores: { amazon: 1399, bestbuy: 1499, walmart: 1459, official: 1699 },
      history: [
        { month: "Jan", price: 1699 }, { month: "Feb", price: 1649 },
        { month: "Mar", price: 1599 }, { month: "Apr", price: 1499 },
        { month: "May", price: 1449 }, { month: "Jun", price: 1399 }
      ]
    },
    specs: {
      display: { size: "7.82", type: "LTPO3 OLED", resolution: "2440x2268", refreshRate: 120, brightness: 2800, protection: "Ceramic Guard" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [16], storage: [512] },
      camera: { main: "48MP f/1.7 OIS (Sony LYT-T808)", ultrawide: "48MP f/2.2", telephoto: "64MP 3x zoom", front: "20MP + 32MP (cover)", video: "4K 60fps, Dolby Vision" },
      battery: { capacity: 4805, wiredCharging: 67, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.1", gps: true },
      features: { waterResistance: "IPX4", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: false, fastCharging: true, highRefreshRate: true }
    },
    ratings: { overall: 4.7, camera: 4.7, battery: 4.3, performance: 4.8, display: 4.9, value: 4.1 },
    pros: ["Best foldable display crease control", "Excellent Hasselblad cameras", "Open Canvas multitasking", "Lightweight for a foldable"],
    cons: ["No wireless charging", "Only IPX4 splash proof", "Expensive", "Large camera bump"],
    tags: ["flagship", "5g", "foldable", "premium", "productivity", "camera"],
    isPopular: true,
    isEditorChoice: true
  }
];

// ═══════════════════════════════════════
// CURATED CATEGORY LISTS
// ═══════════════════════════════════════

const TOP_PICKS = {
  bestOverall: ["galaxy-s24-ultra", "iphone-15-pro-max", "oneplus-12", "pixel-8-pro", "xiaomi-14-pro"],
  bestCamera: ["galaxy-s24-ultra", "iphone-15-pro-max", "pixel-8-pro", "xiaomi-14-pro", "vivo-x90-pro"],
  bestGaming: ["asus-rog-phone-7", "oneplus-12", "galaxy-s24-ultra", "poco-f5-pro", "realme-gt-5"],
  bestBudget: ["pixel-7a", "galaxy-a54", "redmi-note-13-pro", "oneplus-nord-ce3", "moto-g84"],
  bestBattery: ["asus-rog-phone-7", "oneplus-12", "oneplus-12r", "realme-gt-5", "redmi-note-13-pro"],
  bestBusiness: ["iphone-15-pro", "galaxy-s24-ultra", "pixel-8-pro", "galaxy-z-fold-5", "xperia-1-v"],
  bestIphones: ["iphone-15-pro-max", "iphone-15-pro", "iphone-15", "iphone-14", "iphone-se-2022"],
  bestAndroid: ["galaxy-s24-ultra", "oneplus-12", "pixel-8-pro", "xiaomi-14-pro", "galaxy-s24"],
  latestReleased: ["galaxy-s24-ultra", "galaxy-s24-plus", "galaxy-s24", "oneplus-12", "oneplus-12r"],
  editorsChoice: ["galaxy-s24-ultra", "iphone-15-pro-max", "oneplus-12", "pixel-8-pro", "iphone-15-pro"]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PHONES_DATA, TOP_PICKS };
}
