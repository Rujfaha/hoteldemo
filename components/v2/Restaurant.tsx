"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1000&auto=format&fit=crop",
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="bg-white py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink-800 sm:text-4xl md:text-5xl"
          >
            A World-Class Restaurant Inside
            <br />
            Each Of Our Resorts
          </motion.h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-700/70">
            ลิ้มรสอาหารทะเลสดจากเรือประมงท้องถิ่น และเมนูระดับมิชลิน
            รังสรรค์โดยเชฟชั้นนำ พร้อมวิวพระอาทิตย์ตกริมหาด
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-[#0d9488] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#0f766e]"
          >
            Check Availability
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={src}
                alt="restaurant"
                className="h-72 w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
