"use client";

import { motion } from "framer-motion";
import { Mountain, Coffee, Flame, Leaf } from "lucide-react";
import { v3Config } from "@/config/v3";

const icons = [
  <Mountain size={24} key="m" />,
  <Coffee size={24} key="c" />,
  <Flame size={24} key="f" />,
  <Leaf size={24} key="l" />,
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#2a2d28] py-20 text-white md:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#c3d3a8]">
            Slow Living Experiences
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-display3)] text-4xl font-medium leading-tight md:text-5xl">
            ค่อยๆ ใช้เวลา
            <br />
            ฟังเสียงธรรมชาติ
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4">
          {v3Config.experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#2a2d28] p-8 transition hover:bg-[#323530]"
            >
              <div className="text-[#c3d3a8]">{icons[i]}</div>
              <h3 className="mt-5 font-[family-name:var(--font-display3)] text-2xl font-medium">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
