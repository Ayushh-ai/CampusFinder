import Link from 'next/link';
import WishlistButton from './WishlistButton';
import styles from './CollegeCard.module.css';

export default function CollegeCard({ college }) {
  return <article className={styles.card}>
    <div className={`${styles.cover} ${styles[college.color]}`}><span className={styles.initials}>{college.initials}</span><span className={styles.type}>{college.type} institution</span><WishlistButton collegeId={college.id} compact /></div>
    <div className={styles.body}><div className={styles.location}>⌖ {college.city}, {college.state}</div><h3><Link href={`/colleges/${college.slug}`}>{college.name}</Link></h3><p>{college.summary}</p><div className={styles.meta}><span>★ {college.rating.toFixed(1)} <small>({college.reviews})</small></span><span>{college.courses.slice(0,2).join(' · ')}</span></div><div className={styles.bottom}><span className={styles.fees}>{college.fees}</span><Link className={styles.details} href={`/colleges/${college.slug}`}>View details ↗</Link></div></div>
  </article>;
}
