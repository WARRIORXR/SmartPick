/**
 * SmartPick - Smart Requirement Finder & Recommendation Wizard
 * 6-step interactive quiz with dynamic weighted match calculation algorithm
 */

const QuizEngine = {
  currentStep: 1,
  totalSteps: 6,
  answers: {
    budget: null,
    useCase: null,
    brand: null,
    os: null,
    ram: null,
    storage: null,
    screenSize: null,
    cameraPriority: null,
    batteryPriority: null,
    features: []
  },

  // ── Calculate Match Score (0 - 100%) ────────────────────────
  calculateMatchScore(phone, answers) {
    let score = 0;
    let totalWeight = 0;

    // 1. Budget Match (Weight: 25)
    totalWeight += 25;
    if (answers.budget) {
      const price = phone.price.current;
      const { min, max } = answers.budget;
      if (price >= min && price <= max) {
        score += 25;
      } else {
        // Partial credit if close
        const diff = Math.min(Math.abs(price - min), Math.abs(price - max));
        if (diff <= 100) score += 15;
        else if (diff <= 200) score += 8;
      }
    } else {
      score += 20; // Default reasonable score if skipped
    }

    // 2. Primary Use Case Match (Weight: 20)
    totalWeight += 20;
    if (answers.useCase) {
      switch (answers.useCase) {
        case 'photography':
          score += (phone.ratings.camera / 5.0) * 20;
          break;
        case 'gaming':
          score += (phone.ratings.performance / 5.0) * 20;
          if (phone.specs.display.refreshRate >= 120) score += 2;
          break;
        case 'business':
          score += ((phone.ratings.performance + phone.ratings.battery) / 10.0) * 20;
          break;
        case 'social':
          score += ((phone.ratings.camera + phone.ratings.display) / 10.0) * 20;
          break;
        case 'battery':
          score += (phone.ratings.battery / 5.0) * 20;
          if (phone.specs.battery.capacity >= 5000) score += 2;
          break;
        case 'basic':
          score += (phone.price.current < 450 ? 20 : 10);
          break;
        case 'music':
          score += (phone.specs.features.headphoneJack ? 20 : 12);
          break;
        default:
          score += 15;
      }
    } else {
      score += 15;
    }

    // 3. Brand Match (Weight: 15)
    totalWeight += 15;
    if (answers.brand && answers.brand !== 'any') {
      if (phone.brand.toLowerCase() === answers.brand.toLowerCase()) {
        score += 15;
      } else {
        score += 0;
      }
    } else {
      score += 15; // No preference gets full points
    }

    // 4. Operating System Match (Weight: 15)
    totalWeight += 15;
    if (answers.os && answers.os !== 'any') {
      if (phone.os.toLowerCase().includes(answers.os.toLowerCase())) {
        score += 15;
      } else {
        score += 0;
      }
    } else {
      score += 15;
    }

    // 5. Specs Match (Weight: 15)
    totalWeight += 15;
    let specPoints = 0;
    let specCount = 0;

    if (answers.ram) {
      specCount++;
      const maxRam = Math.max(...phone.specs.performance.ram);
      if (maxRam >= answers.ram) specPoints += 1;
    }

    if (answers.storage) {
      specCount++;
      const maxStorage = Math.max(...phone.specs.performance.storage);
      if (maxStorage >= answers.storage) specPoints += 1;
    }

    if (answers.screenSize) {
      specCount++;
      const size = parseFloat(phone.specs.display.size);
      if (answers.screenSize === 'small' && size < 6.2) specPoints += 1;
      else if (answers.screenSize === 'medium' && size >= 6.2 && size <= 6.6) specPoints += 1;
      else if (answers.screenSize === 'large' && size > 6.6 && size <= 7.0) specPoints += 1;
      else if (answers.screenSize === 'xlarge' && size > 7.0) specPoints += 1;
    }

    if (answers.batteryPriority) {
      specCount++;
      const cap = phone.specs.battery.capacity;
      if (answers.batteryPriority === 'basic' && cap >= 3000) specPoints += 1;
      else if (answers.batteryPriority === 'good' && cap >= 4300) specPoints += 1;
      else if (answers.batteryPriority === 'beast' && cap >= 5000) specPoints += 1;
    }

    if (specCount > 0) {
      score += (specPoints / specCount) * 15;
    } else {
      score += 12;
    }

    // 6. Special Features Match (Weight: 10)
    totalWeight += 10;
    if (answers.features && answers.features.length > 0) {
      let matchedFeatures = 0;
      answers.features.forEach(f => {
        if (f === '5g' && phone.specs.connectivity.fiveG) matchedFeatures++;
        if (f === 'wirelessCharging' && phone.specs.battery.wirelessCharging) matchedFeatures++;
        if (f === 'fastCharging' && phone.specs.battery.wiredCharging >= 65) matchedFeatures++;
        if (f === 'waterResistance' && phone.specs.features.waterResistance.includes('IP68')) matchedFeatures++;
        if (f === 'foldable' && phone.specs.features.foldable) matchedFeatures++;
        if (f === 'highRefreshRate' && phone.specs.display.refreshRate >= 120) matchedFeatures++;
        if (f === 'stylus' && phone.specs.features.stylus) matchedFeatures++;
        if (f === 'headphoneJack' && phone.specs.features.headphoneJack) matchedFeatures++;
        if (f === 'microSD' && phone.specs.features.microSD) matchedFeatures++;
        if (f === 'nfc' && phone.specs.connectivity.nfc) matchedFeatures++;
      });
      score += (matchedFeatures / answers.features.length) * 10;
    } else {
      score += 10;
    }

    // Normalize to 100 max
    const finalScore = Math.min(100, Math.round((score / totalWeight) * 100));
    return Math.max(25, finalScore);
  },

  // ── Find and Rank Phones ────────────────────────────────────
  findPhones(answers = this.answers) {
    const scoredList = PHONES_DATA.map(phone => {
      const matchScore = this.calculateMatchScore(phone, answers);
      return {
        ...phone,
        matchScore
      };
    });

    return scoredList.sort((a, b) => b.matchScore - a.matchScore);
  },

  // ── Confetti Celebration Effect ─────────────────────────────
  launchConfetti() {
    const colors = ['#6c63ff', '#00d4ff', '#00ff88', '#ffbb00', '#ff4757', '#9d4edd'];
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < 75; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${Math.random() * 8 + 6}px`;
      confetti.style.height = `${Math.random() * 14 + 8}px`;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.opacity = '1';
      
      const duration = Math.random() * 2 + 1.5;
      confetti.style.transition = `all ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`;
      container.appendChild(confetti);

      setTimeout(() => {
        confetti.style.top = '100vh';
        confetti.style.transform = `translateX(${(Math.random() - 0.5) * 300}px) rotate(${Math.random() * 720}deg)`;
        confetti.style.opacity = '0';
      }, 50);
    }

    setTimeout(() => container.remove(), 4000);
  }
};
