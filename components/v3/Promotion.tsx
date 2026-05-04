"use client";

import { motion } from "framer-motion";
import { Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { v3Config } from "@/config/v3";

export default function Promotion() {
  const [copied, setCopied] = useState(false);
  const p = v3Config.promotion;

  const copy = async () => {
    await navigator.clipboard.writeText(p.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="promo" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-[32px] bg-[#2a2d28] text-white md:grid-cols-5"
        >
          <div className="relative h-56 md:col-span-2 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
              alt="promotion"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2d28]/40 to-[#2a2d28]/10" />
          </div>

          <div className="p-8 md:col-span-3 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6b7f5c]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#c3d3a8]">
              <Sparkles size={12} /> {p.badge}
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-display3)] text-7xl font-medium leading-none text-[#c3d3a8]">
                {p.discount}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/60">
                ส่วนลด
              </span>
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display3)] text-3xl font-medium md:text-4xl">
              {p.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              {p.desc}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={copy}
                className="group inline-flex items-center gap-3 rounded-full border border-dashed border-[#c3d3a8]/60 bg-white/5 px-5 py-2.5 text-sm transition hover:bg-white/10"
              >
                <span className="text-[11px] uppercase tracking-widest text-white/50">
                  Code
                </span>
                <span className="font-mono text-sm font-semibold text-[#c3d3a8]">
                  {p.code}
                </span>
                {copied ? (
                  <Check size={14} className="text-[#c3d3a8]" />
                ) : (
                  <Copy size={14} className="text-white/50 group-hover:text-white" />
                )}
              </button>
              <span className="text-xs text-white/50">{p.validUntil}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
