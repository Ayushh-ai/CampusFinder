'use client';
import Link from 'next/link';
import { useWishlist } from '@/lib/wishlist-context';
import { colleges } from '@/data/colleges';
import CollegeCard from '@/components/CollegeCard';
import styles from './wishlist.module.css';
export default function WishlistPage(){const {savedIds,ready}=useWishlist();const saved=colleges.filter(c=>savedIds.includes(c.id));return <section className={`container ${styles.page}`}><div className={styles.heading}><span className="eyebrow">YOUR PERSONAL SHORTLIST</span><h1>Saved colleges</h1><p>Keep the colleges you are considering together in one place.</p></div>{!ready?<div className="empty">Loading your wishlist…</div>:saved.length?<><div className={styles.count}>{saved.length} {saved.length===1?'college':'colleges'} saved</div><div className="cardGrid">{saved.map(c=><CollegeCard key={c.id} college={c}/>)}</div></>:<div className="empty"><div className={styles.heart}>♡</div><strong>Your wishlist is waiting</strong><p>Save colleges you like and they will appear here.</p><Link href="/colleges" className="primaryButton">Explore colleges →</Link></div>}</section>}
