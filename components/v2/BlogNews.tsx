"use client";

import { motion } from "framer-motion";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=900&auto=format&fit=crop",
    title: "10 หาดสวยห้ามพลาดบนเกาะสมุย",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
    title: "ดำน้ำดูปะการังที่เกาะเต่า",
  },
  {
    img: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=900&auto=format&fit=crop",
    title: "คาเฟ่วิวทะเลสุดชิคบนเกาะสมุย",
  },
  {
    img: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=900&auto=format&fit=crop",
    title: "Sunset Cruise ทริปเรือยอชต์สุดหรู",
  },
  {
    img: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?q=80&w=900&auto=format&fit=crop",
    title: "Wellness Retreat ผ่อนคลายแบบ Tropical",
  },
];

export default function BlogNews() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink-800 sm:text-4xl md:text-5xl">
            Blog &amp; News
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-700/70">
            แรงบันดาลใจ เรื่องราว และคำแนะนำการเดินทาง สำหรับนักเดินทางทุกคน
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
