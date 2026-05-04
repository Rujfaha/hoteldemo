"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteConfig.hero.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center container-px">
        <div className="max-w-3xl text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-xs sm:text-sm text-white/80 mb-6"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.15] mb-6 text-balance"
          >
            พักผ่อนอย่างมีระดับ
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            ใจกลางเมืองน่าน
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-white/85 mb-10 max-w-xl mx-auto leading-relaxed text-pretty"
          >
            {siteConfig.hero.subline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              จองห้องพัก
            </a>
            <a href="#gallery" className="btn-ghost">
              ดูห้องพัก
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#gallery"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
