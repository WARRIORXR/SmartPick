/**
 * SmartPick - Side-by-Side Smartphone Comparator Engine
 * Supports up to 3 phones, calculates spec winners, overall scores, and best-value ratios
 */

const CompareService = {
  STORAGE_KEY: 'smartpick_compare_ids',

  get() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  set(ids) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids.slice(0, 3)));
  },

  has(phoneId) {
    return this.get().includes(phoneId);
  },

  add(phoneId) {
    const list = this.get();
    if (list.includes(phoneId)) return { success: false, reason: 'already_added' };
    if (list.length >= 3) return { success: false, reason: 'limit_reached', error: 'You can compare maximum 3 smartphones at a time.' };
    list.push(phoneId);
    this.set(list);
    return { success: true, added: true };
  },

  remove(phoneId) {
    let list = this.get();
    list = list.filter(id => id !== phoneId);
    this.set(list);
    return { success: true, removed: true };
  },

  toggle(phoneId) {
    if (this.has(phoneId)) {
      this.remove(phoneId);
      return { success: true, added: false };
    } else {
      return this.add(phoneId);
    }
  },

  clear() {
    this.set([]);
  },

  getPhones() {
    const ids = this.get();
    return ids.map(id => PHONES_DATA.find(p => p.id === id)).filter(Boolean);
  },

  // ── Overall Score Calculator (0 - 100) ──────────────────────
  calculateScore(phone) {
    const r = phone.ratings;
    const score = (r.overall * 0.35 + r.camera * 0.2 + r.performance * 0.2 + r.battery * 0.15 + r.display * 0.1) * 20;
    return Math.min(99, Math.round(score));
  },

  // ── Best Value Ratio (Score per Dollar) ─────────────────────
  calculateValueRatio(phone) {
    const score = this.calculateScore(phone);
    return (score / phone.price.current) * 100;
  },

  // ── Spec Winner Evaluator ───────────────────────────────────
  evaluateRow(phones, featureKey) {
    if (phones.length < 2) return { bestIdx: -1, worstIdx: -1 };

    let values = [];

    switch (featureKey) {
      case 'price':
        // Lower is better
        values = phones.map(p => p.price.current);
        const minPrice = Math.min(...values);
        const maxPrice = Math.max(...values);
        return {
          bestIdx: values.indexOf(minPrice),
          worstIdx: minPrice !== maxPrice ? values.indexOf(maxPrice) : -1
        };

      case 'ram':
        values = phones.map(p => Math.max(...p.specs.performance.ram));
        const maxRam = Math.max(...values);
        const minRam = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxRam),
          worstIdx: maxRam !== minRam ? values.indexOf(minRam) : -1
        };

      case 'storage':
        values = phones.map(p => Math.max(...p.specs.performance.storage));
        const maxStorage = Math.max(...values);
        const minStorage = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxStorage),
          worstIdx: maxStorage !== minStorage ? values.indexOf(minStorage) : -1
        };

      case 'battery':
        values = phones.map(p => p.specs.battery.capacity);
        const maxBat = Math.max(...values);
        const minBat = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxBat),
          worstIdx: maxBat !== minBat ? values.indexOf(minBat) : -1
        };

      case 'charging':
        values = phones.map(p => p.specs.battery.wiredCharging);
        const maxCharge = Math.max(...values);
        const minCharge = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxCharge),
          worstIdx: maxCharge !== minCharge ? values.indexOf(minCharge) : -1
        };

      case 'refreshRate':
        values = phones.map(p => p.specs.display.refreshRate);
        const maxRefresh = Math.max(...values);
        const minRefresh = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxRefresh),
          worstIdx: maxRefresh !== minRefresh ? values.indexOf(minRefresh) : -1
        };

      case 'rating':
        values = phones.map(p => p.ratings.overall);
        const maxRating = Math.max(...values);
        const minRating = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxRating),
          worstIdx: maxRating !== minRating ? values.indexOf(minRating) : -1
        };

      case 'camera':
        values = phones.map(p => parseInt(p.specs.camera.main, 10) || 0);
        const maxCam = Math.max(...values);
        const minCam = Math.min(...values);
        return {
          bestIdx: values.indexOf(maxCam),
          worstIdx: maxCam !== minCam ? values.indexOf(minCam) : -1
        };

      default:
        return { bestIdx: -1, worstIdx: -1 };
    }
  },

  // ── Render Full Comparison Table HTML ───────────────────────
  renderComparisonTable(phones) {
    if (!phones || phones.length === 0) {
      return `
        <div style="text-align:center; padding:60px 20px;">
          <div style="font-size:3.5rem; margin-bottom:16px;">⚖️</div>
          <h2>No Phones Selected for Comparison</h2>
          <p style="margin-top:8px; margin-bottom:24px;">Select up to 3 smartphones to see a detailed side-by-side spec showdown.</p>
          <a href="phones.html" class="btn btn-primary">Browse Phones to Compare</a>
        </div>
      `;
    }

    // Determine Overall Winner & Best Value
    let winnerIdx = -1;
    let bestScore = -1;
    let bestValueIdx = -1;
    let highestValueRatio = -1;

    phones.forEach((phone, idx) => {
      const score = this.calculateScore(phone);
      if (score > bestScore) {
        bestScore = score;
        winnerIdx = idx;
      }

      const valueRatio = this.calculateValueRatio(phone);
      if (valueRatio > highestValueRatio) {
        highestValueRatio = valueRatio;
        bestValueIdx = idx;
      }
    });

    // Row Evaluator Helper
    const getCellClass = (rowKey, phoneIdx) => {
      const evalRes = this.evaluateRow(phones, rowKey);
      if (evalRes.bestIdx === phoneIdx) return 'winner-cell';
      if (evalRes.worstIdx === phoneIdx) return 'weaker-cell';
      return '';
    };

    return `
      <div class="compare-table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>
              <th class="spec-label-col">Overview</th>
              ${phones.map((phone, idx) => `
                <th style="min-width:240px; text-align:center;">
                  <div style="position:relative; padding-top:10px;">
                    <button class="btn-ghost btn-sm btn-print-hide" 
                            onclick="removePhoneFromCompare('${phone.id}')" 
                            title="Remove Phone" 
                            style="position:absolute; top:0; right:0; cursor:pointer; font-size:1.1rem;">
                      ✕
                    </button>
                    ${idx === winnerIdx ? `<span class="badge badge-winner" style="margin-bottom:8px;">🏆 Overall Winner</span><br/>` : ''}
                    ${idx === bestValueIdx && idx !== winnerIdx ? `<span class="badge badge-value" style="margin-bottom:8px;">💎 Best Value</span><br/>` : ''}
                    <img src="${phone.image}" alt="${phone.name}" style="height:140px; margin:0 auto 12px; object-fit:contain;" />
                    <div style="font-size:1.15rem; font-weight:800; color:var(--text-primary);">${phone.name}</div>
                    <div style="font-size:0.85rem; color:var(--text-muted);">${phone.brand}</div>
                    <div style="margin-top:8px;">
                      <span class="match-score-badge" style="font-size:0.8rem; padding:4px 10px;">Score: ${this.calculateScore(phone)}/100</span>
                    </div>
                  </div>
                </th>
              `).join('')}
              ${phones.length < 3 ? `
                <th style="text-align:center; min-width:220px; background:var(--bg-secondary); border-style:dashed;">
                  <div style="padding:40px 10px;">
                    <div style="font-size:2rem; margin-bottom:8px; opacity:0.6;">➕</div>
                    <p style="font-size:0.9rem; margin-bottom:12px;">Add another phone to compare</p>
                    <button class="btn btn-secondary btn-sm" onclick="openAddPhoneModal()">+ Add Phone</button>
                  </div>
                </th>
              ` : ''}
            </tr>
          </thead>
          <tbody>
            <!-- Price -->
            <tr>
              <td class="spec-label-col">💰 Best Price</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('price', idx)}" style="text-align:center; font-family:var(--font-heading); font-size:1.3rem; font-weight:800;">
                  ${formatPrice(phone.price.current)}
                  <div style="font-size:0.75rem; font-weight:500; color:var(--text-muted);">Save: ${formatPrice(phone.price.original - phone.price.current)}</div>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Rating -->
            <tr>
              <td class="spec-label-col">⭐ User Rating</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('rating', idx)}" style="text-align:center;">
                  ${renderStars(phone.ratings.overall)}
                  <div style="font-weight:700;">${phone.ratings.overall} / 5.0</div>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Display -->
            <tr>
              <td class="spec-label-col">📱 Display</td>
              ${phones.map(phone => `
                <td>
                  <strong>${phone.specs.display.size}" ${phone.specs.display.type}</strong><br/>
                  <span style="font-size:0.85rem; color:var(--text-secondary);">${phone.specs.display.resolution} • ${phone.specs.display.refreshRate}Hz • ${phone.specs.display.brightness} nits</span>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Processor / Chipset -->
            <tr>
              <td class="spec-label-col">⚡ Processor</td>
              ${phones.map(phone => `
                <td>
                  <strong>${phone.specs.performance.chipset}</strong><br/>
                  <span style="font-size:0.85rem; color:var(--text-secondary);">${phone.specs.performance.cpu} • ${phone.specs.performance.gpu}</span>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- RAM Options -->
            <tr>
              <td class="spec-label-col">🧠 RAM</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('ram', idx)}">
                  ${phone.specs.performance.ram.map(r => `${r}GB`).join(' / ')}
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Storage Options -->
            <tr>
              <td class="spec-label-col">💾 Internal Storage</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('storage', idx)}">
                  ${phone.specs.performance.storage.map(s => s >= 1024 ? '1TB' : `${s}GB`).join(' / ')}
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Camera System -->
            <tr>
              <td class="spec-label-col">📷 Rear Cameras</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('camera', idx)}">
                  <strong>Main:</strong> ${phone.specs.camera.main}<br/>
                  <strong>Ultra-wide:</strong> ${phone.specs.camera.ultrawide}<br/>
                  <strong>Telephoto:</strong> ${phone.specs.camera.telephoto}
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Selfie Camera -->
            <tr>
              <td class="spec-label-col">🤳 Selfie Camera</td>
              ${phones.map(phone => `
                <td>${phone.specs.camera.front}</td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Video Recording -->
            <tr>
              <td class="spec-label-col">🎥 Video Quality</td>
              ${phones.map(phone => `
                <td>${phone.specs.camera.video}</td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Battery Capacity -->
            <tr>
              <td class="spec-label-col">🔋 Battery Capacity</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('battery', idx)}">
                  <strong>${phone.specs.battery.capacity} mAh</strong>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Charging Speeds -->
            <tr>
              <td class="spec-label-col">⚡ Fast Charging</td>
              ${phones.map((phone, idx) => `
                <td class="${getCellClass('charging', idx)}">
                  Wired: <strong>${phone.specs.battery.wiredCharging}W</strong><br/>
                  Wireless: ${phone.specs.battery.wirelessCharging ? `${phone.specs.battery.wirelessCharging}W` : '❌'}<br/>
                  Reverse: ${phone.specs.battery.reverseWireless ? '✅ Yes' : '❌ No'}
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- 5G & Connectivity -->
            <tr>
              <td class="spec-label-col">📶 5G & WiFi</td>
              ${phones.map(phone => `
                <td>
                  5G: ${phone.specs.connectivity.fiveG ? '✅ Yes' : '❌'}<br/>
                  WiFi: ${phone.specs.connectivity.wifi}<br/>
                  Bluetooth: ${phone.specs.connectivity.bluetooth}
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Water Resistance -->
            <tr>
              <td class="spec-label-col">💧 Water Resistance</td>
              ${phones.map(phone => `
                <td>${phone.specs.features.waterResistance || '❌ None'}</td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Operating System -->
            <tr>
              <td class="spec-label-col">🤖 OS & Release</td>
              ${phones.map(phone => `
                <td>${phone.os} (${phone.releaseYear})</td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>

            <!-- Action Buttons -->
            <tr class="btn-print-hide">
              <td class="spec-label-col">Actions</td>
              ${phones.map(phone => `
                <td style="text-align:center;">
                  <a href="phone-detail.html?id=${phone.id}" class="btn btn-primary btn-sm btn-block" style="margin-bottom:8px;">View Full Specs</a>
                  <a href="https://www.amazon.com/s?k=${encodeURIComponent(phone.name)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm btn-block">Buy at Best Price 🛒</a>
                </td>
              `).join('')}
              ${phones.length < 3 ? '<td></td>' : ''}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  },

  // ── Share Comparison Link ───────────────────────────────────
  getShareableLink() {
    const ids = this.get();
    const url = new URL(window.location.origin + window.location.pathname);
    ids.forEach((id, i) => url.searchParams.set(`p${i+1}`, id));
    return url.toString();
  }
};

function removePhoneFromCompare(phoneId) {
  CompareService.remove(phoneId);
  updateNavBadges();
  updateFloatingCompareBar();
  const currentPhones = CompareService.getPhones();
  const container = document.getElementById('compareTableContainer');
  if (container) {
    container.innerHTML = CompareService.renderComparisonTable(currentPhones);
  }
  showToast('Removed phone from comparison', 'info');
}
