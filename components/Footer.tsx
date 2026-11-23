"use client";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { useT } from "@/lib/i18n";

const connect = [
  ["phone", "WhatsApp 698 196 7912", "https://wa.me/306981967912"],
  ["mail", "veloradesign@gmail.com", "mailto:veloradesign@gmail.com"],
  ["pin", "Heraklion, Crete", ""],
  ["insta", "@velora_webdesign", "https://instagram.com/velora_webdesign"],
  ["tiktok", "@velora", "https://tiktok.com/@velora"],
];

export default function Footer() {
  const t = useT();
  const f = t.foot;
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div><Logo /><p className="foot-text">{f.text}</p></div>
          <div><h4>{f.nav}</h4><ul>{t.nav.slice(0, 5).map(([n, h]) => <li key={h}><a href={h}>{n}</a></li>)}</ul></div>
          <div>
            <h4>{f.connect}</h4>
            <ul className="connect">
              {connect.map(([i, x, h]) => (
                <li key={x}><span className={i === "pin" ? "ic purple" : "ic"}><Icon name={i} size={18} /></span>{h ? <a href={h}>{x}</a> : <span>{x}</span>}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>{f.rights}</p>
          <div className="foot-links">
            <a href="#privacy" id="privacy">{f.privacy}</a>
            <a href="#terms">{f.terms}</a>
            <button onClick={() => window.dispatchEvent(new Event("velora:cookies"))}><Icon name="cog" size={14} /> {f.cookies}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
