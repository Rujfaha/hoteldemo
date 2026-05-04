"use client";

import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { v3Config } from "@/config/v3";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f4f1ea]">
      <div className="container-px mx-auto max-w-6xl py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-[family-name:var(--font-display3)] text-3xl font-semibold">
              {siteConfig.name}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#2a2d28]/70">
              {v3Config.tagline} — {v3Config.hero.subline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#6b7f5c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#556647]"
              >
                <Phone size={14} /> โทรเลย
              </a>
              <a
                href={siteConfig.contact.lineHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#2a2d28]/20 px-5 py-2.5 text-sm font-medium text-[#2a2d28] transition hover:bg-[#2a2d28]/5"
              >
                <MessageCircle size={14} /> LINE
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b7f5c]">
              ติดต่อ
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#2a2d28]/80">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 text-[#6b7f5c]" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 text-[#6b7f5c]" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#6b7f5c]" />
                {v3Config.location.address}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b7f5c]">
              แผนที่
            </div>
            <a
              href={v3Config.location.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block overflow-hidden rounded-2xl"
            >
              <iframe
                src={v3Config.location.embedUrl}
                className="h-44 w-full border-0"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-[#2a2d28]/10 pt-6 text-center text-xs text-[#2a2d28]/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
