'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './HomeSearch.module.css';
export default function HomeSearch(){const [query,setQuery]=useState('');const router=useRouter();function submit(e){e.preventDefault();router.push(`/colleges${query.trim()?`?q=${encodeURIComponent(query.trim())}`:''}`)}return <form className={styles.form} onSubmit={submit}><span>⌕</span><input aria-label="Search colleges" value={query} onChange={e=>setQuery(e.target.value)} placeholder="College name, city or course..."/><button>Search colleges <span>→</span></button></form>}
