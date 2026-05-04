"use client";

import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { v2Config } from "@/config/v2";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-900 text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-[family-name:var(--font-serif)] text-3xl font-bold italic">
              {siteConfig.name}
            </div>
            <p className="mt-4 max-w-md text-white/70">
              {v2Config.tagline} — {v2Config.hero.subline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
              >
                <Phone size={16} /> โทรเลย
              </a>
              <a
                href={siteConfig.contact.lineHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={16} /> LINE
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-serif)] text-lg font-semibold">
              ติดต่อ
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 text-[#0d9488]" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 text-[#0d9488]" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#0d9488]" />
                {v2Config.location.address}
              </li>
              <li>
                <a
                  href={siteConfig.contact.facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Facebook size={14} className="text-[#0d9488]" />
                  {siteConfig.contact.facebook}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-serif)] text-lg font-semibold">
              แผนที่
            </h4>
            <a
              href={v2Config.location.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block overflow-hidden rounded-2xl"
            >
              <iframe
                src={v2Config.location.embedUrl}
                className="h-40 w-full border-0"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
