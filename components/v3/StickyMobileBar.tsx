"use client";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { v3Config } from "@/config/v3";

export default function StickyMobileBarV3() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#2a2d28]/10 bg-[#f4f1ea]/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1 leading-tight">
          <div className="text-[10px] uppercase tracking-widest text-[#2a2d28]/50">
            เริ่มต้น
          </div>
          <div className="text-lg font-semibold tabular-nums tracking-tight text-[#2a2d28]">
            ฿{v3Config.hero.priceFrom.toLocaleString()}
            <span className="ml-1 text-xs font-normal text-[#2a2d28]/50">
              / คืน
            </span>
          </div>
        </div>
        <a
          href={siteConfig.contact.phoneHref}
          aria-label="call"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2d28]/15 text-[#2a2d28]"
        >
          <Phone size={16} />
        </a>
        <a
          href={siteConfig.contact.lineHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#6b7f5c] px-5 py-2.5 text-sm font-medium text-white"
        >
          <MessageCircle size={14} /> จองผ่าน LINE
        </a>
      </div>
    </div>
  );
}
