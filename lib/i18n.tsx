"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang } from "./dict";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "el", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, set] = useState<Lang>("el");
  useEffect(() => {
    try {
      const s = localStorage.getItem("velora-lang");
      if (s === "en" || s === "el") set(s);
    } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => {
    set(l);
    try { localStorage.setItem("velora-lang", l); } catch {}
  };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
export const useT = () => dict[useContext(Ctx).lang];
