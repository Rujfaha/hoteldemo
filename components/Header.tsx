"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          className={`font-display text-2xl tracking-wide ${
            scrolled ? "text-ink-900" : "text-white"
          }`}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition hover:text-accent ${
                scrolled ? "text-ink-700" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-6">
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          className={`md:hidden p-2 ${scrolled ? "text-ink-900" : "text-white"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-sand-100">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-4">
            {siteConfig.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-ink-700 font-medium"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
