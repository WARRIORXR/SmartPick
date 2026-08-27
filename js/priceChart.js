/**
 * SmartPick - Price History & Specs Radar Chart Visualization Engine
 * Renders smooth high-DPI price trend line charts & multi-attribute radar charts with Retina resolution support
 */

const PriceChart = {
  // ── Price History Line Chart ────────────────────────────────
  render(canvasId, priceHistory = [], currentPrice = 0) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !priceHistory || priceHistory.length === 0) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set actual render resolution for retina displays
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 30, right: 30, bottom: 40, left: 65 };

    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const prices = priceHistory.map(item => item.price);
    const minPrice = Math.floor(Math.min(...prices) * 0.95);
    const maxPrice = Math.ceil(Math.max(...prices) * 1.05);
    const priceRange = maxPrice - minPrice || 1;

    const getX = (index) => padding.left + (index / (priceHistory.length - 1)) * chartWidth;
    const getY = (price) => padding.top + chartHeight - ((price - minPrice) / priceRange) * chartHeight;

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const primaryColor = isDark ? '#6c63ff' : '#584df2';
    const secondaryColor = isDark ? '#00d4ff' : '#00b4d8';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
    const textColor = isDark ? '#a0a0b0' : '#6e6e82';

    // ── Draw Grid Lines & Y-Axis Labels ─────────────────────
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = gridColor;
    ctx.fillStyle = textColor;
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';

    const ySteps = 4;
    for (let i = 0; i <= ySteps; i++) {
      const val = Math.round(minPrice + (i / ySteps) * priceRange);
      const y = padding.top + chartHeight - (i / ySteps) * chartHeight;

      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      ctx.fillText(formatPrice(val), padding.left - 10, y + 4);
    }

    // ── Draw X-Axis Labels (Months) ─────────────────────────
    ctx.textAlign = 'center';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    priceHistory.forEach((item, idx) => {
      const x = getX(idx);
      ctx.fillText(item.month, x, height - 12);
    });

    // ── Draw Area Gradient Under Curve ──────────────────────
    const areaGradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    areaGradient.addColorStop(0, isDark ? 'rgba(108, 99, 255, 0.35)' : 'rgba(108, 99, 255, 0.22)');
    areaGradient.addColorStop(1, 'rgba(108, 99, 255, 0.0)');

    ctx.beginPath();
    ctx.moveTo(getX(0), height - padding.bottom);
    priceHistory.forEach((item, idx) => {
      const x = getX(idx);
      const y = getY(item.price);
      if (idx === 0) {
        ctx.lineTo(x, y);
      } else {
        const prevX = getX(idx - 1);
        const prevY = getY(priceHistory[idx - 1].price);
        const cpX1 = prevX + (x - prevX) / 2;
        const cpX2 = prevX + (x - prevX) / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    });
    ctx.lineTo(getX(priceHistory.length - 1), height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = areaGradient;
    ctx.fill();

    // ── Draw Line ───────────────────────────────────────────
    const lineGradient = ctx.createLinearGradient(padding.left, 0, width - padding.right, 0);
    lineGradient.addColorStop(0, primaryColor);
    lineGradient.addColorStop(1, secondaryColor);

    ctx.beginPath();
    priceHistory.forEach((item, idx) => {
      const x = getX(idx);
      const y = getY(item.price);
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = getX(idx - 1);
        const prevY = getY(priceHistory[idx - 1].price);
        const cpX1 = prevX + (x - prevX) / 2;
        const cpX2 = prevX + (x - prevX) / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    });
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.stroke();

    // ── Draw Data Points & Lowest Badge ─────────────────────
    const lowestPrice = Math.min(...prices);
    const lowestIdx = prices.indexOf(lowestPrice);

    priceHistory.forEach((item, idx) => {
      const x = getX(idx);
      const y = getY(item.price);

      ctx.beginPath();
      ctx.arc(x, y, idx === lowestIdx ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = idx === lowestIdx ? '#00ff88' : '#ffffff';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = primaryColor;
      ctx.stroke();

      if (idx === lowestIdx) {
        // Highlight lowest price tag
        ctx.fillStyle = '#00ff88';
        ctx.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`All-time Low: ${formatPrice(lowestPrice)}`, x, y - 14);
      }
    });

    // ── Hover Tooltip Event Setup ───────────────────────────
    let tooltipEl = document.getElementById(canvasId + '_tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = canvasId + '_tooltip';
      tooltipEl.className = 'chart-tooltip';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.display = 'none';
      tooltipEl.style.padding = '8px 12px';
      tooltipEl.style.background = 'var(--bg-card)';
      tooltipEl.style.border = '1px solid var(--border-color)';
      tooltipEl.style.borderRadius = 'var(--radius-xs)';
      tooltipEl.style.color = 'var(--text-primary)';
      tooltipEl.style.fontFamily = 'var(--font-mono)';
      tooltipEl.style.fontSize = '0.85rem';
      tooltipEl.style.boxShadow = 'var(--shadow-lg)';
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.zIndex = '100';
      canvas.parentElement.style.position = 'relative';
      canvas.parentElement.appendChild(tooltipEl);
    }

    canvas.onmousemove = (e) => {
      const cRect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - cRect.left;
      const mouseY = e.clientY - cRect.top;

      let nearestIdx = -1;
      let minDistance = Infinity;

      priceHistory.forEach((item, idx) => {
        const x = getX(idx);
        const dist = Math.abs(mouseX - x);
        if (dist < minDistance && dist < 45) {
          minDistance = dist;
          nearestIdx = idx;
        }
      });

      if (nearestIdx !== -1) {
        const item = priceHistory[nearestIdx];
        const x = getX(nearestIdx);
        const y = getY(item.price);

        tooltipEl.style.display = 'block';
        tooltipEl.style.left = `${x}px`;
        tooltipEl.style.top = `${Math.max(10, y - 48)}px`;
        tooltipEl.style.transform = 'translateX(-50%)';
        tooltipEl.innerHTML = `<strong>${item.month}</strong>: <span style="color:var(--primary); font-weight:700;">${formatPrice(item.price)}</span>`;
      } else {
        tooltipEl.style.display = 'none';
      }
    };

    canvas.onmouseleave = () => {
      tooltipEl.style.display = 'none';
    };
  },

  // ── Multi-Attribute Radar Chart (Ratings & Performance) ──────
  renderRadar(canvasId, phones = []) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !phones || phones.length === 0) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 45;

    const attributes = [
      { key: 'overall', label: 'Overall' },
      { key: 'camera', label: 'Camera' },
      { key: 'performance', label: 'Speed' },
      { key: 'battery', label: 'Battery' },
      { key: 'display', label: 'Display' },
      { key: 'value', label: 'Value' }
    ];
    const numAxes = attributes.length;
    const angleStep = (Math.PI * 2) / numAxes;

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
    const textColor = isDark ? '#a0a0b0' : '#4a4a5a';

    ctx.clearRect(0, 0, width, height);

    // ── Draw Circular/Polygon Concentric Grid Web ────────────
    const levels = 5;
    for (let level = 1; level <= levels; level++) {
      const r = (radius / levels) * level;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ── Draw Axes & Labels ──────────────────────────────────
    ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = gridColor;
      ctx.stroke();

      const labelRadius = radius + 22;
      const lx = centerX + Math.cos(angle) * labelRadius;
      const ly = centerY + Math.sin(angle) * labelRadius;
      ctx.fillText(attributes[i].label, lx, ly);
    }

    // ── Draw Phone Polygons ─────────────────────────────────
    const colorThemes = [
      { stroke: '#6c63ff', fill: 'rgba(108, 99, 255, 0.25)' },
      { stroke: '#00d4ff', fill: 'rgba(0, 212, 255, 0.25)' },
      { stroke: '#00ff88', fill: 'rgba(0, 255, 136, 0.25)' }
    ];

    phones.forEach((phone, pIdx) => {
      const theme = colorThemes[pIdx % colorThemes.length];
      const ratings = phone.ratings || { overall: 4, camera: 4, performance: 4, battery: 4, display: 4, value: 4 };

      ctx.beginPath();
      attributes.forEach((attr, aIdx) => {
        const val = ratings[attr.key] || 4.0;
        const r = (val / 5.0) * radius;
        const angle = aIdx * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        if (aIdx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();

      ctx.fillStyle = theme.fill;
      ctx.fill();
      ctx.strokeStyle = theme.stroke;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Points
      attributes.forEach((attr, aIdx) => {
        const val = ratings[attr.key] || 4.0;
        const r = (val / 5.0) * radius;
        const angle = aIdx * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = theme.stroke;
        ctx.fill();
      });
    });
  }
};
