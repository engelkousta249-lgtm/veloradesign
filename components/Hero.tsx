"use client";
import { useEffect, useState, type MouseEvent } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { contact } from "@/lib/data";

function BustArt() {
  return (
    <svg viewBox="0 0 400 460" role="img" aria-label="Classical marble bust splashed with yellow, teal and magenta paint" className="bust">
      <defs>
        <radialGradient id="marble" cx="40%" cy="30%" r="75%">
          <stop offset="0" stopColor="#f4f1ec" />
          <stop offset=".55" stopColor="#bdb8b0" />
          <stop offset="1" stopColor="#5b5853" />
        </radialGradient>
        <linearGradient id="drape" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#d9d5ce" />
          <stop offset="1" stopColor="#4a4743" />
        </linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="1.2" /></filter>
      </defs>
      <ellipse cx="200" cy="448" rx="150" ry="10" fill="#8B5CF6" opacity=".25" filter="url(#soft)" />
      <path d="M62 440c4-70 30-112 92-128l46-14 46 14c62 16 88 58 92 128Z" fill="url(#drape)" />
      <path d="M96 400c30-38 70-52 104-52 40 0 76 16 104 52M118 430c26-26 54-36 82-36" stroke="#2c2a28" strokeOpacity=".35" fill="none" strokeWidth="3" />
      <path d="M172 262h56v52c0 10-12 20-28 20s-28-10-28-20Z" fill="#a9a49c" />
      <path d="M140 150c0-52 26-86 60-86s60 34 60 86c0 56-26 112-60 112s-60-56-60-112Z" fill="url(#marble)" />
      <path d="M128 140c-6-60 28-100 74-100 52 0 78 44 70 104-8-30-28-46-48-46-24 0-48 8-96 42Z" fill="#8f8a83" />
      <path d="M154 150q14-8 30 0M216 150q14-8 30 0" stroke="#4a4743" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M200 156v40l-8 6" stroke="#6b665f" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M184 226q16 8 32 0" stroke="#6b665f" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* paint */}
      <path d="M150 112c20-14 58-12 96 6-10 22-34 30-52 22-12 20-30 28-44 16-6-14-8-30 0-44Z" fill="#F4B400" />
      <path d="M160 128v70c0 10 10 10 10 0v-58Z" fill="#F4B400" />
      <path d="M232 150c14 10 20 34 12 56-6 14-16 4-12-8 4-14 2-30 0-48Z" fill="#14B8A6" />
      <path d="M92 380c16-16 36-22 54-14-4 20-22 34-38 34-12 0-18-8-16-20Z" fill="#14B8A6" />
      <path d="M300 372c-12 14-8 34 6 40 12-10 14-30 4-42Z" fill="#EC4899" />
      <path d="M118 336c-14 6-20 22-14 34 14-2 24-14 14-34Z" fill="#111" />
      <path d="M262 120c8 10 24 8 30-2-6-14-20-18-30 2Z" fill="#EC4899" />
      <circle cx="268" cy="188" r="4" fill="#F4B400" />
      <circle cx="146" cy="216" r="3" fill="#14B8A6" />
      <circle cx="324" cy="344" r="5" fill="#EC4899" />
      <circle cx="84" cy="318" r="4" fill="#F4B400" />
    </svg>
  );
}

export default function Hero() {
  const t = useT().hero;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % 4), 2300);
    return () => clearInterval(id);
  }, []);
  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 14}deg`);
    e.currentTarget.style.setProperty("--rx", `${(0.5 - (e.clientY - r.top) / r.height) * 14}deg`);
  };
  const reset = (e: MouseEvent<HTMLDivElement>) => { e.currentTarget.style.setProperty("--ry", "0deg"); e.currentTarget.style.setProperty("--rx", "0deg"); };
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-chip"><span className="dot" />{t.kicker}</p>
          <h1>
            <span className="h1-line">{t.pre}</span>
            <span className="h1-line rot"><span key={i} className="grad-text rot-word">{t.rot[i]}</span></span>
            <span className="h1-line">{t.post}</span>
          </h1>
          <p className="lead">{t.lead}</p>
          <div className="hero-cta">
            <a href="#works" className="btn btn-primary">{t.cta}</a>
            <a href={contact.wa} target="_blank" rel="noopener" className="btn btn-ghost">{t.cta2}</a>
          </div>
        </div>
        <div className="hero-stage" onMouseMove={tilt} onMouseLeave={reset}>
          <div className="orbit o1" aria-hidden><i /></div>
          <div className="orbit o2" aria-hidden><i /></div>
          {Array.from({ length: 14 }).map((_, k) => <span key={k} className="spark" aria-hidden style={{ left: `${(k * 37) % 96}%`, top: `${(k * 53) % 92}%`, animationDelay: `${(k % 7) * 0.45}s` }} />)}
          <div className="hero-art glass">
            <div className="glow" aria-hidden />
            <BustArt />
          </div>
        </div>
      </div>
      <div className="marquee" aria-hidden>
        <div className="marq-track">{[...t.marq, ...t.marq, ...t.marq, ...t.marq].map((m, k) => <span key={k}>{m}<em>✦</em></span>)}</div>
      </div>
    </section>
  );
}
