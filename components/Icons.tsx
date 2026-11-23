type P = { name: string; size?: number };

export function Icon({ name, size = 22 }: P) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "monitor":
      return <svg {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>;
    case "phone":
      return <svg {...p}><rect x="7" y="2.5" width="10" height="19" rx="2.2" /><path d="M11 18.5h2" /></svg>;
    case "palette":
      return <svg {...p}><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.6-2-.5-1.2.3-2.4 1.6-2.4H17a4 4 0 0 0 4-4C21 6.8 17 3 12 3Z" /><circle cx="7.5" cy="11" r=".8" /><circle cx="10" cy="7.5" r=".8" /><circle cx="14.5" cy="7.5" r=".8" /></svg>;
    case "cube":
      return <svg {...p}><path d="m12 2.5 8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3L12 2.5Z" /><path d="m3.5 7.3 8.5 4.8 8.5-4.8M12 12.1v9.4" /></svg>;
    case "shield":
      return <svg {...p}><path d="M12 2.8 4.5 5.7v5.6c0 4.6 3.1 8.2 7.5 9.9 4.4-1.7 7.5-5.3 7.5-9.9V5.7L12 2.8Z" /><path d="m8.8 12 2.2 2.2 4.2-4.4" /></svg>;
    case "globe":
      return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.8 2.7 2.8 15.3 0 18M12 3c-2.8 2.7-2.8 15.3 0 18" /></svg>;
    case "mail":
      return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>;
    case "pin":
      return <svg {...p}><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
    case "insta":
      return <svg {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" /></svg>;
    case "tiktok":
      return <svg {...p}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.6 2 4.2 4.5 4.5" /></svg>;
    case "cog":
      return <svg {...p}><circle cx="12" cy="12" r="3" /><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" /></svg>;
    case "check":
      return <svg {...p} strokeWidth={3}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
    case "x":
      return <svg {...p} strokeWidth={3}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "star":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.6l-5.6 3.2 1.3-6.2L3 9.3l6.3-.7L12 2.8Z" /></svg>;
    default:
      return null;
  }
}
