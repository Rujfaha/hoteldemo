"use client";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function StickyMobileBar() {
  const { contact } = siteConfig;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-sand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-2">
        <a
          href={contact.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-ink-900"
        >
          <Phone size={18} className="text-accent" />
          โทรเลย
        </a>
        <a
          href={contact.lineHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-accent"
        >
          <MessageCircle size={18} />
          ติดต่อ LINE
        </a>
      </div>
    </div>
  );
}
