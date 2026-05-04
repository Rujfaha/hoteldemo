"use client";

import { motion } from "framer-motion";
import { Bed, Wifi, Car, Tv, Coffee, Star } from "lucide-react";

const rooms = [
  {
    title: "Beachfront Pool Villa",
    price: "฿8,900",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1200&auto=format&fit=crop",
    features: ["65 ตร.ม.", "Wi-Fi", "สระส่วนตัว", "Smart TV", "อาหารเช้า"],
  },
  {
    title: "Ocean View Suite",
    price: "฿5,500",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
    features: ["42 ตร.ม.", "Wi-Fi", "ระเบียงทะเล", "Smart TV", "อาหารเช้า"],
  },
  {
    title: "Tropical Garden Room",
    price: "฿3,500",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    features: ["36 ตร.ม.", "Wi-Fi", "สวนส่วนตัว", "Smart TV", "อาหารเช้า"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "Wi-Fi": <Wifi size={14} />,
  "ที่จอดรถ": <Car size={14} />,
  "Smart TV": <Tv size={14} />,
  "อาหารเช้า": <Coffee size={14} />,
};

export default function Rooms() {
  return (
    <section id="rooms" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink-800 sm:text-4xl md:text-5xl"
          >
            Treat Yourself At our Luxury Hotel
          </motion.h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-700/70">
            ห้องพักทุกห้องออกแบบอย่างพิถีพิถัน เปิดรับวิวทะเลและไอแดดตลอดวัน พร้อมความเป็นส่วนตัวระดับสูงสุด
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
                  <span className="inline-flex items-center gap-1 tabular-nums">
                    <Star size={12} className="fill-[#0d9488] text-[#0d9488]" />
                    4.9
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xl font-semibold tabular-nums tracking-tight text-[#0d9488]">
                  {r.price}
                  <span className="ml-1 text-xs font-normal text-ink-700/60">
                    / คืน
                  </span>
                </div>
                <h3 className="mt-1 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink-800">
                  {r.title}
                </h3>

                <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-ink-700/80">
                  <li className="flex items-center gap-2">
                    <Bed size={14} className="text-[#0d9488]" /> {r.features[0]}
                  </li>
                  {r.features.slice(1).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-[#0d9488]">{iconMap[f]}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0d9488] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
                >
                  Explore
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
