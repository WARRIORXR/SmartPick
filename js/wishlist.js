/**
 * SmartPick - Wishlist Service
 * Handles localStorage persistence, adding, removing, and sharing wishlist
 */

const WishlistService = {
  STORAGE_KEY: 'smartpick_wishlist',

  get() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  set(list) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  },

  has(phoneId) {
    const list = this.get();
    return list.includes(phoneId);
  },

  add(phoneId) {
    const list = this.get();
    if (!list.includes(phoneId)) {
      list.push(phoneId);
      this.set(list);
      return true;
    }
    return false;
  },

  remove(phoneId) {
    let list = this.get();
    const initLen = list.length;
    list = list.filter(id => id !== phoneId);
    this.set(list);
    return list.length < initLen;
  },

  toggle(phoneId) {
    if (this.has(phoneId)) {
      this.remove(phoneId);
      return false;
    } else {
      this.add(phoneId);
      return true;
    }
  },

  clear() {
    this.set([]);
  },

  getPhones() {
    const ids = this.get();
    return PHONES_DATA.filter(p => ids.includes(p.id));
  },

  getShareableLink() {
    const ids = this.get();
    if (ids.length === 0) return window.location.href;
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('saved', ids.join(','));
    return url.toString();
  },

  loadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const saved = params.get('saved');
    if (saved) {
      const importedIds = saved.split(',').filter(id => PHONES_DATA.some(p => p.id === id));
      if (importedIds.length > 0) {
        const current = this.get();
        const merged = Array.from(new Set([...current, ...importedIds]));
        this.set(merged);
        return importedIds.length;
      }
    }
    return 0;
  }
};
