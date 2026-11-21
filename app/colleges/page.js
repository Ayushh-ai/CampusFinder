'use client';
import { useEffect, useMemo, useState } from 'react';
import CollegeCard from '@/components/CollegeCard';
import SearchFilters from '@/components/SearchFilters';
import { colleges } from '@/data/colleges';
import styles from './listing.module.css';

export default function CollegesPage(){
  const [search,setSearch]=useState('');
  const [city,setCity]=useState('');
  const [course,setCourse]=useState('');
  const [sort,setSort]=useState('name');
  const [visible,setVisible]=useState(6);
  useEffect(()=>{const params=new URLSearchParams(window.location.search);setSearch(params.get('q')||'');setCourse(params.get('course')||'');},[]);
  const filtered=useMemo(()=>{
    const query=search.toLowerCase().trim();
    return colleges.filter(c=>`${c.name} ${c.city} ${c.state} ${c.summary} ${c.courses.join(' ')}`.toLowerCase().includes(query))
      .filter(c=>!city||c.city===city).filter(c=>!course||c.courses.includes(course))
      .sort((a,b)=>sort==='rating'?b.rating-a.rating:a.name.localeCompare(b.name));
  },[search,city,course,sort]);
  function reset(){setSearch('');setCity('');setCourse('');setSort('name');setVisible(6)}
  return <section className={`container ${styles.page}`}><div className={styles.heading}><span className="eyebrow">FIND YOUR NEXT CAMPUS</span><h1>Explore colleges</h1><p>Discover institutions, compare your options and build a shortlist that feels right.</p></div><SearchFilters search={search} setSearch={v=>{setSearch(v);setVisible(6)}} city={city} setCity={v=>{setCity(v);setVisible(6)}} course={course} setCourse={v=>{setCourse(v);setVisible(6)}} sort={sort} setSort={setSort} onReset={reset}/><div className={styles.resultLine}><span><strong>{filtered.length}</strong> colleges found</span><span>Showing {Math.min(visible,filtered.length)} of {filtered.length}</span></div>{filtered.length?<><div className="cardGrid">{filtered.slice(0,visible).map(c=><CollegeCard key={c.id} college={c}/>)}</div>{visible<filtered.length&&<div className={styles.load}><button onClick={()=>setVisible(v=>v+6)}>Load more colleges ↓</button></div>}</>:<div className="empty"><strong>No colleges found</strong><p>Try another search term or clear your filters.</p><button className="primaryButton" onClick={reset}>Clear all filters</button></div>}</section>;
}
