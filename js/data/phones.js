/**
 * SmartPick - Complete Smartphone Database
 * Contains 50 smartphones with full specifications, pricing, and metadata.
 *
 * Extended detail fields per phone (all optional, but included on new entries):
 *   benchmarks:  { antutu, geekbenchSingle, geekbenchMulti, gpuTest }
 *   audio:       { stereoSpeakers, headphoneJack, hiResAudio, dolbyAtmos, audioRating }
 *   build:       { frame, back, ipRating, dimensions }
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
      battery: { capacity: 6000, wiredCharging: 65, wirelessCharging: false, reverseWireless: false },
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
  },

  // ═══════════════════════════════════════
  // 2024 FLAGSHIPS & FOLDABLES (EXTENDED LIBRARY)
  // ═══════════════════════════════════════
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone16promax/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone16promax1/600/700",
      "https://picsum.photos/seed/iphone16promax2/600/700",
      "https://picsum.photos/seed/iphone16promax3/600/700"
    ],
    releaseYear: 2024,
    os: "iOS 18",
    weight: "227g",
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    price: {
      current: 1199,
      original: 1199,
      stores: { amazon: 1149, bestbuy: 1199, walmart: 1169, official: 1199 },
      history: [
        { month: "Jan", price: 1199 }, { month: "Feb", price: 1199 },
        { month: "Mar", price: 1189 }, { month: "Apr", price: 1179 },
        { month: "May", price: 1169 }, { month: "Jun", price: 1149 }
      ]
    },
    specs: {
      display: { size: "6.9", type: "LTPO OLED", resolution: "2868x1320", refreshRate: 120, brightness: 2000, protection: "Ceramic Shield 2" },
      performance: { chipset: "Apple A18 Pro", cpu: "6-core", gpu: "Apple GPU 6-core", ram: [8], storage: [256, 512, 1024] },
      camera: { main: "48MP f/1.78 OIS", ultrawide: "48MP f/2.2", telephoto: "12MP 5x tetraprism", front: "12MP f/1.9", video: "4K 120fps Dolby Vision" },
      battery: { capacity: 4685, wiredCharging: 30, wirelessCharging: 25, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.6 },
      build: { frame: "Grade 5 Titanium", back: "Textured matte glass", ipRating: "IP68 (6m / 30 min)", dimensions: "163 x 77.6 x 8.25 mm" }
    },
    benchmarks: { antutu: 1710000, geekbenchSingle: 3420, geekbenchMulti: 8600, gpuTest: "Steel Nomad Light: 4850" },
    ratings: { overall: 4.9, camera: 4.9, battery: 4.7, performance: 5.0, display: 4.9, value: 3.9 },
    pros: ["Fastest mobile chip ever (A18 Pro)", "4K 120fps Dolby Vision video", "48MP ultrawide upgrade", "Biggest iPhone display yet", "Camera Control button"],
    cons: ["Very expensive", "Still 30W-class charging", "AI features need Apple Intelligence rollout", "Large and heavy"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "gaming", "productivity"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone16pro/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone16pro1/600/700",
      "https://picsum.photos/seed/iphone16pro2/600/700",
      "https://picsum.photos/seed/iphone16pro3/600/700"
    ],
    releaseYear: 2024,
    os: "iOS 18",
    weight: "199g",
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 949, bestbuy: 999, walmart: 979, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 989 }, { month: "Apr", price: 969 },
        { month: "May", price: 959 }, { month: "Jun", price: 949 }
      ]
    },
    specs: {
      display: { size: "6.3", type: "LTPO OLED", resolution: "2622x1206", refreshRate: 120, brightness: 2000, protection: "Ceramic Shield 2" },
      performance: { chipset: "Apple A18 Pro", cpu: "6-core", gpu: "Apple GPU 6-core", ram: [8], storage: [128, 256, 512, 1024] },
      camera: { main: "48MP f/1.78 OIS", ultrawide: "48MP f/2.2", telephoto: "12MP 5x tetraprism", front: "12MP f/1.9", video: "4K 120fps Dolby Vision" },
      battery: { capacity: 3582, wiredCharging: 30, wirelessCharging: 25, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.5 },
      build: { frame: "Grade 5 Titanium", back: "Textured matte glass", ipRating: "IP68 (6m / 30 min)", dimensions: "149.6 x 71.5 x 8.25 mm" }
    },
    benchmarks: { antutu: 1680000, geekbenchSingle: 3380, geekbenchMulti: 8350, gpuTest: "Steel Nomad Light: 4700" },
    ratings: { overall: 4.8, camera: 4.8, battery: 4.3, performance: 4.9, display: 4.9, value: 4.0 },
    pros: ["5x telephoto now on the small Pro", "A18 Pro performance king", "48MP ultrawide", "Camera Control button", "Compact 6.3\" body"],
    cons: ["Expensive", "Battery life trails Pro Max", "128GB base storage", "No charger in box"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "gaming", "compact"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    image: "https://picsum.photos/seed/iphone16/400/500",
    gallery: [
      "https://picsum.photos/seed/iphone161/600/700",
      "https://picsum.photos/seed/iphone162/600/700",
      "https://picsum.photos/seed/iphone163/600/700"
    ],
    releaseYear: 2024,
    os: "iOS 18",
    weight: "170g",
    colors: ["Ultramarine", "Teal", "Pink", "White", "Black"],
    price: {
      current: 799,
      original: 799,
      stores: { amazon: 749, bestbuy: 799, walmart: 779, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 799 },
        { month: "Mar", price: 789 }, { month: "Apr", price: 779 },
        { month: "May", price: 769 }, { month: "Jun", price: 759 }
      ]
    },
    specs: {
      display: { size: "6.1", type: "OLED", resolution: "2556x1179", refreshRate: 60, brightness: 2000, protection: "Ceramic Shield" },
      performance: { chipset: "Apple A18", cpu: "6-core", gpu: "Apple GPU 5-core", ram: [8], storage: [128, 256, 512] },
      camera: { main: "48MP f/1.6 OIS", ultrawide: "12MP f/2.2", telephoto: "None", front: "12MP f/1.9", video: "4K 60fps Dolby Vision" },
      battery: { capacity: 3561, wiredCharging: 20, wirelessCharging: 25, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Face ID", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: false },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.3 },
      build: { frame: "Aluminum", back: "Color-infused glass", ipRating: "IP68 (6m / 30 min)", dimensions: "147.6 x 71.6 x 7.8 mm" }
    },
    benchmarks: { antutu: 1440000, geekbenchSingle: 3120, geekbenchMulti: 7200, gpuTest: "Steel Nomad Light: 3900" },
    ratings: { overall: 4.5, camera: 4.4, battery: 4.4, performance: 4.7, display: 4.4, value: 4.1 },
    pros: ["A18 with Apple Intelligence support", "Camera Control button", "Vibrant new colors", "Action button replaces mute switch", "MagSafe up to 25W"],
    cons: ["Still a 60Hz display", "No telephoto", "USB 2.0 speeds", "No charger in box"],
    tags: ["midrange", "5g", "camera", "social-media"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-s24-fe",
    name: "Galaxy S24 FE",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxys24fe/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxys24fe1/600/700",
      "https://picsum.photos/seed/galaxys24fe2/600/700",
      "https://picsum.photos/seed/galaxys24fe3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "213g",
    colors: ["Graphite", "Mint", "Blue", "Yellow"],
    price: {
      current: 649,
      original: 699,
      stores: { amazon: 599, bestbuy: 649, walmart: 639, official: 699 },
      history: [
        { month: "Jan", price: 699 }, { month: "Feb", price: 689 },
        { month: "Mar", price: 669 }, { month: "Apr", price: 649 },
        { month: "May", price: 629 }, { month: "Jun", price: 599 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "2340x1080", refreshRate: 120, brightness: 1900, protection: "Gorilla Glass Victus+" },
      performance: { chipset: "Exynos 2400e", cpu: "10-core", gpu: "Xclipse 940", ram: [8], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "8MP 3x zoom", front: "10MP f/2.4", video: "8K 30fps" },
      battery: { capacity: 4700, wiredCharging: 25, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.2 },
      build: { frame: "Aluminum", back: "Glass (Gorilla Victus+)", ipRating: "IP68 (1.5m / 30 min)", dimensions: "161.4 x 75.3 x 8 mm" }
    },
    benchmarks: { antutu: 1360000, geekbenchSingle: 1950, geekbenchMulti: 6400, gpuTest: "Steel Nomad Light: 3400" },
    ratings: { overall: 4.3, camera: 4.2, battery: 4.4, performance: 4.1, display: 4.4, value: 4.3 },
    pros: ["Flagship AI features at a discount", "Telephoto camera included", "Bright 120Hz display", "7 years of updates", "IP68"],
    cons: ["Exynos 2400e less efficient", "Slow 25W charging", "Heavy at 213g", "No charger in box"],
    tags: ["midrange", "5g", "camera", "value", "flagship"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "galaxy-a55",
    name: "Galaxy A55 5G",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxya55/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxya551/600/700",
      "https://picsum.photos/seed/galaxya552/600/700",
      "https://picsum.photos/seed/galaxya553/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "213g",
    colors: ["Awesome Iceblue", "Awesome Navy", "Awesome Lemon", "Awesome Lilac"],
    price: {
      current: 379,
      original: 449,
      stores: { amazon: 349, bestbuy: 379, walmart: 369, official: 449 },
      history: [
        { month: "Jan", price: 449 }, { month: "Feb", price: 429 },
        { month: "Mar", price: 409 }, { month: "Apr", price: 399 },
        { month: "May", price: 379 }, { month: "Jun", price: 349 }
      ]
    },
    specs: {
      display: { size: "6.6", type: "Super AMOLED", resolution: "2340x1080", refreshRate: 120, brightness: 1000, protection: "Gorilla Glass Victus+" },
      performance: { chipset: "Exynos 1480", cpu: "8-core", gpu: "Xclipse 530", ram: [8, 12], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "5MP macro", front: "32MP f/2.2", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 25, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP67", headphoneJack: false, microSD: true, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: false, dolbyAtmos: true, audioRating: 4.0 },
      build: { frame: "Aluminum (metal frame)", back: "Glass (Gorilla Victus+)", ipRating: "IP67 (1m / 30 min)", dimensions: "161.1 x 77.4 x 8.2 mm" }
    },
    benchmarks: { antutu: 730000, geekbenchSingle: 1010, geekbenchMulti: 3050, gpuTest: "Steel Nomad Light: 1100" },
    ratings: { overall: 4.2, camera: 4.0, battery: 4.5, performance: 3.9, display: 4.3, value: 4.5 },
    pros: ["Premium metal frame build", "Bright 120Hz Super AMOLED", "MicroSD expansion", "6 years of updates", "IP67"],
    cons: ["Slow 25W charging", "No wireless charging", "Average low-light photos", "Heavy"],
    tags: ["budget", "5g", "battery", "value", "social-media"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-z-fold-6",
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxyzfold6/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxyzfold61/600/700",
      "https://picsum.photos/seed/galaxyzfold62/600/700",
      "https://picsum.photos/seed/galaxyzfold63/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "239g",
    colors: ["Silver Shadow", "Navy", "Pink"],
    price: {
      current: 1899,
      original: 1899,
      stores: { amazon: 1799, bestbuy: 1899, walmart: 1849, official: 1899 },
      history: [
        { month: "Jan", price: 1899 }, { month: "Feb", price: 1899 },
        { month: "Mar", price: 1869 }, { month: "Apr", price: 1849 },
        { month: "May", price: 1829 }, { month: "Jun", price: 1799 }
      ]
    },
    specs: {
      display: { size: "7.6", type: "AMOLED", resolution: "2160x1856", refreshRate: 120, brightness: 2600, protection: "UTG Glass + Gorilla Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "10MP 3x zoom", front: "10MP (cover) + 4MP (under display)", video: "8K 30fps" },
      battery: { capacity: 4400, wiredCharging: 25, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP48", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: true, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.2 },
      build: { frame: "Armor Aluminum", back: "Corning Gorilla Glass Victus 2", ipRating: "IP48 (dust + water splash)", dimensions: "153.5 x 132.6 x 5.6 mm (unfolded)" }
    },
    benchmarks: { antutu: 2080000, geekbenchSingle: 2250, geekbenchMulti: 7100, gpuTest: "Steel Nomad Light: 4600" },
    ratings: { overall: 4.4, camera: 4.3, battery: 3.9, performance: 4.8, display: 4.8, value: 3.1 },
    pros: ["Brightest Fold display ever (2600 nits)", "Slimmer and lighter than Fold 5", "Galaxy AI multitasking", "Snapdragon 8 Gen 3 power", "IP48 dust rating finally"],
    cons: ["Extremely expensive", "Crease still visible", "Small 4400mAh battery", "Slow 25W charging"],
    tags: ["flagship", "5g", "premium", "foldable", "productivity", "gaming"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "galaxy-z-flip-6",
    name: "Galaxy Z Flip 6",
    brand: "Samsung",
    image: "https://picsum.photos/seed/galaxyzflip6/400/500",
    gallery: [
      "https://picsum.photos/seed/galaxyzflip61/600/700",
      "https://picsum.photos/seed/galaxyzflip62/600/700",
      "https://picsum.photos/seed/galaxyzflip63/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "187g",
    colors: ["Blue", "Silver Shadow", "Yellow", "Mint"],
    price: {
      current: 1099,
      original: 1099,
      stores: { amazon: 999, bestbuy: 1099, walmart: 1069, official: 1099 },
      history: [
        { month: "Jan", price: 1099 }, { month: "Feb", price: 1099 },
        { month: "Mar", price: 1069 }, { month: "Apr", price: 1049 },
        { month: "May", price: 1029 }, { month: "Jun", price: 999 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "2640x1080", refreshRate: 120, brightness: 2600, protection: "UTG Glass" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12], storage: [256, 512] },
      camera: { main: "50MP f/1.8 OIS", ultrawide: "12MP f/2.2", telephoto: "None", front: "10MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 4000, wiredCharging: 25, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 6E", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP48", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.1 },
      build: { frame: "Armor Aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP48 (dust + water splash)", dimensions: "165.1 x 71.9 x 6.9 mm (unfolded)" }
    },
    benchmarks: { antutu: 2050000, geekbenchSingle: 2240, geekbenchMulti: 7050, gpuTest: "Steel Nomad Light: 4550" },
    ratings: { overall: 4.3, camera: 4.1, battery: 3.9, performance: 4.8, display: 4.5, value: 3.4 },
    pros: ["Finally a 50MP main camera", "Bigger 4000mAh battery", "Bright 2600-nit display", "Snapdragon 8 Gen 3", "Best flip-style cameras yet"],
    cons: ["Expensive", "Crease visible", "Slow 25W charging", "Battery still trails slab phones"],
    tags: ["flagship", "5g", "foldable", "social-media", "compact", "camera"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "pixel-9-pro-xl",
    name: "Pixel 9 Pro XL",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel9proxl/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel9proxl1/600/700",
      "https://picsum.photos/seed/pixel9proxl2/600/700",
      "https://picsum.photos/seed/pixel9proxl3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 15",
    weight: "221g",
    colors: ["Porcelain", "Obsidian", "Hazel", "Peony"],
    price: {
      current: 999,
      original: 1099,
      stores: { amazon: 949, bestbuy: 999, walmart: 979, official: 1099 },
      history: [
        { month: "Jan", price: 1099 }, { month: "Feb", price: 1069 },
        { month: "Mar", price: 1039 }, { month: "Apr", price: 999 },
        { month: "May", price: 969 }, { month: "Jun", price: 949 }
      ]
    },
    specs: {
      display: { size: "6.8", type: "LTPO OLED", resolution: "2992x1344", refreshRate: 120, brightness: 3000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Google Tensor G4", cpu: "8-core", gpu: "Mali-G715-Immortalis MC7", ram: [16], storage: [128, 256, 512, 1024] },
      camera: { main: "50MP f/1.68 OIS", ultrawide: "48MP f/1.7", telephoto: "48MP 5x zoom", front: "42MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 5060, wiredCharging: 45, wirelessCharging: 23, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.4 },
      build: { frame: "Polished aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP68 (1.5m / 30 min)", dimensions: "162.8 x 76.6 x 8.5 mm" }
    },
    benchmarks: { antutu: 1240000, geekbenchSingle: 2050, geekbenchMulti: 4600, gpuTest: "Steel Nomad Light: 2400" },
    ratings: { overall: 4.7, camera: 4.9, battery: 4.5, performance: 4.3, display: 4.8, value: 4.2 },
    pros: ["Best-in-class AI photography (Add Me, Zoom Enhance)", "Super Actua display hits 3000 nits", "16GB RAM standard", "45W wired charging finally", "7 years of OS updates"],
    cons: ["Tensor G4 trails Snapdragon in raw power", "Premium price", "USB 2.0 on non-XL tiers", "Limited global availability"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "ai", "productivity"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel9pro/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel9pro1/600/700",
      "https://picsum.photos/seed/pixel9pro2/600/700",
      "https://picsum.photos/seed/pixel9pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 15",
    weight: "199g",
    colors: ["Porcelain", "Obsidian", "Hazel", "Peony"],
    price: {
      current: 999,
      original: 999,
      stores: { amazon: 949, bestbuy: 999, walmart: 979, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 999 },
        { month: "Mar", price: 979 }, { month: "Apr", price: 969 },
        { month: "May", price: 959 }, { month: "Jun", price: 949 }
      ]
    },
    specs: {
      display: { size: "6.3", type: "LTPO OLED", resolution: "2800x1280", refreshRate: 120, brightness: 3000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Google Tensor G4", cpu: "8-core", gpu: "Mali-G715-Immortalis MC7", ram: [16], storage: [128, 256, 512] },
      camera: { main: "50MP f/1.68 OIS", ultrawide: "48MP f/1.7", telephoto: "48MP 5x zoom", front: "42MP f/2.2", video: "8K 30fps" },
      battery: { capacity: 4700, wiredCharging: 45, wirelessCharging: 21, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.3 },
      build: { frame: "Polished aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP68 (1.5m / 30 min)", dimensions: "152.8 x 72 x 8.5 mm" }
    },
    benchmarks: { antutu: 1230000, geekbenchSingle: 2040, geekbenchMulti: 4550, gpuTest: "Steel Nomad Light: 2350" },
    ratings: { overall: 4.7, camera: 4.8, battery: 4.4, performance: 4.2, display: 4.8, value: 4.3 },
    pros: ["Compact Pro with full telephoto", "Super Actua 3000-nit display", "Gemini AI baked into Android", "16GB RAM", "Best selfie camera (42MP)"],
    cons: ["Tensor G4 not a raw-power leader", "No charger in box", "Warms up under load", "Expensive"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "ai", "compact"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "pixel-9",
    name: "Pixel 9",
    brand: "Google",
    image: "https://picsum.photos/seed/pixel9/400/500",
    gallery: [
      "https://picsum.photos/seed/pixel91/600/700",
      "https://picsum.photos/seed/pixel92/600/700",
      "https://picsum.photos/seed/pixel93/600/700"
    ],
    releaseYear: 2024,
    os: "Android 15",
    weight: "198g",
    colors: ["Porcelain", "Obsidian", "Wintergreen", "Peony"],
    price: {
      current: 799,
      original: 799,
      stores: { amazon: 749, bestbuy: 799, walmart: 779, official: 799 },
      history: [
        { month: "Jan", price: 799 }, { month: "Feb", price: 799 },
        { month: "Mar", price: 779 }, { month: "Apr", price: 769 },
        { month: "May", price: 759 }, { month: "Jun", price: 749 }
      ]
    },
    specs: {
      display: { size: "6.3", type: "OLED", resolution: "2424x1080", refreshRate: 120, brightness: 2700, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Google Tensor G4", cpu: "8-core", gpu: "Mali-G715 MC7", ram: [12], storage: [128, 256] },
      camera: { main: "50MP f/1.68 OIS", ultrawide: "48MP f/1.7", telephoto: "None", front: "10.5MP f/2.2", video: "4K 60fps" },
      battery: { capacity: 4700, wiredCharging: 27, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.2 },
      build: { frame: "Matte aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP68 (1.5m / 30 min)", dimensions: "152.8 x 72 x 8.6 mm" }
    },
    benchmarks: { antutu: 1190000, geekbenchSingle: 2000, geekbenchMulti: 4400, gpuTest: "Steel Nomad Light: 2100" },
    ratings: { overall: 4.5, camera: 4.5, battery: 4.4, performance: 4.1, display: 4.6, value: 4.4 },
    pros: ["120Hz display now standard", "Same Gemini AI features as Pro", "48MP ultrawide upgrade", "12GB RAM", "7 years of updates"],
    cons: ["No telephoto", "Slow 27W charging", "Tensor trails rivals in benchmarks", "Plastic camera bar scuffs easily"],
    tags: ["midrange", "5g", "camera", "ai", "photography"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplus13/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplus131/600/700",
      "https://picsum.photos/seed/oneplus132/600/700",
      "https://picsum.photos/seed/oneplus133/600/700"
    ],
    releaseYear: 2024,
    os: "Android 15",
    weight: "213g",
    colors: ["Midnight Ocean", "Black Eclipse", "Arctic Dawn"],
    price: {
      current: 899,
      original: 899,
      stores: { amazon: 849, bestbuy: 899, walmart: 879, official: 899 },
      history: [
        { month: "Jan", price: 899 }, { month: "Feb", price: 899 },
        { month: "Mar", price: 879 }, { month: "Apr", price: 869 },
        { month: "May", price: 859 }, { month: "Jun", price: 849 }
      ]
    },
    specs: {
      display: { size: "6.82", type: "LTPO AMOLED", resolution: "3168x1440", refreshRate: 120, brightness: 4500, protection: "Crystal Shield Glass" },
      performance: { chipset: "Snapdragon 8 Elite", cpu: "8-core", gpu: "Adreno 830", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.6 OIS (Sony LYT-808)", ultrawide: "50MP f/2.0", telephoto: "50MP 3x periscope", front: "32MP f/2.4", video: "4K 60fps Dolby Vision" },
      battery: { capacity: 6000, wiredCharging: 100, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP69", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.5 },
      build: { frame: "Aluminum alloy", back: "Glass fiber / vegan leather options", ipRating: "IP68 + IP69 (high-pressure water jets)", dimensions: "162.9 x 76.5 x 8.5 mm" }
    },
    benchmarks: { antutu: 2650000, geekbenchSingle: 3050, geekbenchMulti: 9300, gpuTest: "Steel Nomad Light: 6800" },
    ratings: { overall: 4.8, camera: 4.7, battery: 4.9, performance: 5.0, display: 4.9, value: 4.6 },
    pros: ["Snapdragon 8 Elite crushes every benchmark", "Massive 6000mAh silicon-carbon battery", "IP68 + IP69 dust and high-pressure water rating", "100W wired + 50W wireless charging", "Four Hasselblad-tuned 50MP cameras"],
    cons: ["USB-C limited to USB 3.2 Gen 1", "OxygenOS still ships some bloat", "Large and heavy", "No microSD"],
    tags: ["flagship", "5g", "premium", "battery", "gaming", "fast-charging", "camera"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "oneplus-13r",
    name: "OnePlus 13R",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplus13r/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplus13r1/600/700",
      "https://picsum.photos/seed/oneplus13r2/600/700",
      "https://picsum.photos/seed/oneplus13r3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 15",
    weight: "206g",
    colors: ["Nebula Noir", "Astral Trail"],
    price: {
      current: 599,
      original: 599,
      stores: { amazon: 579, bestbuy: 599, walmart: 589, official: 599 },
      history: [
        { month: "Jan", price: 599 }, { month: "Feb", price: 599 },
        { month: "Mar", price: 589 }, { month: "Apr", price: 579 },
        { month: "May", price: 569 }, { month: "Jun", price: 559 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "LTPO AMOLED", resolution: "2780x1264", refreshRate: 120, brightness: 4500, protection: "Crystal Shield Glass" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [128, 256] },
      camera: { main: "50MP f/1.8 OIS (Sony LYT-700)", ultrawide: "8MP f/2.2", telephoto: "50MP 2x zoom", front: "16MP f/2.4", video: "4K 60fps" },
      battery: { capacity: 6000, wiredCharging: 80, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP65", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.3 },
      build: { frame: "Aluminum alloy", back: "Glass", ipRating: "IP65 (splash resistant)", dimensions: "161.7 x 75.8 x 8 mm" }
    },
    benchmarks: { antutu: 2100000, geekbenchSingle: 2250, geekbenchMulti: 7100, gpuTest: "Steel Nomad Light: 4600" },
    ratings: { overall: 4.5, camera: 4.1, battery: 4.9, performance: 4.8, display: 4.7, value: 4.8 },
    pros: ["Flagship Snapdragon 8 Gen 3 under $600", "Huge 6000mAh battery", "80W SUPERVOOC charging", "Bright 4500-nit display", "Dedicated telephoto now included"],
    cons: ["No wireless charging", "IP65 only", "Weak 8MP ultrawide", "USB 2.0"],
    tags: ["midrange", "5g", "battery", "gaming", "fast-charging", "value"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "oneplus-nord-4",
    name: "OnePlus Nord 4",
    brand: "OnePlus",
    image: "https://picsum.photos/seed/oneplusnord4/400/500",
    gallery: [
      "https://picsum.photos/seed/oneplusnord41/600/700",
      "https://picsum.photos/seed/oneplusnord42/600/700",
      "https://picsum.photos/seed/oneplusnord43/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "199g",
    colors: ["Obsidian Midnight", "Mercurial Silver", "Oasis Green"],
    price: {
      current: 429,
      original: 499,
      stores: { amazon: 399, bestbuy: 429, walmart: 419, official: 499 },
      history: [
        { month: "Jan", price: 499 }, { month: "Feb", price: 489 },
        { month: "Mar", price: 469 }, { month: "Apr", price: 449 },
        { month: "May", price: 429 }, { month: "Jun", price: 399 }
      ]
    },
    specs: {
      display: { size: "6.74", type: "AMOLED", resolution: "2772x1240", refreshRate: 120, brightness: 2150, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 7+ Gen 3", cpu: "8-core", gpu: "Adreno 732", ram: [8, 12, 16], storage: [128, 256, 512] },
      camera: { main: "50MP f/1.8 OIS (Sony LYT-600)", ultrawide: "8MP f/2.2", telephoto: "None", front: "16MP f/2.4", video: "4K 30fps" },
      battery: { capacity: 5500, wiredCharging: 100, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP65", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.2 },
      build: { frame: "Full metal unibody (rare!)", back: "Integrated aluminum unibody", ipRating: "IP65 (splash resistant)", dimensions: "162.6 x 75 x 8 mm" }
    },
    benchmarks: { antutu: 1450000, geekbenchSingle: 1950, geekbenchMulti: 5100, gpuTest: "Steel Nomad Light: 2600" },
    ratings: { overall: 4.4, camera: 3.9, battery: 4.7, performance: 4.5, display: 4.5, value: 4.8 },
    pros: ["Full metal unibody design", "100W charging under $450", "Flagship-class Snapdragon 7+ Gen 3", "5500mAh battery", "AI Eraser built in"],
    cons: ["No telephoto", "No wireless charging", "IP65 only", "OxygenOS update policy shorter than flagships"],
    tags: ["midrange", "5g", "battery", "fast-charging", "value"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    image: "https://picsum.photos/seed/xiaomi14ultra/400/500",
    gallery: [
      "https://picsum.photos/seed/xiaomi14ultra1/600/700",
      "https://picsum.photos/seed/xiaomi14ultra2/600/700",
      "https://picsum.photos/seed/xiaomi14ultra3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "224g",
    colors: ["Black", "White", "Blue"],
    price: {
      current: 1299,
      original: 1399,
      stores: { amazon: 1249, bestbuy: 1299, walmart: 1269, official: 1399 },
      history: [
        { month: "Jan", price: 1399 }, { month: "Feb", price: 1399 },
        { month: "Mar", price: 1349 }, { month: "Apr", price: 1299 },
        { month: "May", price: 1269 }, { month: "Jun", price: 1249 }
      ]
    },
    specs: {
      display: { size: "6.73", type: "LTPO AMOLED", resolution: "3200x1440", refreshRate: 120, brightness: 3000, protection: "Xiaomi Shield Glass" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.63 OIS (Sony LYT-900, 1-inch)", ultrawide: "50MP f/1.8", telephoto: "50MP 3.2x + 50MP 5x periscope", front: "32MP f/3.0", video: "8K 30fps" },
      battery: { capacity: 5300, wiredCharging: 90, wirelessCharging: 80, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.6 },
      build: { frame: "Aluminum alloy", back: "Nano-tech vegan leather / glass", ipRating: "IP68 (1.5m / 30 min)", dimensions: "161.4 x 75.3 x 9.2 mm" }
    },
    benchmarks: { antutu: 2130000, geekbenchSingle: 2250, geekbenchMulti: 7200, gpuTest: "Steel Nomad Light: 4650" },
    ratings: { overall: 4.7, camera: 5.0, battery: 4.5, performance: 4.8, display: 4.9, value: 3.9 },
    pros: ["Best camera system of 2024 (quad 50MP Leica)", "1-inch variable-aperture main sensor", "80W wireless + 90W wired charging", "Photography Kit accessory support", "Stunning 3000-nit display"],
    cons: ["Very expensive", "HyperOS ships ads", "Only 90W vs 120W rivals", "Limited US availability"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "fast-charging"],
    isPopular: true,
    isEditorChoice: true
  },
  {
    id: "poco-x6-pro",
    name: "POCO X6 Pro 5G",
    brand: "Xiaomi",
    image: "https://picsum.photos/seed/pocox6pro/400/500",
    gallery: [
      "https://picsum.photos/seed/pocox6pro1/600/700",
      "https://picsum.photos/seed/pocox6pro2/600/700",
      "https://picsum.photos/seed/pocox6pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "186g",
    colors: ["Yellow", "Black", "Grey"],
    price: {
      current: 299,
      original: 349,
      stores: { amazon: 279, bestbuy: 299, walmart: 289, official: 349 },
      history: [
        { month: "Jan", price: 349 }, { month: "Feb", price: 339 },
        { month: "Mar", price: 319 }, { month: "Apr", price: 309 },
        { month: "May", price: 299 }, { month: "Jun", price: 279 }
      ]
    },
    specs: {
      display: { size: "6.67", type: "AMOLED", resolution: "2712x1220", refreshRate: 120, brightness: 1800, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Dimensity 8300 Ultra", cpu: "8-core", gpu: "Mali-G615 MC6", ram: [8, 12], storage: [256, 512] },
      camera: { main: "64MP f/1.7 OIS", ultrawide: "8MP f/2.2", telephoto: "2MP macro", front: "16MP f/2.4", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 67, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP54", headphoneJack: true, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: true, hiResAudio: true, dolbyAtmos: false, audioRating: 4.1 },
      build: { frame: "Plastic", back: "Vegan leather / plastic", ipRating: "IP54 (splash resistant)", dimensions: "160.4 x 74.3 x 8.3 mm" }
    },
    benchmarks: { antutu: 1390000, geekbenchSingle: 1450, geekbenchMulti: 4700, gpuTest: "Steel Nomad Light: 2500" },
    ratings: { overall: 4.3, camera: 3.8, battery: 4.6, performance: 4.6, display: 4.4, value: 4.9 },
    pros: ["Sub-$300 performance monster", "67W turbo charging", "1.5K 120Hz AMOLED", "3.5mm jack retained", "HyperOS with AI features"],
    cons: ["MIUI/HyperOS ads", "IP54 only", "Average cameras", "No wireless charging"],
    tags: ["budget", "5g", "gaming", "fast-charging", "value", "battery"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "xperia-1-vi",
    name: "Xperia 1 VI",
    brand: "Sony",
    image: "https://picsum.photos/seed/xperia1vi/400/500",
    gallery: [
      "https://picsum.photos/seed/xperia1vi1/600/700",
      "https://picsum.photos/seed/xperia1vi2/600/700",
      "https://picsum.photos/seed/xperia1vi3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "192g",
    colors: ["Black", "Platinum Silver", "Moss Green", "Scarlet Red"],
    price: {
      current: 1299,
      original: 1399,
      stores: { amazon: 1249, bestbuy: 1299, walmart: 1269, official: 1399 },
      history: [
        { month: "Jan", price: 1399 }, { month: "Feb", price: 1399 },
        { month: "Mar", price: 1349 }, { month: "Apr", price: 1329 },
        { month: "May", price: 1299 }, { month: "Jun", price: 1249 }
      ]
    },
    specs: {
      display: { size: "6.5", type: "LTPO OLED", resolution: "2340x1080", refreshRate: 120, brightness: 1300, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12], storage: [256, 512] },
      camera: { main: "48MP f/1.9 OIS (Exmor T)", ultrawide: "12MP f/2.2", telephoto: "12MP 3.5x-7.1x optical zoom", front: "12MP f/2.0", video: "4K 120fps" },
      battery: { capacity: 5000, wiredCharging: 30, wirelessCharging: 21, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: true, microSD: true, fingerprint: "Side-mounted", faceID: false, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: true, hiResAudio: true, dolbyAtmos: true, audioRating: 5.0 },
      build: { frame: "Aluminum", back: "Gorilla Glass Victus 2", ipRating: "IP68 (1.5m / 30 min)", dimensions: "161.9 x 74 x 8.3 mm" }
    },
    benchmarks: { antutu: 2100000, geekbenchSingle: 2240, geekbenchMulti: 7050, gpuTest: "Steel Nomad Light: 4600" },
    ratings: { overall: 4.4, camera: 4.6, battery: 4.3, performance: 4.7, display: 4.6, value: 3.4 },
    pros: ["3.5mm jack + microSD + IP68 (almost extinct combo)", "Best audio package on any phone", "Variable 3.5x-7.1x telephoto", "4K 120fps pro video", "3-year OS + 6-year security updates"],
    cons: ["Very expensive", "1080p display (no more 4K panel)", "Slow 30W charging", "Niche enthusiast appeal"],
    tags: ["flagship", "5g", "camera", "photography", "music", "entertainment"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "moto-edge-50-ultra",
    name: "Moto Edge 50 Ultra",
    brand: "Motorola",
    image: "https://picsum.photos/seed/motoedge50ultra/400/500",
    gallery: [
      "https://picsum.photos/seed/motoedge50ultra1/600/700",
      "https://picsum.photos/seed/motoedge50ultra2/600/700",
      "https://picsum.photos/seed/motoedge50ultra3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "197g",
    colors: ["Forest Avocado", "Peach Fuzz", "Midnight Lustre"],
    price: {
      current: 749,
      original: 899,
      stores: { amazon: 699, bestbuy: 749, walmart: 729, official: 899 },
      history: [
        { month: "Jan", price: 899 }, { month: "Feb", price: 879 },
        { month: "Mar", price: 849 }, { month: "Apr", price: 799 },
        { month: "May", price: 769 }, { month: "Jun", price: 699 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "pOLED", resolution: "2712x1220", refreshRate: 144, brightness: 2500, protection: "Gorilla Glass Victus" },
      performance: { chipset: "Snapdragon 8s Gen 3", cpu: "8-core", gpu: "Adreno 735", ram: [12, 16], storage: [512, 1024] },
      camera: { main: "50MP f/1.6 OIS", ultrawide: "50MP f/2.0", telephoto: "64MP 3x periscope", front: "50MP f/2.0", video: "4K 60fps" },
      battery: { capacity: 4500, wiredCharging: 125, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.4 },
      build: { frame: "Aluminum", back: "Wood / vegan leather / pearl glass options", ipRating: "IP68 (1.5m / 30 min)", dimensions: "161.1 x 72.4 x 8.6 mm" }
    },
    benchmarks: { antutu: 1500000, geekbenchSingle: 1990, geekbenchMulti: 5100, gpuTest: "Steel Nomad Light: 2700" },
    ratings: { overall: 4.3, camera: 4.3, battery: 4.1, performance: 4.5, display: 4.6, value: 4.2 },
    pros: ["Wooden back option is gorgeous", "125W TurboPower + 50W wireless", "144Hz pOLED at 2500 nits", "Pantone-validated color science", "Clean near-stock software with Moto AI"],
    cons: ["4500mAh battery is modest", "Snapdragon 8s Gen 3 below true flagship", "Limited availability outside Europe/India", "Only 3 years of OS updates"],
    tags: ["flagship", "5g", "camera", "fast-charging", "productivity"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "moto-g-power-5g-2024",
    name: "Moto G Power 5G (2024)",
    brand: "Motorola",
    image: "https://picsum.photos/seed/motogpower5g/400/500",
    gallery: [
      "https://picsum.photos/seed/motogpower5g1/600/700",
      "https://picsum.photos/seed/motogpower5g2/600/700",
      "https://picsum.photos/seed/motogpower5g3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "181g",
    colors: ["Midnight Blue", "Pale Lilac"],
    price: {
      current: 199,
      original: 299,
      stores: { amazon: 179, bestbuy: 199, walmart: 189, official: 299 },
      history: [
        { month: "Jan", price: 299 }, { month: "Feb", price: 269 },
        { month: "Mar", price: 239 }, { month: "Apr", price: 219 },
        { month: "May", price: 199 }, { month: "Jun", price: 179 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "LCD", resolution: "2400x1080", refreshRate: 120, brightness: 1000, protection: "Panda Glass" },
      performance: { chipset: "Dimensity 7020", cpu: "8-core", gpu: "Mali-G57 MC2", ram: [8], storage: [128, 256] },
      camera: { main: "50MP f/1.8", ultrawide: "None", telephoto: "None", front: "8MP f/2.0", video: "1080p 30fps" },
      battery: { capacity: 5000, wiredCharging: 30, wirelessCharging: 15, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 5", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "None", headphoneJack: true, microSD: true, fingerprint: "Side-mounted", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: true, hiResAudio: false, dolbyAtmos: true, audioRating: 4.0 },
      build: { frame: "Plastic", back: "Vegan leather (Midnight Blue)", ipRating: "None (splash resistant only)", dimensions: "163.1 x 74.8 x 8.4 mm" }
    },
    benchmarks: { antutu: 420000, geekbenchSingle: 620, geekbenchMulti: 1900, gpuTest: "Steel Nomad Light: 380" },
    ratings: { overall: 3.8, camera: 3.4, battery: 4.5, performance: 3.3, display: 3.9, value: 4.6 },
    pros: ["Wireless charging under $200 (rare!)", "120Hz display", "5000mAh battery + 30W charging", "Headphone jack and microSD", "Clean software"],
    cons: ["LCD panel (no AMOLED)", "No ultrawide camera", "Dimensity 7020 is modest", "Only 1 OS update promised"],
    tags: ["budget", "5g", "battery", "basic", "value"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "rog-phone-8-pro",
    name: "Asus ROG Phone 8 Pro",
    brand: "Asus",
    image: "https://picsum.photos/seed/rogphone8pro/400/500",
    gallery: [
      "https://picsum.photos/seed/rogphone8pro1/600/700",
      "https://picsum.photos/seed/rogphone8pro2/600/700",
      "https://picsum.photos/seed/rogphone8pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "225g",
    colors: ["Revenge Noir", "Storm Grey"],
    price: {
      current: 1199,
      original: 1199,
      stores: { amazon: 1149, bestbuy: 1199, walmart: 1169, official: 1199 },
      history: [
        { month: "Jan", price: 1199 }, { month: "Feb", price: 1199 },
        { month: "Mar", price: 1179 }, { month: "Apr", price: 1169 },
        { month: "May", price: 1159 }, { month: "Jun", price: 1149 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "LTPO AMOLED", resolution: "2400x1080", refreshRate: 165, brightness: 2500, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [16, 24], storage: [512, 1024] },
      camera: { main: "50MP f/1.9 OIS (Sony IMX890)", ultrawide: "13MP f/2.2", telephoto: "32MP 3x zoom", front: "32MP f/2.5", video: "8K 24fps" },
      battery: { capacity: 5500, wiredCharging: 65, wirelessCharging: 15, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: true, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: true, hiResAudio: true, dolbyAtmos: true, audioRating: 4.9 },
      build: { frame: "Aluminum", back: "Glass with AniMe Vision display", ipRating: "IP68 (1.5m / 30 min)", dimensions: "163.8 x 76.8 x 8.9 mm" }
    },
    benchmarks: { antutu: 2180000, geekbenchSingle: 2260, geekbenchMulti: 7200, gpuTest: "Steel Nomad Light: 4700" },
    ratings: { overall: 4.6, camera: 4.1, battery: 4.8, performance: 5.0, display: 4.8, value: 3.9 },
    pros: ["165Hz LTPO gaming display", "24GB RAM variant available", "AniMe Vision mini-LED back display", "First ROG Phone with IP68 + wireless charging", "3.5mm jack + Dirac audio"],
    cons: ["Very expensive", "Heavy at 225g", "Gamer aesthetic polarizing", "Only 2 years of OS updates"],
    tags: ["flagship", "5g", "gaming", "battery", "music", "premium"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "redmagic-9-pro",
    name: "RedMagic 9 Pro",
    brand: "Nubia",
    image: "https://picsum.photos/seed/redmagic9pro/400/500",
    gallery: [
      "https://picsum.photos/seed/redmagic9pro1/600/700",
      "https://picsum.photos/seed/redmagic9pro2/600/700",
      "https://picsum.photos/seed/redmagic9pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "229g",
    colors: ["Cyclone", "Snowfall White", "Sleet"],
    price: {
      current: 649,
      original: 699,
      stores: { amazon: 599, bestbuy: 649, walmart: 639, official: 699 },
      history: [
        { month: "Jan", price: 699 }, { month: "Feb", price: 679 },
        { month: "Mar", price: 659 }, { month: "Apr", price: 649 },
        { month: "May", price: 629 }, { month: "Jun", price: 599 }
      ]
    },
    specs: {
      display: { size: "6.8", type: "AMOLED", resolution: "2480x1116", refreshRate: 120, brightness: 1600, protection: "Gorilla Glass 5" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.88 OIS (Samsung GN5)", ultrawide: "50MP f/2.2", telephoto: "2MP macro", front: "16MP under-display f/2.0", video: "8K 30fps" },
      battery: { capacity: 6500, wiredCharging: 80, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "None", headphoneJack: true, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: true, hiResAudio: true, dolbyAtmos: false, audioRating: 4.7 },
      build: { frame: "Aluminum with dual cooling vents", back: "Glass", ipRating: "None", dimensions: "163.6 x 75 x 8.9 mm" }
    },
    benchmarks: { antutu: 2270000, geekbenchSingle: 2280, geekbenchMulti: 7300, gpuTest: "Steel Nomad Light: 4800" },
    ratings: { overall: 4.4, camera: 3.6, battery: 4.9, performance: 5.0, display: 4.5, value: 4.5 },
    pros: ["Highest sustained FPS of any phone (built-in fan)", "Massive 6500mAh battery", "Shoulder triggers for gaming", "Under-display selfie camera", "3.5mm jack + no camera bump"],
    cons: ["No water resistance", "Average cameras", "Redmagic OS 5 has ads", "No wireless charging"],
    tags: ["flagship", "5g", "gaming", "battery", "fast-charging", "music"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    image: "https://picsum.photos/seed/nothingphone2a/400/500",
    gallery: [
      "https://picsum.photos/seed/nothingphone2a1/600/700",
      "https://picsum.photos/seed/nothingphone2a2/600/700",
      "https://picsum.photos/seed/nothingphone2a3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "196g",
    colors: ["Black", "Milk"],
    price: {
      current: 349,
      original: 349,
      stores: { amazon: 329, bestbuy: 349, walmart: 339, official: 349 },
      history: [
        { month: "Jan", price: 349 }, { month: "Feb", price: 349 },
        { month: "Mar", price: 339 }, { month: "Apr", price: 329 },
        { month: "May", price: 329 }, { month: "Jun", price: 319 }
      ]
    },
    specs: {
      display: { size: "6.7", type: "AMOLED", resolution: "2412x1080", refreshRate: 120, brightness: 1300, protection: "Panda Glass" },
      performance: { chipset: "Dimensity 7200 Pro", cpu: "8-core", gpu: "Mali-G610 MC4", ram: [8, 12], storage: [128, 256] },
      camera: { main: "50MP f/1.88 OIS", ultrawide: "50MP f/2.2", telephoto: "None", front: "32MP f/2.2", video: "4K 30fps" },
      battery: { capacity: 5000, wiredCharging: 45, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 6", bluetooth: "5.3", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP54", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: false, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: false, dolbyAtmos: true, audioRating: 4.0 },
      build: { frame: "Polycarbonate", back: "Transparent design (no Glyph front lights)", ipRating: "IP54 (splash resistant)", dimensions: "164.7 x 75 x 8.6 mm" }
    },
    benchmarks: { antutu: 740000, geekbenchSingle: 1030, geekbenchMulti: 2900, gpuTest: "Steel Nomad Light: 950" },
    ratings: { overall: 4.2, camera: 4.0, battery: 4.4, performance: 4.0, display: 4.3, value: 4.6 },
    pros: ["Iconic transparent design at budget price", "Dual 50MP cameras actually good", "Clean Nothing OS 2.5", "Excellent 120Hz AMOLED", "3 years OS + 4 years security updates"],
    cons: ["No wireless charging", "IP54 only", "No telephoto", "Plastic build"],
    tags: ["budget", "5g", "camera", "value", "social-media"],
    isPopular: true,
    isEditorChoice: false
  },
  {
    id: "honor-magic-6-pro",
    name: "Honor Magic 6 Pro",
    brand: "Honor",
    image: "https://picsum.photos/seed/honormagic6pro/400/500",
    gallery: [
      "https://picsum.photos/seed/honormagic6pro1/600/700",
      "https://picsum.photos/seed/honormagic6pro2/600/700",
      "https://picsum.photos/seed/honormagic6pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "225g",
    colors: ["Black", "Epi Green", "Violet", "Sky Blue"],
    price: {
      current: 1099,
      original: 1199,
      stores: { amazon: 1049, bestbuy: 1099, walmart: 1069, official: 1199 },
      history: [
        { month: "Jan", price: 1199 }, { month: "Feb", price: 1179 },
        { month: "Mar", price: 1149 }, { month: "Apr", price: 1129 },
        { month: "May", price: 1099 }, { month: "Jun", price: 1049 }
      ]
    },
    specs: {
      display: { size: "6.8", type: "LTPO OLED", resolution: "2800x1280", refreshRate: 120, brightness: 5000, protection: "Anti-scratch NanoCrystal Shield" },
      performance: { chipset: "Snapdragon 8 Gen 3", cpu: "8-core", gpu: "Adreno 750", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.4 OIS (variable aperture)", ultrawide: "50MP f/2.0", telephoto: "180MP 2.5x periscope", front: "50MP f/2.0", video: "4K 60fps" },
      battery: { capacity: 5600, wiredCharging: 80, wirelessCharging: 66, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "In-display 3D face + optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.5 },
      build: { frame: "Aluminum", back: "NanoCrystal micro-crystal glass", ipRating: "IP68 (1.5m / 30 min)", dimensions: "162.5 x 75.8 x 8.9 mm" }
    },
    benchmarks: { antutu: 2150000, geekbenchSingle: 2250, geekbenchMulti: 7150, gpuTest: "Steel Nomad Light: 4650" },
    ratings: { overall: 4.5, camera: 4.6, battery: 4.8, performance: 4.8, display: 4.9, value: 4.0 },
    pros: ["5000-nit display is the brightest on any phone", "Record 180MP periscope telephoto", "Second-gen silicon-carbon 5600mAh battery", "80W wired + 66W wireless", "Falcon camera algorithm with AI motion sensing"],
    cons: ["MagicOS differs heavily from stock Android", "Limited US availability", "No 4K on telephoto", "Expensive"],
    tags: ["flagship", "5g", "premium", "camera", "battery", "fast-charging"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    image: "https://picsum.photos/seed/vivox100pro/400/500",
    gallery: [
      "https://picsum.photos/seed/vivox100pro1/600/700",
      "https://picsum.photos/seed/vivox100pro2/600/700",
      "https://picsum.photos/seed/vivox100pro3/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "225g",
    colors: ["Asteroid Black", "Sunset Orange"],
    price: {
      current: 899,
      original: 999,
      stores: { amazon: 849, bestbuy: 899, walmart: 879, official: 999 },
      history: [
        { month: "Jan", price: 999 }, { month: "Feb", price: 969 },
        { month: "Mar", price: 949 }, { month: "Apr", price: 929 },
        { month: "May", price: 899 }, { month: "Jun", price: 849 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "LTPO AMOLED", resolution: "2800x1260", refreshRate: 120, brightness: 3000, protection: "Gorilla Glass Victus 2" },
      performance: { chipset: "Dimensity 9300", cpu: "8-core", gpu: "Immortalis-G720", ram: [16], storage: [256, 512, 1024] },
      camera: { main: "50MP f/1.75 OIS (1-inch Sony LYT-T900)", ultrawide: "50MP f/2.0", telephoto: "50MP 4.3x APO periscope (ZEISS)", front: "32MP f/2.0", video: "8K 30fps" },
      battery: { capacity: 5400, wiredCharging: 100, wirelessCharging: 50, reverseWireless: true },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP68", headphoneJack: false, microSD: false, fingerprint: "Ultrasonic (in-display)", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.4 },
      build: { frame: "Aluminum", back: "Fluorite AG glass / vegan leather", ipRating: "IP68 (1.5m / 30 min)", dimensions: "164.1 x 75.3 x 8.9 mm" }
    },
    benchmarks: { antutu: 2240000, geekbenchSingle: 2320, geekbenchMulti: 7300, gpuTest: "Steel Nomad Light: 4900" },
    ratings: { overall: 4.6, camera: 4.8, battery: 4.7, performance: 4.7, display: 4.8, value: 4.3 },
    pros: ["ZEISS APO periscope is a zoom monster", "1-inch main sensor for stunning bokeh", "Dimensity 9300 beats Snapdragon in efficiency", "100W wired + 50W wireless", "5400mAh BlueVolt battery"],
    cons: ["Funtouch OS 14 has bloat", "Limited global availability", "USB 2.0", "Heavy"],
    tags: ["flagship", "5g", "premium", "camera", "photography", "fast-charging", "battery"],
    isPopular: false,
    isEditorChoice: true
  },
  {
    id: "realme-gt-6",
    name: "Realme GT 6",
    brand: "Realme",
    image: "https://picsum.photos/seed/realmegt6/400/500",
    gallery: [
      "https://picsum.photos/seed/realmegt61/600/700",
      "https://picsum.photos/seed/realmegt62/600/700",
      "https://picsum.photos/seed/realmegt63/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "199g",
    colors: ["Fluid Silver", "Razor Green", "Mirror Blue"],
    price: {
      current: 649,
      original: 699,
      stores: { amazon: 599, bestbuy: 649, walmart: 639, official: 699 },
      history: [
        { month: "Jan", price: 699 }, { month: "Feb", price: 689 },
        { month: "Mar", price: 669 }, { month: "Apr", price: 659 },
        { month: "May", price: 649 }, { month: "Jun", price: 599 }
      ]
    },
    specs: {
      display: { size: "6.78", type: "LTPO AMOLED", resolution: "2780x1264", refreshRate: 120, brightness: 6000, protection: "Crystal Armor Glass" },
      performance: { chipset: "Snapdragon 8s Gen 3", cpu: "8-core", gpu: "Adreno 735", ram: [12, 16], storage: [256, 512] },
      camera: { main: "50MP f/1.88 OIS (Sony LYT-808)", ultrawide: "8MP f/2.2", telephoto: "50MP 2x portrait", front: "32MP f/2.5", video: "4K 60fps" },
      battery: { capacity: 5500, wiredCharging: 120, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.4", nfc: true, usb: "USB-C 2.0", gps: true },
      features: { waterResistance: "IP65", headphoneJack: false, microSD: false, fingerprint: "In-display optical", faceID: true, foldable: false, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.2 },
      build: { frame: "Plastic", back: "AG glass with nanoscale etching", ipRating: "IP65 (splash resistant)", dimensions: "162 x 76.1 x 8.6 mm" }
    },
    benchmarks: { antutu: 1520000, geekbenchSingle: 1990, geekbenchMulti: 5200, gpuTest: "Steel Nomad Light: 2800" },
    ratings: { overall: 4.4, camera: 4.0, battery: 4.8, performance: 4.6, display: 4.7, value: 4.7 },
    pros: ["6000-nit peak brightness display", "120W SuperVOOC charging", "Flagship LYT-808 camera sensor", "5500mAh battery", "Monet-class value"],
    cons: ["IP65 only", "No wireless charging", "8MP ultrawide is weak", "Realme UI bloat"],
    tags: ["midrange", "5g", "fast-charging", "gaming", "battery", "value"],
    isPopular: false,
    isEditorChoice: false
  },
  {
    id: "honor-magic-v2",
    name: "Honor Magic V2",
    brand: "Honor",
    image: "https://picsum.photos/seed/honormagicv2/400/500",
    gallery: [
      "https://picsum.photos/seed/honormagicv21/600/700",
      "https://picsum.photos/seed/honormagicv22/600/700",
      "https://picsum.photos/seed/honormagicv23/600/700"
    ],
    releaseYear: 2024,
    os: "Android 14",
    weight: "231g",
    colors: ["Silk Black", "Silk Silver", "Rope Gold"],
    price: {
      current: 1699,
      original: 1799,
      stores: { amazon: 1649, bestbuy: 1699, walmart: 1669, official: 1799 },
      history: [
        { month: "Jan", price: 1799 }, { month: "Feb", price: 1779 },
        { month: "Mar", price: 1749 }, { month: "Apr", price: 1729 },
        { month: "May", price: 1699 }, { month: "Jun", price: 1649 }
      ]
    },
    specs: {
      display: { size: "7.92", type: "LTPO OLED", resolution: "2344x2156", refreshRate: 120, brightness: 2500, protection: "Nanocrystal Anti-scratch Shield" },
      performance: { chipset: "Snapdragon 8 Gen 2", cpu: "8-core", gpu: "Adreno 740", ram: [16], storage: [256, 512] },
      camera: { main: "50MP f/1.9 OIS", ultrawide: "50MP f/2.0", telephoto: "20MP 2.5x", front: "16MP (both screens)", video: "4K 60fps" },
      battery: { capacity: 5000, wiredCharging: 66, wirelessCharging: false, reverseWireless: false },
      connectivity: { fiveG: true, wifi: "WiFi 7", bluetooth: "5.3", nfc: true, usb: "USB-C 3.2", gps: true },
      features: { waterResistance: "None", headphoneJack: false, microSD: false, fingerprint: "Side-mounted", faceID: true, foldable: true, stylus: false, fastCharging: true, highRefreshRate: true },
      audio: { stereoSpeakers: true, headphoneJack: false, hiResAudio: true, dolbyAtmos: true, audioRating: 4.3 },
      build: { frame: "Titanium hinge + aluminum", back: "Nano micro-crystal glass", ipRating: "None (no official rating)", dimensions: "156.7 x 145.4 x 4.8 mm (unfolded, thinnest foldable)" }
    },
    benchmarks: { antutu: 1650000, geekbenchSingle: 2050, geekbenchMulti: 6300, gpuTest: "Steel Nomad Light: 3400" },
    ratings: { overall: 4.4, camera: 4.2, battery: 4.3, performance: 4.6, display: 4.7, value: 3.5 },
    pros: ["Thinnest book-style foldable ever (9.9mm folded)", "Full-size 5000mAh battery despite slimness", "Both displays get 120Hz", "Titanium hinge"],
    cons: ["No water resistance", "No wireless charging", "MagicOS software quirks", "Very expensive"],
    tags: ["flagship", "5g", "premium", "foldable", "productivity", "compact"],
    isPopular: false,
    isEditorChoice: false
  }
];

// ═══════════════════════════════════════
// CURATED CATEGORY LISTS
// ═══════════════════════════════════════

const TOP_PICKS = {
  bestOverall: ["oneplus-13", "iphone-16-pro-max", "galaxy-s24-ultra", "pixel-9-pro-xl", "xiaomi-14-ultra"],
  bestCamera: ["xiaomi-14-ultra", "pixel-9-pro-xl", "vivo-x100-pro", "iphone-16-pro-max", "galaxy-s24-ultra"],
  bestGaming: ["rog-phone-8-pro", "oneplus-13", "redmagic-9-pro", "asus-rog-phone-7", "oneplus-12r"],
  bestBudget: ["poco-x6-pro", "oneplus-nord-4", "pixel-7a", "galaxy-a55", "nothing-phone-2a"],
  bestBattery: ["oneplus-13", "oneplus-13r", "rog-phone-8-pro", "oneplus-12r", "asus-rog-phone-7"],
  bestBusiness: ["iphone-16-pro-max", "galaxy-z-fold-6", "pixel-9-pro-xl", "galaxy-s24-ultra", "oneplus-open"],
  bestIphones: ["iphone-16-pro-max", "iphone-16-pro", "iphone-15-pro", "iphone-16", "iphone-15"],
  bestAndroid: ["oneplus-13", "galaxy-s24-ultra", "pixel-9-pro-xl", "xiaomi-14-ultra", "honor-magic-6-pro"],
  latestReleased: ["iphone-16-pro-max", "pixel-9-pro-xl", "oneplus-13", "galaxy-z-fold-6", "oneplus-13r"],
  editorsChoice: ["oneplus-13", "pixel-9-pro-xl", "iphone-16-pro", "xiaomi-14-ultra", "oneplus-13r"]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PHONES_DATA, TOP_PICKS };
}
