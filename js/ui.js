/**
 * SmartPick - UI Utilities & Shared Component Renderers
 */

// ── Currency Rates & Formatter ──────────────────────────────
const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, locale: 'en-US' },
  EUR: { symbol: '€', rate: 0.92, locale: 'de-DE' },
  GBP: { symbol: '£', rate: 0.79, locale: 'en-GB' },
  INR: { symbol: '₹', rate: 83.2, locale: 'en-IN' }
};

let currentCurrency = localStorage.getItem('smartpick_currency') || 'USD';

function setCurrency(code) {
  if (CURRENCY_RATES[code]) {
    currentCurrency = code;
    localStorage.setItem('smartpick_currency', code);
    document.querySelectorAll('.currency-select').forEach(select => {
      select.value = code;
    });
    // Trigger custom event so any active page can re-render prices
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: { currency: code } }));
  }
}

function formatPrice(amountInUSD) {
  if (typeof amountInUSD !== 'number' || isNaN(amountInUSD)) return 'N/A';
  const curr = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const converted = Math.round(amountInUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString(curr.locale)}`;
}

// ── SVG Phone Placeholder Fallback ──────────────────────────
function getPhoneFallbackSvg(name = 'Smartphone', brand = 'SmartPick') {
  const cleanName = String(name).replace(/"/g, '&quot;');
  const cleanBrand = String(brand).replace(/"/g, '&quot;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a28"/>
        <stop offset="100%" stop-color="#0f0f18"/>
      </linearGradient>
      <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6c63ff"/>
        <stop offset="100%" stop-color="#00d4ff"/>
      </linearGradient>
    </defs>
    <rect width="400" height="500" rx="24" fill="url(#bgGrad)"/>
    <rect x="70" y="30" width="260" height="440" rx="36" fill="#12121c" stroke="url(#accGrad)" stroke-width="3"/>
    <circle cx="200" cy="55" r="5" fill="#33334d"/>
    <rect x="180" y="52" width="40" height="6" rx="3" fill="#222233"/>
    <circle cx="200" cy="200" r="45" fill="url(#accGrad)" opacity="0.15"/>
    <text x="200" y="208" fill="#6c63ff" font-size="34" text-anchor="middle" font-family="sans-serif">📱</text>
    <text x="200" y="290" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle" font-family="sans-serif">${cleanName}</text>
    <text x="200" y="315" fill="#a0a0b0" font-size="13" text-anchor="middle" font-family="sans-serif">${cleanBrand}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// ── Theme Manager (Dark / Light) ────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('smartpick_theme') || 'dark';
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('smartpick_theme', theme);
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
}

// ── Toast Notifications ─────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'danger') icon = '❌';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── Star Rating Renderer ────────────────────────────────────
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = (rating - fullStars) >= 0.3;
  let html = '';
  for (let i = 0; i < fullStars; i++) {
    html += '★';
  }
  if (hasHalf) {
    html += '½';
  }
  const remaining = 5 - Math.ceil(rating);
  for (let i = 0; i < remaining; i++) {
    html += '☆';
  }
  return `<span class="stars" aria-label="${rating} out of 5 stars">${html}</span>`;
}

// ── Phone Card Renderer ─────────────────────────────────────
function renderPhoneCard(phone, options = {}) {
  const isWishlisted = WishlistService.has(phone.id);
  const isCompared = CompareService.has(phone.id);
  const discount = Math.round(((phone.price.original - phone.price.current) / phone.price.original) * 100);

  const matchBadge = options.matchScore 
    ? `<span class="badge badge-winner">${options.matchScore}% Match</span>` 
    : '';

  const popularBadge = phone.isPopular ? `<span class="badge badge-primary">Popular</span>` : '';
  const editorBadge = phone.isEditorChoice ? `<span class="badge badge-cyan">Editor's Pick</span>` : '';
  const discountBadge = discount > 0 ? `<span class="badge badge-discount">-${discount}%</span>` : '';
  const rankBadge = options.rank ? `<div class="badge-rank">#${options.rank}</div>` : '';

  const fallbackSvg = getPhoneFallbackSvg(phone.name, phone.brand);

  return `
    <div class="phone-card animate-fade-in" data-phone-id="${phone.id}">
      ${rankBadge}
      <div class="phone-card-top">
        <div class="phone-badges">
          ${matchBadge}
          ${editorBadge}
          ${popularBadge}
          ${discountBadge}
        </div>
        <div class="card-actions">
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${phone.id}', this)" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  aria-label="Wishlist">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
          <button class="btn-compare-toggle ${isCompared ? 'active' : ''}" 
                  onclick="toggleCompare('${phone.id}', this)" 
                  title="${isCompared ? 'Remove from Compare' : 'Add to Compare'}"
                  aria-label="Compare">
            ⚖️
          </button>
        </div>
      </div>

      <div class="phone-image-wrap">
        <a href="phone-detail.html?id=${phone.id}">
          <img src="${phone.image}" 
               alt="${phone.name}" 
               class="phone-image" 
               loading="lazy" 
               onerror="this.onerror=null; this.src='${fallbackSvg}';" />
        </a>
      </div>

      <div class="phone-info">
        <span class="phone-brand">${phone.brand}</span>
        <h3 class="phone-name">
          <a href="phone-detail.html?id=${phone.id}">${phone.name}</a>
        </h3>
        <div class="phone-rating-row">
          ${renderStars(phone.ratings.overall)}
          <span style="font-weight:700; color:var(--text-primary);">${phone.ratings.overall}</span>
          <span class="reviews-count">(${Math.floor(phone.ratings.overall * 120)})</span>
        </div>
      </div>

      <div class="phone-specs-grid">
        <div class="spec-item" title="Display">
          <span class="spec-icon">📱</span>
          <span class="spec-val">${phone.specs.display.size}" ${phone.specs.display.type}</span>
        </div>
        <div class="spec-item" title="Chipset">
          <span class="spec-icon">⚡</span>
          <span class="spec-val">${phone.specs.performance.chipset.split(' ').slice(0,2).join(' ')}</span>
        </div>
        <div class="spec-item" title="Camera">
          <span class="spec-icon">📷</span>
          <span class="spec-val">${phone.specs.camera.main.split(' ')[0]}</span>
        </div>
        <div class="spec-item" title="Battery">
          <span class="spec-icon">🔋</span>
          <span class="spec-val">${phone.specs.battery.capacity}mAh</span>
        </div>
      </div>

      <div class="phone-price-row">
        <div class="phone-price-box">
          <span class="current-price">${formatPrice(phone.price.current)}</span>
          ${discount > 0 ? `<span class="original-price">${formatPrice(phone.price.original)}</span>` : ''}
        </div>
        <span class="badge badge-value">Best: Amazon</span>
      </div>

      <div class="phone-card-buttons">
        <a href="phone-detail.html?id=${phone.id}" class="btn btn-secondary btn-sm">View Specs</a>
        <a href="compare.html?p1=${phone.id}" class="btn btn-primary btn-sm">Compare</a>
      </div>
    </div>
  `;
}

// ── Global Wishlist / Compare Button Helpers ────────────────
function toggleWishlist(phoneId, buttonElement) {
  const isNowAdded = WishlistService.toggle(phoneId);
  if (buttonElement) {
    buttonElement.classList.toggle('active', isNowAdded);
    buttonElement.innerHTML = isNowAdded ? '❤️' : '🤍';
    buttonElement.classList.add('heart-pulse');
    setTimeout(() => buttonElement.classList.remove('heart-pulse'), 500);
  }
  const phone = PHONES_DATA.find(p => p.id === phoneId);
  const name = phone ? phone.name : 'Phone';
  showToast(isNowAdded ? `Added ${name} to Wishlist` : `Removed ${name} from Wishlist`, isNowAdded ? 'success' : 'info');
  updateNavBadges();
}

function toggleCompare(phoneId, buttonElement) {
  const res = CompareService.toggle(phoneId);
  if (res.error) {
    showToast(res.error, 'warning');
    return;
  }
  if (buttonElement) {
    buttonElement.classList.toggle('active', res.added);
    buttonElement.classList.add('bounce-in');
    setTimeout(() => buttonElement.classList.remove('bounce-in'), 600);
  }
  const phone = PHONES_DATA.find(p => p.id === phoneId);
  const name = phone ? phone.name : 'Phone';
  showToast(res.added ? `Added ${name} to Compare` : `Removed ${name} from Compare`, res.added ? 'success' : 'info');
  updateNavBadges();
  updateFloatingCompareBar();
}

// ── Navigation Badges Updater ───────────────────────────────
function updateNavBadges() {
  const wishCount = WishlistService.get().length;
  const compCount = CompareService.get().length;

  document.querySelectorAll('.nav-wishlist-badge').forEach(badge => {
    badge.textContent = wishCount;
    badge.style.display = wishCount > 0 ? 'flex' : 'none';
  });

  document.querySelectorAll('.nav-compare-badge').forEach(badge => {
    badge.textContent = compCount;
    badge.style.display = compCount > 0 ? 'flex' : 'none';
  });
}

// ── Floating Compare Bar ────────────────────────────────────
function updateFloatingCompareBar() {
  const selectedIds = CompareService.get();
  let bar = document.querySelector('.compare-floating-bar');

  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'compare-floating-bar';
    document.body.appendChild(bar);
  }

  if (selectedIds.length === 0) {
    bar.classList.remove('active');
    return;
  }

  bar.classList.add('active');

  const slotsHtml = [0, 1, 2].map(idx => {
    const id = selectedIds[idx];
    if (id) {
      const phone = PHONES_DATA.find(p => p.id === id);
      const fallback = phone ? getPhoneFallbackSvg(phone.name, phone.brand) : '';
      return `
        <div class="floating-item-slot filled" title="${phone ? phone.name : ''}">
          <img src="${phone ? phone.image : ''}" alt="" onerror="this.onerror=null; this.src='${fallback}';" />
        </div>
      `;
    }
    return `<div class="floating-item-slot" title="Empty slot"></div>`;
  }).join('');

  bar.innerHTML = `
    <div class="floating-items-preview">
      ${slotsHtml}
    </div>
    <span class="floating-bar-text" style="font-weight:600; font-size:0.9rem;">
      ${selectedIds.length} / 3 selected
    </span>
    <div style="display:flex; gap:8px;">
      <a href="compare.html?${selectedIds.map((id, i) => `p${i+1}=${id}`).join('&')}" class="btn btn-primary btn-sm">
        Compare Now ⚖️
      </a>
      <button class="btn btn-ghost btn-sm" onclick="CompareService.clear(); updateFloatingCompareBar(); updateNavBadges(); showToast('Cleared comparison list', 'info');">
        ✕
      </button>
    </div>
  `;
}

// ── Voice Search (Web Speech API) ───────────────────────────
function initVoiceSearch(inputElement, buttonElement) {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    if (buttonElement) buttonElement.style.display = 'none';
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  if (buttonElement) {
    buttonElement.addEventListener('click', () => {
      try {
        buttonElement.classList.add('listening');
        showToast('Listening... Speak phone name or brand 🎙️', 'info');
        recognition.start();
      } catch (err) {
        recognition.stop();
        buttonElement.classList.remove('listening');
      }
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      inputElement.value = transcript;
      buttonElement.classList.remove('listening');
      showToast(`Searching for: "${transcript}"`, 'success');
      inputElement.dispatchEvent(new Event('input', { bubbles: true }));
      if (window.location.pathname.includes('index') || window.location.pathname.endsWith('/')) {
        setTimeout(() => {
          window.location.href = `phones.html?q=${encodeURIComponent(transcript)}`;
        }, 600);
      }
    };

    recognition.onerror = () => {
      buttonElement.classList.remove('listening');
      showToast('Voice search failed. Please try typing.', 'warning');
    };

    recognition.onend = () => {
      buttonElement.classList.remove('listening');
    };
  }
}

// ── Price Drop Alert Helper ─────────────────────────────────
const PriceAlertService = {
  KEY: 'smartpick_price_alerts',
  
  getAlerts() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  },

  hasAlert(phoneId) {
    return this.getAlerts().includes(phoneId);
  },

  toggleAlert(phoneId) {
    let alerts = this.getAlerts();
    if (alerts.includes(phoneId)) {
      alerts = alerts.filter(id => id !== phoneId);
      localStorage.setItem(this.KEY, JSON.stringify(alerts));
      return false;
    } else {
      alerts.push(phoneId);
      localStorage.setItem(this.KEY, JSON.stringify(alerts));
      return true;
    }
  }
};
