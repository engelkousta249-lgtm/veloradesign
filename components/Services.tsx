"use client";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { icons } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function Services() {
  const t = useT().services;
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal><h2 className="h2 center">{t.title}</h2><p className="sub center">{t.sub}</p></Reveal>
        <div className="grid services-grid">
          {t.items.map(([n, d], i) => (
            <Reveal key={n} delay={i * 70}>
              <article className="card glass hover-glow">
                <span className="icon-tile" style={{ color: icons[i][1] }}><Icon name={icons[i][0]} /></span>
                <h3>{n}</h3><p>{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
