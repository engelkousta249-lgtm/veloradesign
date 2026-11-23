"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang, useT } from "@/lib/i18n";

const langs = [["en", "🇬🇧", "English"], ["el", "🇬🇷", "Ελληνικά"]] as const;

export default function Header() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const cur = langs.find((l) => l[0] === lang)!;
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-row">
        <Logo />
        <nav className="top-nav" aria-label="Main">
          {t.nav.slice(0, 6).map(([n, h]) => <a key={h} href={h}>{n}</a>)}
        </nav>
        <div className="header-right">
          <div className="lang">
            <button className="pill-btn" aria-haspopup="listbox" aria-expanded={menu} onClick={() => setMenu(!menu)}>
              <span aria-hidden>{cur[1]}</span><b className="lang-code">{cur[0].toUpperCase()}</b>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {menu && (
              <ul className="lang-menu" role="listbox">
                {langs.map(([c, f, n]) => (
                  <li key={c}><button role="option" aria-selected={c === lang} onClick={() => { setLang(c); setMenu(false); }}>{f} {n}</button></li>
                ))}
              </ul>
            )}
          </div>
          <button className="pill-btn burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        {t.nav.map(([n, h], i) => (
          <a key={h} href={h} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }} tabIndex={open ? 0 : -1}>{n}</a>
        ))}
      </nav>
    </header>
  );
}
