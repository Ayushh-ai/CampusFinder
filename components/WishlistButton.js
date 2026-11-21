'use client';
import { useWishlist } from '@/lib/wishlist-context';
import styles from './WishlistButton.module.css';
export default function WishlistButton({collegeId, compact=false}){const {isSaved,toggle,ready}=useWishlist();const saved=isSaved(collegeId);return <button type="button" disabled={!ready} aria-label={saved?'Remove from wishlist':'Save to wishlist'} aria-pressed={saved} onClick={()=>toggle(collegeId)} className={`${styles.button} ${compact?styles.compact:''} ${saved?styles.saved:''}`}>{saved?'♥':'♡'}{compact?'':saved?' Saved':' Save to wishlist'}</button>}
