/**
 * SmartPick - Main Application Controller
 * Handles global events, page routing, view initializations, and dynamic interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── Global Initializations ──────────────────────────────────
  initTheme();
  WishlistService.loadFromUrl();
  updateNavBadges();
  updateFloatingCompareBar();

  // Setup Currency Selector
  document.querySelectorAll('.currency-select').forEach(select => {
    select.value = currentCurrency;
    select.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Scroll effect on Navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // Global Header Autocomplete & Voice Search
  const headerSearchInput = document.getElementById('headerSearchInput');
  const headerAutocomplete = document.getElementById('headerAutocomplete');
  const headerVoiceBtn = document.getElementById('headerVoiceBtn');
  if (headerSearchInput && headerAutocomplete) {
    FilterEngine.setupAutocomplete(headerSearchInput, headerAutocomplete);
    initVoiceSearch(headerSearchInput, headerVoiceBtn);
  }

  // Handle Window Resize for Charts
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const page = document.body.getAttribute('data-page') || '';
      if (page === 'phone-detail') {
        const urlParams = new URLSearchParams(window.location.search);
        const phoneId = urlParams.get('id') || PHONES_DATA[0].id;
        const phone = PHONES_DATA.find(p => p.id === phoneId) || PHONES_DATA[0];
        if (phone && phone.price.history) PriceChart.render('priceHistoryCanvas', phone.price.history, phone.price.current);
        if (phone && document.getElementById('specsRadarCanvas')) PriceChart.renderRadar('specsRadarCanvas', [phone]);
      } else if (page === 'compare') {
        const phones = CompareService.getPhones();
        if (phones.length > 0 && document.getElementById('compareRadarCanvas')) PriceChart.renderRadar('compareRadarCanvas', phones);
      }
    }, 200);
  });

  // Re-render on currency change event
  window.addEventListener('currencyChanged', () => {
    initCurrentPage();
  });

  // Run Current Page Logic
  initCurrentPage();
});

function initCurrentPage() {
  const page = document.body.getAttribute('data-page') || '';

  switch (page) {
    case 'home':
      initHomePage();
      break;
    case 'finder':
      initFinderPage();
      break;
    case 'phones':
      initPhonesPage();
      break;
    case 'phone-detail':
      initPhoneDetailPage();
      break;
    case 'compare':
      initComparePage();
      break;
    case 'wishlist':
      initWishlistPage();
      break;
    case 'top-picks':
      initTopPicksPage();
      break;
  }
}

// ═══════════════════════════════════════════════════════════════
// 1. HOMEPAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initHomePage() {
  // Hero Search setup
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroAutocomplete = document.getElementById('heroAutocomplete');
  const heroVoiceBtn = document.getElementById('heroVoiceBtn');
  if (heroSearchInput && heroAutocomplete) {
    FilterEngine.setupAutocomplete(heroSearchInput, heroAutocomplete);
    initVoiceSearch(heroSearchInput, heroVoiceBtn);
  }

  // Update Hero Card Price dynamically based on currency
  const heroSamplePrice = document.getElementById('heroSamplePrice');
  if (heroSamplePrice) {
    const s24Ultra = PHONES_DATA.find(p => p.id === 'galaxy-s24-ultra');
    if (s24Ultra) {
      heroSamplePrice.textContent = formatPrice(s24Ultra.price.current);
    }
  }

  // Render Featured Phones (Top 4 Flagships)
  const featuredContainer = document.getElementById('featuredPhonesContainer');
  if (featuredContainer) {
    const featured = PHONES_DATA.filter(p => p.isPopular).slice(0, 4);
    featuredContainer.innerHTML = featured.map(p => renderPhoneCard(p)).join('');
  }

  // Render Editor's Choice
  const editorContainer = document.getElementById('editorPhonesContainer');
  if (editorContainer) {
    const editors = PHONES_DATA.filter(p => p.isEditorChoice).slice(0, 4);
    editorContainer.innerHTML = editors.map(p => renderPhoneCard(p)).join('');
  }

  // Category Quick Links handler
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.getAttribute('data-category');
      window.location.href = `phones.html?category=${cat}`;
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// 2. FINDER QUIZ PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initFinderPage() {
  let currentStep = 1;
  const totalSteps = 6;
  const answers = {
    budget: { min: 200, max: 400 },
    useCase: 'photography',
    brand: 'any',
    os: 'any',
    ram: null,
    storage: null,
    screenSize: null,
    cameraPriority: null,
    batteryPriority: null,
    features: []
  };

  const updateProgress = () => {
    const pct = ((currentStep) / totalSteps) * 100;
    const bar = document.getElementById('quizProgressFill');
    const stepText = document.getElementById('quizStepIndicator');
    if (bar) bar.style.width = `${pct}%`;
    if (stepText) stepText.textContent = `Step ${currentStep} of ${totalSteps}`;

    // Show only current step container with smooth animation
    document.querySelectorAll('.quiz-step-content').forEach(el => {
      const isCurrent = el.getAttribute('data-step') == currentStep;
      el.style.display = isCurrent ? 'block' : 'none';
      if (isCurrent) {
        el.classList.remove('animate-fade-in');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('animate-fade-in');
      }
    });

    const prevBtn = document.getElementById('quizPrevBtn');
    const nextBtn = document.getElementById('quizNextBtn');
    if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    if (nextBtn) nextBtn.textContent = currentStep === totalSteps ? 'Find My Perfect Match 🚀' : 'Next Step →';
  };

  // Step 1: Preset Budget Cards
  document.querySelectorAll('#step1Options .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#step1Options .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const min = parseInt(card.getAttribute('data-min'), 10);
      const max = parseInt(card.getAttribute('data-max'), 10);
      answers.budget = { min, max };
      
      const customSlider = document.getElementById('customBudgetSlider');
      const customDisplay = document.getElementById('customBudgetDisplay');
      if (customSlider && customDisplay) {
        customSlider.value = max > 2000 ? 2000 : max;
        customDisplay.textContent = formatPrice(Number(customSlider.value));
      }
    });
  });

  // Step 1: Custom Slider Input
  const customBudgetSlider = document.getElementById('customBudgetSlider');
  const customBudgetDisplay = document.getElementById('customBudgetDisplay');
  if (customBudgetSlider && customBudgetDisplay) {
    customBudgetSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      customBudgetDisplay.textContent = formatPrice(val);
      answers.budget = { min: 0, max: val };
      document.querySelectorAll('#step1Options .quiz-option-card').forEach(c => c.classList.remove('selected'));
    });
  }

  // Step 2: Use Case selection
  document.querySelectorAll('#step2Options .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#step2Options .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      answers.useCase = card.getAttribute('data-usecase');
    });
  });

  // Step 3: Brand selection
  document.querySelectorAll('#step3Options .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#step3Options .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      answers.brand = card.getAttribute('data-brand');
    });
  });

  // Step 4: OS selection
  document.querySelectorAll('#step4Options .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#step4Options .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      answers.os = card.getAttribute('data-os');
    });
  });

  // Step 5: Spec pills
  document.querySelectorAll('.spec-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const type = pill.getAttribute('data-spec-type');
      const val = pill.getAttribute('data-spec-val');
      pill.parentElement.querySelectorAll('.spec-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      answers[type] = isNaN(val) ? val : Number(val);
    });
  });

  // Step 6: Feature Checkboxes
  document.querySelectorAll('.feature-check').forEach(chk => {
    chk.addEventListener('change', () => {
      const feat = chk.value;
      if (chk.checked) {
        if (!answers.features.includes(feat)) answers.features.push(feat);
      } else {
        answers.features = answers.features.filter(f => f !== feat);
      }
    });
  });

  // Navigation Buttons
  const prevBtn = document.getElementById('quizPrevBtn');
  const nextBtn = document.getElementById('quizNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateProgress();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateProgress();
      } else {
        renderQuizResults(answers);
      }
    });
  }

  updateProgress();
}

function renderQuizResults(answers) {
  const wizardContainer = document.getElementById('quizWizardBox');
  const resultsContainer = document.getElementById('quizResultsBox');
  const resultsGrid = document.getElementById('quizResultsGrid');

  if (wizardContainer) wizardContainer.style.display = 'none';
  if (resultsContainer) resultsContainer.style.display = 'block';

  // Calculate Matches
  const ranked = QuizEngine.findPhones(answers);
  const topMatches = ranked.slice(0, 6);

  if (resultsGrid) {
    resultsGrid.innerHTML = topMatches.map(phone => 
      renderPhoneCard(phone, { matchScore: phone.matchScore })
    ).join('');
  }

  // Launch celebration confetti!
  QuizEngine.launchConfetti();
  showToast(`Found ${topMatches.length} matching recommendations!`, 'success');
}

// ═══════════════════════════════════════════════════════════════
// 3. PHONES LISTING PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initPhonesPage() {
  const grid = document.getElementById('phonesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const sortSelect = document.getElementById('sortSelect');
  const searchInput = document.getElementById('listingSearchInput');
  const voiceBtn = document.getElementById('listingVoiceBtn');

  // Read URL params (e.g. ?q=samsung, ?category=gaming, ?brand=Apple)
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q') || '';
  const initialBrand = urlParams.get('brand') || '';
  const initialCategory = urlParams.get('category') || '';

  if (searchInput && initialQuery) {
    searchInput.value = initialQuery;
  }

  const activeFilters = {
    query: initialQuery,
    brands: initialBrand ? [initialBrand] : [],
    minPrice: 0,
    maxPrice: 2000,
    os: 'all',
    minRam: 0,
    minStorage: 0,
    screenSizeCategory: '',
    displayTypes: [],
    minCameraMp: 0,
    minBattery: 0,
    minRefreshRate: 0,
    features: []
  };

  if (initialCategory) {
    if (initialCategory === 'gaming') { activeFilters.features.push('fastCharging'); activeFilters.minRefreshRate = 120; }
    if (initialCategory === 'camera') activeFilters.minCameraMp = 50;
    if (initialCategory === 'budget') activeFilters.maxPrice = 400;
    if (initialCategory === 'battery') activeFilters.minBattery = 5000;
    if (initialCategory === '5g') activeFilters.features.push('5g');
    if (initialCategory === 'productivity') activeFilters.features.push('foldable');
  }

  // Price range slider & display sync
  const priceRangeSlider = document.getElementById('priceRangeSlider');
  const priceMaxDisplay = document.getElementById('priceMaxDisplay');

  if (priceRangeSlider && priceMaxDisplay) {
    priceRangeSlider.value = activeFilters.maxPrice;
    priceMaxDisplay.textContent = formatPrice(Number(priceRangeSlider.value));

    priceRangeSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      activeFilters.maxPrice = val;
      priceMaxDisplay.textContent = formatPrice(val);
      applyAndRender();
    });
  }

  // Brand checkboxes
  document.querySelectorAll('.brand-checkbox').forEach(chk => {
    if (initialBrand && chk.value.toLowerCase() === initialBrand.toLowerCase()) {
      chk.checked = true;
    }
    chk.addEventListener('change', () => {
      const b = chk.value;
      if (chk.checked) {
        if (!activeFilters.brands.includes(b)) activeFilters.brands.push(b);
      } else {
        activeFilters.brands = activeFilters.brands.filter(brand => brand !== b);
      }
      applyAndRender();
    });
  });

  // OS Radios
  document.querySelectorAll('input[name="osFilter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      activeFilters.os = e.target.value;
      applyAndRender();
    });
  });

  // RAM Filter Pills
  document.querySelectorAll('.ram-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.ram-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.minRam = Number(pill.getAttribute('data-ram') || 0);
      applyAndRender();
    });
  });

  // Storage Filter Pills
  document.querySelectorAll('.storage-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.storage-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.minStorage = Number(pill.getAttribute('data-storage') || 0);
      applyAndRender();
    });
  });

  // Camera MP Filter Pills
  document.querySelectorAll('.camera-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.camera-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.minCameraMp = Number(pill.getAttribute('data-mp') || 0);
      applyAndRender();
    });
  });

  // Battery Filter Pills
  document.querySelectorAll('.battery-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.battery-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.minBattery = Number(pill.getAttribute('data-battery') || 0);
      applyAndRender();
    });
  });

  // Refresh Rate Filter Pills
  document.querySelectorAll('.refresh-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.refresh-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.minRefreshRate = Number(pill.getAttribute('data-refresh') || 0);
      applyAndRender();
    });
  });

  // Display Type Checkboxes
  document.querySelectorAll('.display-type-check').forEach(chk => {
    chk.addEventListener('change', () => {
      const type = chk.value;
      if (chk.checked) {
        if (!activeFilters.displayTypes.includes(type)) activeFilters.displayTypes.push(type);
      } else {
        activeFilters.displayTypes = activeFilters.displayTypes.filter(t => t !== type);
      }
      applyAndRender();
    });
  });

  // Feature Checkboxes
  document.querySelectorAll('.filter-feature-check').forEach(chk => {
    if (activeFilters.features.includes(chk.value)) {
      chk.checked = true;
    }
    chk.addEventListener('change', () => {
      const feat = chk.value;
      if (chk.checked) {
        if (!activeFilters.features.includes(feat)) activeFilters.features.push(feat);
      } else {
        activeFilters.features = activeFilters.features.filter(f => f !== feat);
      }
      applyAndRender();
    });
  });

  // Search Input live with debounce
  if (searchInput) {
    let timer = null;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        activeFilters.query = e.target.value;
        applyAndRender();
      }, 150);
    });
    initVoiceSearch(searchInput, voiceBtn);
  }

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applyAndRender();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      window.location.href = 'phones.html';
    });
  }

  function applyAndRender() {
    if (!grid) return;

    let filtered = FilterEngine.filter(activeFilters, PHONES_DATA);
    const sortBy = sortSelect ? sortSelect.value : 'popular';
    filtered = FilterEngine.sort(filtered, sortBy);

    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PHONES_DATA.length}</strong> smartphones`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:60px 20px;">
          <div style="font-size:3rem; margin-bottom:12px;">🔍</div>
          <h3>No smartphones match your exact filters</h3>
          <p style="color:var(--text-muted); margin-top:8px; margin-bottom:20px;">Try adjusting your price slider or relaxing some feature requirements.</p>
          <button class="btn btn-secondary" onclick="window.location.href='phones.html'">Clear All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(phone => renderPhoneCard(phone)).join('');
  }

  applyAndRender();
}

// ═══════════════════════════════════════════════════════════════
// 4. PHONE DETAIL PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initPhoneDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const phoneId = urlParams.get('id') || PHONES_DATA[0].id;
  const phone = PHONES_DATA.find(p => p.id === phoneId) || PHONES_DATA[0];

  // Set Page Title
  document.title = `${phone.name} - Price, Specs & Review | SmartPick`;

  // Hero section population
  const mainImage = document.getElementById('detailMainImage');
  const galleryThumbnails = document.getElementById('detailGalleryThumbs');
  const nameEl = document.getElementById('detailPhoneName');
  const brandEl = document.getElementById('detailBrand');
  const priceEl = document.getElementById('detailPrice');
  const origPriceEl = document.getElementById('detailOriginalPrice');
  const discountEl = document.getElementById('detailDiscountBadge');
  const ratingEl = document.getElementById('detailRatingRow');
  const wishlistBtn = document.getElementById('detailWishlistBtn');
  const compareBtn = document.getElementById('detailCompareBtn');
  const shareBtn = document.getElementById('detailShareBtn');
  const priceAlertBtn = document.getElementById('detailPriceAlertBtn');

  const fallbackSvg = getPhoneFallbackSvg(phone.name, phone.brand);

  if (mainImage) {
    mainImage.src = phone.image;
    mainImage.onerror = () => { mainImage.src = fallbackSvg; };
  }
  if (nameEl) nameEl.textContent = phone.name;
  if (brandEl) brandEl.textContent = phone.brand;
  if (priceEl) priceEl.textContent = formatPrice(phone.price.current);

  const discount = Math.round(((phone.price.original - phone.price.current) / phone.price.original) * 100);
  if (origPriceEl && discount > 0) {
    origPriceEl.textContent = formatPrice(phone.price.original);
  }
  if (discountEl && discount > 0) {
    discountEl.textContent = `Save ${discount}%`;
    discountEl.style.display = 'inline-flex';
  }

  if (ratingEl) {
    ratingEl.innerHTML = `
      ${renderStars(phone.ratings.overall)}
      <strong style="margin-left:6px; font-size:1.1rem;">${phone.ratings.overall}</strong>
      <span style="color:var(--text-muted); font-size:0.85rem;">/ 5.0 (Score: ${CompareService.calculateScore(phone)}/100)</span>
    `;
  }

  // Gallery thumbnails
  if (galleryThumbnails && phone.gallery) {
    galleryThumbnails.innerHTML = [phone.image, ...phone.gallery].map((imgUrl, idx) => `
      <img src="${imgUrl}" 
           alt="${phone.name} view ${idx+1}" 
           class="gallery-thumb ${idx === 0 ? 'active' : ''}" 
           onerror="this.onerror=null; this.src='${fallbackSvg}';"
           onclick="document.getElementById('detailMainImage').src='${imgUrl}'; document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');" 
           style="width:65px; height:65px; object-fit:cover; border-radius:8px; cursor:pointer; border:2px solid var(--border-color);" />
    `).join('');
  }

  // Wishlist & Compare Buttons
  if (wishlistBtn) {
    const isWish = WishlistService.has(phone.id);
    wishlistBtn.innerHTML = isWish ? '❤️ In Wishlist' : '🤍 Add to Wishlist';
    wishlistBtn.onclick = () => {
      const added = WishlistService.toggle(phone.id);
      wishlistBtn.innerHTML = added ? '❤️ In Wishlist' : '🤍 Add to Wishlist';
      showToast(added ? 'Added to Wishlist' : 'Removed from Wishlist', added ? 'success' : 'info');
      updateNavBadges();
    };
  }

  if (compareBtn) {
    compareBtn.onclick = () => {
      toggleCompare(phone.id);
      window.location.href = `compare.html?p1=${phone.id}`;
    };
  }

  if (shareBtn) {
    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({ title: phone.name, text: `Check out specs and best prices for ${phone.name} on SmartPick!`, url: window.location.href });
      } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard! 📋', 'success');
      }
    };
  }

  // Price Alert Button
  if (priceAlertBtn) {
    const hasAlert = PriceAlertService.hasAlert(phone.id);
    priceAlertBtn.innerHTML = hasAlert ? '🔔 Price Alert Active' : '🔔 Alert Me on Price Drop';
    priceAlertBtn.className = hasAlert ? 'btn btn-primary btn-lg' : 'btn btn-outline btn-lg';
    
    priceAlertBtn.onclick = () => {
      const active = PriceAlertService.toggleAlert(phone.id);
      priceAlertBtn.innerHTML = active ? '🔔 Price Alert Active' : '🔔 Alert Me on Price Drop';
      priceAlertBtn.className = active ? 'btn btn-primary btn-lg' : 'btn btn-outline btn-lg';
      showToast(active ? `Price drop notifications enabled for ${phone.name}` : `Price alert removed for ${phone.name}`, active ? 'success' : 'info');
    };
  }

  // Pros & Cons
  const prosContainer = document.getElementById('detailProsList');
  const consContainer = document.getElementById('detailConsList');
  if (prosContainer && phone.pros) {
    prosContainer.innerHTML = phone.pros.map(p => `<li style="margin-bottom:8px; display:flex; align-items:flex-start; gap:8px;"><span style="color:var(--success);">✓</span> <span>${p}</span></li>`).join('');
  }
  if (consContainer && phone.cons) {
    consContainer.innerHTML = phone.cons.map(c => `<li style="margin-bottom:8px; display:flex; align-items:flex-start; gap:8px;"><span style="color:var(--danger);">✕</span> <span>${c}</span></li>`).join('');
  }

  // Store Price Comparison Table (Supports Indian & Global Stores)
  const storeTable = document.getElementById('storePriceTable');
  if (storeTable && phone.price.stores) {
    const stores = Object.entries(phone.price.stores);
    
    // Add Flipkart / Indian retailers if in INR mode or as additional retailers
    if (!phone.price.stores.flipkart) {
      stores.push(['flipkart', Math.round(phone.price.current * 0.98)]);
    }

    const minStorePrice = Math.min(...stores.map(s => s[1]));

    storeTable.innerHTML = stores.map(([storeName, price]) => {
      const isBest = price === minStorePrice;
      const storeIcons = { amazon: '🛒', bestbuy: '🏪', walmart: '🏬', official: '📱', flipkart: '🛍️' };
      const displayStoreNames = { amazon: 'Amazon', bestbuy: 'Best Buy', walmart: 'Walmart', official: `${phone.brand} Official Store`, flipkart: 'Flipkart Online' };

      return `
        <div class="store-row ${isBest ? 'best-deal' : ''}">
          <div class="store-info">
            <span class="store-icon">${storeIcons[storeName] || '🏪'}</span>
            <div>
              <div style="font-weight:700;">${displayStoreNames[storeName] || storeName}</div>
              ${isBest ? '<span class="badge badge-winner" style="font-size:0.7rem; padding:2px 6px;">🏆 Lowest Verified Price</span>' : '<span style="font-size:0.78rem; color:var(--text-muted);">In Stock • Free Delivery</span>'}
            </div>
          </div>
          <div class="store-pricing">
            <span class="store-price">${formatPrice(price)}</span>
            <a href="https://www.google.com/search?q=${encodeURIComponent(storeName + ' ' + phone.name)}" target="_blank" rel="noopener" class="btn ${isBest ? 'btn-primary' : 'btn-secondary'} btn-sm">
              Visit Store ↗
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  // Specs Table Full Data
  const fullSpecsTable = document.getElementById('fullSpecsContainer');
  if (fullSpecsTable) {
    fullSpecsTable.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">📱 Display</h4>
          <p><strong>Size:</strong> ${phone.specs.display.size} inches</p>
          <p><strong>Type:</strong> ${phone.specs.display.type}</p>
          <p><strong>Resolution:</strong> ${phone.specs.display.resolution}</p>
          <p><strong>Refresh Rate:</strong> ${phone.specs.display.refreshRate} Hz</p>
          <p><strong>Brightness:</strong> ${phone.specs.display.brightness} nits (Peak)</p>
          <p><strong>Glass:</strong> ${phone.specs.display.protection}</p>
        </div>

        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">⚡ Performance</h4>
          <p><strong>Chipset:</strong> ${phone.specs.performance.chipset}</p>
          <p><strong>CPU:</strong> ${phone.specs.performance.cpu}</p>
          <p><strong>GPU:</strong> ${phone.specs.performance.gpu}</p>
          <p><strong>RAM:</strong> ${phone.specs.performance.ram.map(r=>`${r}GB`).join(', ')}</p>
          <p><strong>Storage:</strong> ${phone.specs.performance.storage.map(s=> s >= 1024 ? '1TB' : `${s}GB`).join(', ')}</p>
          <p><strong>OS:</strong> ${phone.os}</p>
        </div>

        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">📷 Camera</h4>
          <p><strong>Main:</strong> ${phone.specs.camera.main}</p>
          <p><strong>Ultra-wide:</strong> ${phone.specs.camera.ultrawide}</p>
          <p><strong>Telephoto:</strong> ${phone.specs.camera.telephoto}</p>
          <p><strong>Front:</strong> ${phone.specs.camera.front}</p>
          <p><strong>Video:</strong> ${phone.specs.camera.video}</p>
        </div>

        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">🔋 Battery & Power</h4>
          <p><strong>Capacity:</strong> ${phone.specs.battery.capacity} mAh</p>
          <p><strong>Wired Charging:</strong> ${phone.specs.battery.wiredCharging}W</p>
          <p><strong>Wireless Charging:</strong> ${phone.specs.battery.wirelessCharging ? `${phone.specs.battery.wirelessCharging}W` : 'No'}</p>
          <p><strong>Reverse Wireless:</strong> ${phone.specs.battery.reverseWireless ? 'Yes' : 'No'}</p>
        </div>

        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">📶 Connectivity</h4>
          <p><strong>5G:</strong> ${phone.specs.connectivity.fiveG ? 'Supported' : 'No'}</p>
          <p><strong>WiFi:</strong> ${phone.specs.connectivity.wifi}</p>
          <p><strong>Bluetooth:</strong> ${phone.specs.connectivity.bluetooth}</p>
          <p><strong>NFC:</strong> ${phone.specs.connectivity.nfc ? 'Yes' : 'No'}</p>
          <p><strong>USB:</strong> ${phone.specs.connectivity.usb}</p>
        </div>

        <div class="spec-block" style="background:var(--bg-secondary); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
          <h4 style="margin-bottom:12px; color:var(--primary); display:flex; align-items:center; gap:8px;">🛡️ Build & Extra</h4>
          <p><strong>Water Resistance:</strong> ${phone.specs.features.waterResistance || 'None'}</p>
          <p><strong>Fingerprint:</strong> ${phone.specs.features.fingerprint}</p>
          <p><strong>Face ID:</strong> ${phone.specs.features.faceID ? 'Yes' : 'No'}</p>
          <p><strong>Headphone Jack:</strong> ${phone.specs.features.headphoneJack ? '3.5mm Present' : 'None'}</p>
          <p><strong>Weight:</strong> ${phone.weight}</p>
          <p><strong>Colors:</strong> ${phone.colors.join(', ')}</p>
        </div>
      </div>
    `;
  }

  // Render Price History Chart
  if (phone.price.history) {
    PriceChart.render('priceHistoryCanvas', phone.price.history, phone.price.current);
  }

  // Render Specs Radar Chart
  if (document.getElementById('specsRadarCanvas')) {
    PriceChart.renderRadar('specsRadarCanvas', [phone]);
  }

  // Similar Phones in price range
  const similarContainer = document.getElementById('similarPhonesContainer');
  if (similarContainer) {
    const similar = PHONES_DATA.filter(p => p.id !== phone.id && Math.abs(p.price.current - phone.price.current) <= 300).slice(0, 4);
    similarContainer.innerHTML = similar.map(p => renderPhoneCard(p)).join('');
  }
}

// ═══════════════════════════════════════════════════════════════
// 5. COMPARE PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initComparePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const p1 = urlParams.get('p1');
  const p2 = urlParams.get('p2');
  const p3 = urlParams.get('p3');

  if (p1 || p2 || p3) {
    const ids = [p1, p2, p3].filter(Boolean);
    CompareService.set(ids);
  }

  const container = document.getElementById('compareTableContainer');
  const phones = CompareService.getPhones();
  
  if (container) {
    container.innerHTML = CompareService.renderComparisonTable(phones);
  }

  // Render Radar Chart for compared phones
  const radarCanvas = document.getElementById('compareRadarCanvas');
  if (radarCanvas && phones.length > 0) {
    PriceChart.renderRadar('compareRadarCanvas', phones);
  }

  // Share comparison button
  const shareBtn = document.getElementById('shareCompareBtn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      const link = CompareService.getShareableLink();
      navigator.clipboard.writeText(link);
      showToast('Comparison link copied to clipboard! 📋', 'success');
    };
  }

  // Email comparison button
  const emailBtn = document.getElementById('emailCompareBtn');
  if (emailBtn) {
    emailBtn.onclick = () => {
      const phones = CompareService.getPhones();
      const phoneNames = phones.map(p => p.name).join(' vs ');
      const link = CompareService.getShareableLink();
      const subject = encodeURIComponent(`Smartphone Comparison: ${phoneNames}`);
      const body = encodeURIComponent(`Hey,\n\nCheck out this smartphone comparison on SmartPick:\n${phoneNames}\n\nView comparison: ${link}\n\nEnjoy!`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };
  }

  // Print button
  const printBtn = document.getElementById('printCompareBtn');
  if (printBtn) {
    printBtn.onclick = () => {
      window.print();
    };
  }

  // Setup Add Phone Modal Search
  const modalInput = document.getElementById('modalPhoneSearchInput');
  const modalList = document.getElementById('modalPhoneList');
  if (modalInput && modalList) {
    const renderModalItems = (q = '') => {
      const matches = FilterEngine.search(q);
      const currentSelected = CompareService.get();

      modalList.innerHTML = matches.map(phone => {
        const isAdded = currentSelected.includes(phone.id);
        const fallbackSvg = getPhoneFallbackSvg(phone.name, phone.brand);
        return `
          <div class="store-row" style="margin-bottom:8px; cursor:pointer;" onclick="selectPhoneForCompare('${phone.id}')">
            <div class="store-info">
              <img src="${phone.image}" style="width:40px; height:40px; object-fit:contain;" onerror="this.onerror=null; this.src='${fallbackSvg}';" />
              <div>
                <div style="font-weight:700;">${phone.name}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${phone.brand} • ${formatPrice(phone.price.current)}</div>
              </div>
            </div>
            <button class="btn btn-sm ${isAdded ? 'btn-ghost' : 'btn-primary'}" ${isAdded ? 'disabled' : ''}>
              ${isAdded ? 'Already Added' : '+ Add'}
            </button>
          </div>
        `;
      }).join('');
    };

    modalInput.addEventListener('input', (e) => renderModalItems(e.target.value));
    renderModalItems();
  }
}

function openAddPhoneModal() {
  const modal = document.getElementById('addPhoneModal');
  if (modal) modal.classList.add('active');
}

function closeAddPhoneModal() {
  const modal = document.getElementById('addPhoneModal');
  if (modal) modal.classList.remove('active');
}

function selectPhoneForCompare(phoneId) {
  const res = CompareService.add(phoneId);
  if (!res.success && res.error) {
    showToast(res.error, 'warning');
  } else {
    showToast('Added phone to comparison', 'success');
    closeAddPhoneModal();
    initComparePage();
    updateNavBadges();
    updateFloatingCompareBar();
  }
}

// ═══════════════════════════════════════════════════════════════
// 6. WISHLIST PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initWishlistPage() {
  const grid = document.getElementById('wishlistGrid');
  const emptyState = document.getElementById('wishlistEmptyState');
  const countEl = document.getElementById('wishlistCountText');
  const savedPhones = WishlistService.getPhones();

  if (countEl) {
    countEl.textContent = `${savedPhones.length} items saved in your collection`;
  }

  if (savedPhones.length === 0) {
    if (grid) grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (grid) {
    grid.style.display = 'grid';
    grid.innerHTML = savedPhones.map(phone => renderPhoneCard(phone)).join('');
  }

  // Clear All Wishlist
  const clearBtn = document.getElementById('clearWishlistBtn');
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (confirm('Are you sure you want to clear your entire wishlist?')) {
        WishlistService.clear();
        updateNavBadges();
        initWishlistPage();
        showToast('Wishlist cleared', 'info');
      }
    };
  }

  // Share Wishlist
  const shareBtn = document.getElementById('shareWishlistBtn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      const link = WishlistService.getShareableLink();
      navigator.clipboard.writeText(link);
      showToast('Wishlist link copied to clipboard! 📋', 'success');
    };
  }
}

// ═══════════════════════════════════════════════════════════════
// 7. TOP PICKS PAGE LOGIC
// ═══════════════════════════════════════════════════════════════
function initTopPicksPage() {
  const categories = [
    { id: 'bestOverall', title: '🏆 Best Overall Smartphones', desc: 'The absolute best flagships combining unbeatable power, display, and camera prowess' },
    { id: 'bestCamera', title: '📸 Best Camera Phones', desc: 'Ranked highest for photo clarity, optical zoom, portrait sensors, and video dynamic range' },
    { id: 'bestGaming', title: '🎮 Best Gaming Phones', desc: 'Maximized refresh rates, monstrous cooling, and raw GPU performance for competitive mobile gaming' },
    { id: 'bestBudget', title: '💰 Best Budget Champions (Under $400)', desc: 'Unbelievable value-for-money without sacrificing everyday speed, battery, or screen quality' },
    { id: 'bestBattery', title: '🔋 Best Battery Endurance', desc: '5000mAh+ powerhouses with blistering fast charging speeds for multi-day usage' },
    { id: 'bestBusiness', title: '💼 Best Productivity & Business', desc: 'Foldable multitasking, stylus support, enterprise security, and blazing productivity tools' },
    { id: 'bestIphones', title: '🍎 Best Apple iPhones Ranked', desc: 'Every iPhone ranked by hardware capabilities, value, and ecosystem features' },
    { id: 'bestAndroid', title: '🤖 Best Android Flagships', desc: 'Top tier Android innovators with open versatility, custom chips, and superior hardware' },
    { id: 'latestReleased', title: '🆕 Latest Released Phones', desc: 'The newest flagship devices introduced with latest gen chipsets and optics' },
    { id: 'editorsChoice', title: '⭐ Editor\'s Choice Awards', desc: 'Hand-picked awards by our hardware review team' }
  ];

  const mainContainer = document.getElementById('topPicksCategoriesContainer');
  if (!mainContainer) return;

  mainContainer.innerHTML = categories.map(cat => {
    const phoneIds = TOP_PICKS[cat.id] || [];
    const phones = phoneIds.map(id => PHONES_DATA.find(p => p.id === id)).filter(Boolean);

    return `
      <section class="section" style="padding: 36px 0; border-bottom: 1px solid var(--border-color);">
        <div class="section-title-wrap">
          <div>
            <h2>${cat.title}</h2>
            <p class="section-subtitle">${cat.desc}</p>
          </div>
          <a href="phones.html" class="btn btn-outline btn-sm">View All in Catalog →</a>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:20px;">
          ${phones.map((phone, idx) => renderPhoneCard(phone, { rank: idx + 1 })).join('')}
        </div>
      </section>
    `;
  }).join('');
}
