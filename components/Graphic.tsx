"use client";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { graphicImgs, contact } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function Graphic() {
  const t = useT().graphic;
  return (
    <section id="graphic" className="section">
      <div className="container split">
        <Reveal>
          <span className="badge"><Icon name="palette" size={16} /> {t.badge}</span>
          <h2 className="h2" style={{ marginTop: 18 }}>{t.title}</h2>
          <p className="sub">{t.sub}</p>
          <ol className="glist">
            {t.items.map(([n, d], i) => (
              <li key={n}><span>{String(i + 1).padStart(2, "0")}</span><div><b>{n}</b><p>{d}</p></div></li>
            ))}
          </ol>
          <a href={contact.wa} target="_blank" rel="noopener" className="btn btn-blue">{t.cta}</a>
        </Reveal>
        <Reveal delay={120}>
          <div className="bento">
            {graphicImgs.map((src, i) => (
              <div key={i} className={`bento-i b${i}`}>
                {src ? <img src={src} alt="" loading="lazy" /> : <div className="bento-ph" aria-hidden><Icon name="palette" size={34} /></div>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
