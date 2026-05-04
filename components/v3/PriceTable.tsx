"use client";

import { motion } from "framer-motion";
import { v3Config } from "@/config/v3";

export default function PriceTable() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#6b7f5c]">
            Transparent Pricing
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-display3)] text-4xl font-medium md:text-5xl">
            ราคาตามฤดูกาล
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#2a2d28]/70">
            ไม่มีค่าใช้จ่ายแอบแฝง — ราคาต่อคืนสำหรับ Valley Cabin (เตียงเดี่ยว 2 เตียง)
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divide-y divide-[#2a2d28]/10 overflow-hidden rounded-3xl border border-[#2a2d28]/10 bg-white"
        >
          {v3Config.priceTable.map((p, i) => (
            <div
              key={p.season}
              className="flex flex-wrap items-center gap-4 px-6 py-5 md:px-10 md:py-6"
            >
              <div className="w-10 text-xs font-medium uppercase tracking-[0.2em] text-[#6b7f5c]">
                0{i + 1}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold md:text-xl">
                  {p.season}
                </div>
                <div className="text-xs text-[#2a2d28]/60">{p.months}</div>
              </div>
              <div className="text-2xl font-semibold tabular-nums tracking-tight md:text-[26px]">
                ฿{p.rate}
                <span className="ml-1 text-xs font-normal text-[#2a2d28]/50">
                  / คืน
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-[#2a2d28]/50">
          * ราคาอาจเปลี่ยนแปลงในวันหยุดยาว สอบถามเพิ่มเติมผ่าน LINE
        </p>
      </div>
    </section>
  );
}
