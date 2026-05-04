import type { Metadata } from "next";
import { Athiti, Sarabun, Niramit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const athiti = Athiti({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
const niramit = Niramit({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.hero.subline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${athiti.variable} ${sarabun.variable} ${niramit.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
