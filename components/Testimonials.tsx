"use client";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { useT } from "@/lib/i18n";

export default function Testimonials() {
  const t = useT().reviews;
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal><h2 className="h2 center">{t.title}</h2></Reveal>
        <div className="grid t-grid">
          {t.list.map(([n, r, q], i) => (
            <Reveal key={n} delay={i * 70}>
              <figure className="card glass hover-glow t-card">
                <div className="stars" role="img" aria-label="5/5">{[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" size={18} />)}</div>
                <blockquote>“{q}”</blockquote>
                <figcaption><strong>{n}</strong><span>{r}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
