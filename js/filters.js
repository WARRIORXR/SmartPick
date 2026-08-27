/**
 * SmartPick - Search, Autocomplete & Multi-Criteria Filtering Engine
 */

const FilterEngine = {
  // ── Fuzzy / Multi-field Search ──────────────────────────────
  search(query, data = PHONES_DATA) {
    if (!query || !query.trim()) return data;
    const cleanQ = query.trim().toLowerCase();
    const terms = cleanQ.split(/\s+/);

    return data.filter(phone => {
      const searchTarget = [
        phone.name,
        phone.brand,
        phone.os,
        phone.specs.performance.chipset,
        ...(phone.tags || []),
        phone.specs.display.type
      ].join(' ').toLowerCase();

      return terms.every(term => searchTarget.includes(term));
    });
  },

  // ── Main Multi-Criteria Filter Function ─────────────────────
  filter(criteria = {}, data = PHONES_DATA) {
    return data.filter(phone => {
      // 1. Text Query
      if (criteria.query && criteria.query.trim()) {
        const matches = this.search(criteria.query, [phone]);
        if (matches.length === 0) return false;
      }

      // 2. Price Range [min, max]
      if (criteria.minPrice !== undefined && phone.price.current < Number(criteria.minPrice)) return false;
      if (criteria.maxPrice !== undefined && phone.price.current > Number(criteria.maxPrice)) return false;

      // 3. Brands (array of selected brand names)
      if (criteria.brands && criteria.brands.length > 0) {
        if (!criteria.brands.includes(phone.brand)) return false;
      }

      // 4. Operating System (iOS / Android)
      if (criteria.os && criteria.os !== 'all') {
        if (!phone.os.toLowerCase().includes(criteria.os.toLowerCase())) return false;
      }

      // 5. RAM (minimum RAM in GB)
      if (criteria.minRam !== undefined && criteria.minRam > 0) {
        const maxPhoneRam = Math.max(...phone.specs.performance.ram);
        if (maxPhoneRam < Number(criteria.minRam)) return false;
      }

      // 6. Storage (minimum Storage in GB)
      if (criteria.minStorage !== undefined && criteria.minStorage > 0) {
        const maxPhoneStorage = Math.max(...phone.specs.performance.storage);
        if (maxPhoneStorage < Number(criteria.minStorage)) return false;
      }

      // 7. Screen Size Range [minSize, maxSize]
      const screenSize = parseFloat(phone.specs.display.size);
      if (criteria.minScreenSize !== undefined && screenSize < parseFloat(criteria.minScreenSize)) return false;
      if (criteria.maxScreenSize !== undefined && screenSize > parseFloat(criteria.maxScreenSize)) return false;

      // 8. Display Type (OLED, AMOLED, LCD, LTPO)
      if (criteria.displayTypes && criteria.displayTypes.length > 0) {
        const matchesType = criteria.displayTypes.some(type => 
          phone.specs.display.type.toLowerCase().includes(type.toLowerCase())
        );
        if (!matchesType) return false;
      }

      // 9. Camera Megapixels (Minimum Main Camera MP)
      if (criteria.minCameraMp !== undefined && criteria.minCameraMp > 0) {
        const mainMp = parseInt(phone.specs.camera.main, 10) || 0;
        if (mainMp < Number(criteria.minCameraMp)) return false;
      }

      // 10. Battery (Minimum Capacity)
      if (criteria.minBattery !== undefined && criteria.minBattery > 0) {
        if (phone.specs.battery.capacity < Number(criteria.minBattery)) return false;
      }

      // 11. Refresh Rate (Minimum Refresh Rate)
      if (criteria.minRefreshRate !== undefined && criteria.minRefreshRate > 0) {
        if (phone.specs.display.refreshRate < Number(criteria.minRefreshRate)) return false;
      }

      // 12. Special Features (Checkboxes)
      if (criteria.features && criteria.features.length > 0) {
        for (const feat of criteria.features) {
          switch (feat) {
            case '5g':
              if (!phone.specs.connectivity.fiveG) return false;
              break;
            case 'wirelessCharging':
              if (!phone.specs.battery.wirelessCharging) return false;
              break;
            case 'fastCharging':
              if (phone.specs.battery.wiredCharging < 45) return false;
              break;
            case 'ip68':
              if (!phone.specs.features.waterResistance.includes('IP68')) return false;
              break;
            case 'foldable':
              if (!phone.specs.features.foldable) return false;
              break;
            case 'stylus':
              if (!phone.specs.features.stylus) return false;
              break;
            case 'headphoneJack':
              if (!phone.specs.features.headphoneJack) return false;
              break;
            case 'microSD':
              if (!phone.specs.features.microSD) return false;
              break;
            case 'nfc':
              if (!phone.specs.connectivity.nfc) return false;
              break;
          }
        }
      }

      return true;
    });
  },

  // ── Sort Options ────────────────────────────────────────────
  sort(phones, sortBy = 'popular') {
    const list = [...phones];
    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price.current - b.price.current);
      case 'price-desc':
        return list.sort((a, b) => b.price.current - a.price.current);
      case 'rating-desc':
        return list.sort((a, b) => b.ratings.overall - a.ratings.overall);
      case 'newest':
        return list.sort((a, b) => b.releaseYear - a.releaseYear);
      case 'popular':
        return list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || (b.ratings.overall - a.ratings.overall));
      case 'value':
        // Value = (Overall Rating * 250) / Price
        return list.sort((a, b) => {
          const valA = (a.ratings.overall * 250) / a.price.current;
          const valB = (b.ratings.overall * 250) / b.price.current;
          return valB - valA;
        });
      default:
        return list;
    }
  },

  // ── Setup Live Autocomplete ─────────────────────────────────
  setupAutocomplete(inputElement, dropdownElement) {
    if (!inputElement || !dropdownElement) return;

    inputElement.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (q.length < 1) {
        dropdownElement.classList.remove('active');
        dropdownElement.innerHTML = '';
        return;
      }

      const results = this.search(q).slice(0, 6);
      if (results.length === 0) {
        dropdownElement.innerHTML = `
          <div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.9rem;">
            No smartphones found matching "<strong>${q}</strong>"
          </div>
        `;
        dropdownElement.classList.add('active');
        return;
      }

      dropdownElement.innerHTML = results.map(phone => `
        <div class="autocomplete-item" onclick="window.location.href='phone-detail.html?id=${phone.id}'">
          <img src="${phone.image}" alt="${phone.name}" />
          <div class="autocomplete-info">
            <div class="autocomplete-title">${phone.name}</div>
            <div class="autocomplete-meta">${phone.brand} • ${phone.specs.display.size}" ${phone.specs.display.type} • ${phone.specs.performance.chipset}</div>
          </div>
          <div class="autocomplete-price">${formatPrice(phone.price.current)}</div>
        </div>
      `).join('');

      dropdownElement.classList.add('active');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!inputElement.contains(e.target) && !dropdownElement.contains(e.target)) {
        dropdownElement.classList.remove('active');
      }
    });

    // Submit on Enter
    inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = inputElement.value.trim();
        if (q) {
          window.location.href = `phones.html?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }
};
