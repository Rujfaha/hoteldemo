"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-[#d4ede7] p-8 md:p-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="text-[#0d9488]" size={36} />
          <p className="mt-4 font-[family-name:var(--font-serif)] text-2xl italic leading-relaxed text-ink-800">
            “วิลล่าริมหาดส่วนตัวที่ตอบโจทย์ทุกอย่างที่ต้องการ ตั้งแต่วิวทะเล
            อาหารเช้าเลิศรส และพนักงานที่ใส่ใจทุกรายละเอียด เป็นทริปเกาะสมุยที่ประทับใจที่สุด”
          </p>
          <div className="mt-6">
            <div className="font-semibold text-ink-800">คุณอเล็กซานเดอร์</div>
            <div className="text-sm text-ink-700/60">Businessman</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=900&auto=format&fit=crop"
            alt="guest"
            className="h-[420px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
