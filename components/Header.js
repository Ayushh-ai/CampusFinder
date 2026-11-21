'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useWishlist } from '@/lib/wishlist-context';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { savedIds } = useWishlist();
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="CampusFinder home">
          <Image src="/campusfinder-mark.png" alt="" width={48} height={48} className={styles.brandIcon} priority />
          <span>Campus<span className={styles.brandAccent}>Finder</span></span>
        </Link>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span/><span/><span/></button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={closeMenu}>Home</Link><Link href="/colleges" onClick={closeMenu}>Explore Colleges</Link><Link href="/wishlist" onClick={closeMenu} className={styles.wishlistLink}>Wishlist <span>{savedIds.length}</span></Link>
          <Link href="/colleges" onClick={closeMenu} className={styles.navCta}>Find a college <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
