"use client";
import Reveal from "./Reveal";
import { works } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function Works() {
  const t = useT().works;
  return (
    <section id="works" className="section">
      <div className="container">
        <Reveal><h2 className="h2 center">{t.title}</h2><p className="sub center">{t.sub}</p></Reveal>
        <div className="grid works-grid">
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <a href={w.url} target="_blank" rel="noopener" className="work glass hover-glow" style={{ ["--h" as string]: w.hue }} aria-label={`${w.title} – ${t.visit}`}>
                <div className="laptop">
                  {w.img ? <img src={w.img} alt={w.title} loading="lazy" /> : (
                    <><div className="lscreen"><b>{w.title}</b><i /><i /><i /></div><div className="lbase" /></>
                  )}
                  <span className="visit">{t.visit} ↗</span>
                </div>
                <div className="work-info">
                  <div><p className="work-tag">{t.tags[i]}</p><h3>{w.title}</h3></div>
                  <span className="arr" aria-hidden>↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="center"><a href="#packages" className="link big">{t.cta}</a></p>
      </div>
    </section>
  );
}
