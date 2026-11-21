'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'campusfinder-wishlist';

export function WishlistProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setSavedIds(parsed);
      }
    } catch (error) {
      console.error('Could not read the saved-college list.', error);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds, ready]);

  const toggle = useCallback((id) => {
    setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);
  }, []);
  const isSaved = useCallback((id) => savedIds.includes(id), [savedIds]);
  const value = useMemo(() => ({ savedIds, toggle, isSaved, ready }), [savedIds, toggle, isSaved, ready]);
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used inside WishlistProvider');
  return context;
}
