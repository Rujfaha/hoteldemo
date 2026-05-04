"use client";

import { motion } from "framer-motion";
import { Users, Maximize2, Check } from "lucide-react";
import { v3Config } from "@/config/v3";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#6b7f5c]">
              Our Accommodations
            </div>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display3)] text-4xl font-medium leading-tight md:text-5xl">
              ห้องพักไม่กี่หลัง เพื่อความเป็นส่วนตัว
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#2a2d28]/70">
            ราคาต่อคืนรวมอาหารเช้าและ Wi-Fi ทุกห้อง ยกเลิกฟรีก่อนเข้าพัก 7 วัน
          </p>
        </div>

        <div className="space-y-10">
          {v3Config.rooms.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={r.image}
                  alt={r.name}
                  className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div>
                {r.popular && (
                  <div className="mb-3 inline-flex rounded-full bg-[#6b7f5c]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#556647]">
                    Most Popular
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-display3)] text-3xl font-medium md:text-4xl">
                  {r.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2a2d28]/70">
                  {r.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-[#2a2d28]/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 size={12} /> {r.size}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={12} /> พักได้ {r.guests} ท่าน
                  </span>
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-[#2a2d28]/80">
                  {r.includes.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-[#6b7f5c]" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[#2a2d28]/10 pt-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-[#2a2d28]/50">
                      ราคาพิเศษวันนี้
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-3xl font-semibold tabular-nums tracking-tight text-[#2a2d28]">
                        ฿{r.price.toLocaleString()}
                      </span>
                      <span className="text-sm tabular-nums text-[#2a2d28]/40 line-through">
                        ฿{r.original.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#2a2d28]/50">/ คืน</span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#6b7f5c] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#556647]"
                  >
                    จองห้องนี้
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
