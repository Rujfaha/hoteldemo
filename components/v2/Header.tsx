"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "About", href: "#about" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-6">
        <a
          href="#home"
          className="font-[family-name:var(--font-serif)] text-3xl font-bold italic text-white drop-shadow"
        >
          {siteConfig.name.split(" ")[0]}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#0d9488] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f766e] lg:inline-flex"
        >
          Book Now
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
          <div className="rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink-800"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-[#0d9488] py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
