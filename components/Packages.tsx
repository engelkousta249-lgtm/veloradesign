"use client";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { packMeta, contact } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function Packages() {
  const t = useT().packs;
  return (
    <section id="packages" className="section">
      <div className="container">
        <Reveal>
          <p className="tag center">{t.tag}</p>
          <h2 className="h2 center">{t.title} <span className="grad-text">{t.grad}</span></h2>
          <p className="sub center">{t.sub}</p>
        </Reveal>
        <div className="price-grid">
          {t.list.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className={`price glass ${packMeta[i].popular ? "popular" : ""}`} style={{ ["--c" as string]: packMeta[i].color }}>
                {packMeta[i].popular && <span className="ribbon">{t.pop}</span>}
                <h3 className="price-name">{p.name}</h3>
                <p className="price-amt"><sup>€</sup>{packMeta[i].price}</p>
                <p className="price-meta">{p.meta}</p>
                <p className="price-tag">{p.tag}</p>
                <ul>{p.feats.map((f) => <li key={f}><span className="tick"><Icon name="check" size={14} /></span>{f}</li>)}</ul>
                <a href={contact.wa} target="_blank" rel="noopener" className="pkg-btn">{t.cta} {p.name} →</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
