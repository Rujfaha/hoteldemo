import type { Metadata } from "next";
import { Athiti, IBM_Plex_Sans_Thai, Niramit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const athiti = Athiti({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
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
  title: "Arkkarawin R. — Freelance Web Developer",
  description:
    "รับออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ Landing Page, เว็บไซต์เต็มรูปแบบ และระบบหลังบ้าน",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${athiti.variable} ${plexThai.variable} ${niramit.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
