"use client";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { useT } from "@/lib/i18n";

export default function About() {
  const t = useT().about;
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="tag">{t.tag}</p>
          <h2 className="h2">{t.title}</h2>
          <p className="sub left">{t.text}</p>
          <span className="badge"><Icon name="pin" size={16} /> {t.badge}</span>
        </Reveal>
        <div className="grid feat-grid">
          {t.feats.map(([a, b], i) => (
            <Reveal key={a} delay={i * 60}><div className="card glass feat hover-glow"><h3>{a}</h3><p>{b}</p></div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
