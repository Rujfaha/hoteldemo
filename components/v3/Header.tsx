"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const nav = [
  { label: "ห้องพัก", href: "#rooms" },
  { label: "โปรโมชั่น", href: "#promo" },
  { label: "ประสบการณ์", href: "#experience" },
  { label: "ราคา", href: "#pricing" },
  { label: "ติดต่อ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-6">
        <a
          href="#home"
          className="font-[family-name:var(--font-display3)] text-2xl font-semibold tracking-wide text-white drop-shadow-lg"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/90 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 lg:inline-flex"
        >
          จองห้องพัก
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-white/15 p-2 text-white backdrop-blur lg:hidden"
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="container-px mx-auto max-w-7xl lg:hidden">
          <div className="rounded-2xl bg-white/95 p-4 shadow backdrop-blur">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-[#2a2d28]"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
