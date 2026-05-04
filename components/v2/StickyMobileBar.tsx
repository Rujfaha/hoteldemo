"use client";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function StickyMobileBarV2() {
  const { contact } = siteConfig;
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="flex items-center gap-2 rounded-full bg-ink-900/95 p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur">
        <a
          href={contact.phoneHref}
          aria-label="โทรเลย"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <Phone size={18} />
        </a>
        <a
          href={contact.lineHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINE"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <MessageCircle size={18} />
        </a>
        <a
          href="#contact"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#0d9488] text-sm font-semibold text-white transition hover:bg-[#0f766e]"
        >
          <CalendarCheck size={16} />
          จองห้องพัก
        </a>
      </div>
    </div>
  );
}
