"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import { useT } from "@/lib/i18n";

const KEY = "velora-consent";

export default function CookieModal() {
  const t = useT().ck;
  const [show, setShow] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const accept = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (show) accept.current?.focus();
  }, [show]);

  const save = (v: object) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch {}
    setShow(false);
  };

  // Allow the footer "Cookie Preferences" link to reopen the dialog.
  useEffect(() => {
    const open = () => {
      setManage(true);
      setShow(true);
    };
    window.addEventListener("velora:cookies", open);
    return () => window.removeEventListener("velora:cookies", open);
  }, []);

  if (!show) return null;
  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="ck-title">
        <div className="shield"><Icon name="shield" size={30} /></div>
        <h2 id="ck-title">{t.title}</h2>
        <p>
          {t.text}{" "}
          <a href="#privacy" className="link">{t.read}</a>
        </p>
        {manage && (
          <div className="toggles">
            <label><span>{t.ess}</span><input type="checkbox" checked disabled /></label>
            <label><span>{t.an}</span><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /></label>
            <label><span>{t.mk}</span><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /></label>
          </div>
        )}
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={() => (manage ? save({ essential: true, analytics, marketing }) : setManage(true))}>
            {manage ? t.save : t.manage}
          </button>
          <button className="btn btn-ghost" onClick={() => save({ essential: true, analytics: false, marketing: false })}>{t.rej}</button>
          <button ref={accept} className="btn btn-primary wide" onClick={() => save({ essential: true, analytics: true, marketing: true })}>{t.acc}</button>
        </div>
      </div>
    </div>
  );
}
