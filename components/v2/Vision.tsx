"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="about" className="py-24">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury room"
            className="h-[520px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink-800 sm:text-4xl md:text-5xl">
            A New Vision Of Luxury
          </h2>
          <p className="mt-6 leading-relaxed text-ink-700/80">
            สัมผัสนิยามใหม่ของการพักผ่อนริมทะเล ผสานสถาปัตยกรรมร่วมสมัย
            เข้ากับธรรมชาติของเกาะสมุยอย่างกลมกลืน ทุกรายละเอียดออกแบบ
            เพื่อมอบความผ่อนคลายและความเป็นส่วนตัวสูงสุด
          </p>
          <p className="mt-4 leading-relaxed text-ink-700/80">
            ตั้งแต่ห้องวิลล่าริมหาดส่วนตัว ไปจนถึงสปาและห้องอาหารชั้นเลิศ
            เราพร้อมเติมเต็มทุกการเดินทางของคุณให้สมบูรณ์แบบ
          </p>

          <div className="mt-8 border-l-2 border-[#0d9488] pl-5">
            <div className="font-[family-name:var(--font-serif)] text-xl italic text-ink-800">
              คุณอัครวินท์ รุจิปราชญ์
            </div>
            <div className="text-sm text-ink-700/60">Managing Director</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
