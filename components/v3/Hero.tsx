"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { v3Config } from "@/config/v3";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={v3Config.hero.image}
          alt={v3Config.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
              <MapPin size={12} /> {v3Config.hero.eyebrow}
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-display3)] text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              {v3Config.hero.headline.split("\n").map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              {v3Config.hero.subline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#2a2d28] transition hover:bg-[#6b7f5c] hover:text-white"
              >
                ดูห้องพัก <ArrowRight size={16} />
              </a>
              <div className="text-white/90">
                <div className="text-[11px] uppercase tracking-widest text-white/60">
                  เริ่มต้นเพียง
                </div>
                <div className="text-3xl font-semibold tabular-nums tracking-tight">
                  ฿{v3Config.hero.priceFrom.toLocaleString()}
                  <span className="ml-1 text-sm font-normal text-white/70">
                    / คืน
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
