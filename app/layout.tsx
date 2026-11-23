import type { Metadata, Viewport } from "next";
import { Manrope, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const sans = Manrope({ subsets: ["latin", "latin-ext", "greek"], variable: "--font-sans", display: "swap" });
const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  title: "Velora | Web Design & UI/UX",
  description:
    "Premium websites, UI/UX και γραφιστική από το Ηράκλειο Κρήτης. Premium web design from Crete.",
};

export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${sans.variable} ${script.variable}`}>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  );
}
