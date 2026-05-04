"use client";

import { motion } from "framer-motion";
import { v2Config } from "@/config/v2";
import BookingBar from "./BookingBar";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={v2Config.hero.image}
          alt={v2Config.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-[family-name:var(--font-serif)] text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {v2Config.hero.headline.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-white/85 md:text-lg"
          >
            {v2Config.hero.subline}
          </motion.p>

          <motion.a
            href="#rooms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 rounded-full bg-[#0d9488] px-9 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-xl transition hover:bg-[#0f766e]"
          >
            Discover More
          </motion.a>
        </div>
      </div>

      <div className="container-px relative z-20 mx-auto -mt-16 max-w-6xl">
        <BookingBar />
      </div>
    </section>
  );
}
