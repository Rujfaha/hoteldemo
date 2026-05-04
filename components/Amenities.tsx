"use client";
import {
  Wifi,
  Waves,
  Coffee,
  Dumbbell,
  Car,
  Sparkles,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const amenities = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "อินเทอร์เน็ตความเร็วสูงทั่วทั้งรีสอร์ต" },
  { icon: Waves, title: "Infinity Pool", desc: "สระว่ายน้ำขอบไร้ขอบวิวทะเล" },
  { icon: Coffee, title: "Breakfast", desc: "อาหารเช้าบุฟเฟ่ต์นานาชาติทุกวัน" },
  { icon: Dumbbell, title: "Fitness Center", desc: "ฟิตเนส 24 ชั่วโมง พร้อมเทรนเนอร์" },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "ห้องอาหารเชฟมิชลิน เปิดทุกเย็น" },
  { icon: Sparkles, title: "Spa & Wellness", desc: "สปาแบบไทยดั้งเดิม ผ่อนคลายล้ำลึก" },
  { icon: Car, title: "Valet Parking", desc: "ที่จอดรถส่วนตัวพร้อมพนักงานบริการ" },
  { icon: ShieldCheck, title: "24/7 Concierge", desc: "ทีมต้อนรับพร้อมดูแลตลอด 24 ชั่วโมง" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight text-ink-900 mb-4 text-balance">
            สิ่งอำนวยความสะดวก
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            ระดับพรีเมียม
          </h2>
          <p className="text-ink-700/70 leading-relaxed text-pretty">
            ทุกการเข้าพักของท่านมาพร้อมการบริการและสิ่งอำนวยความสะดวก
            ที่คัดสรรมาอย่างดี
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-sand-100 bg-sand-50/40 p-6 transition hover:bg-white hover:shadow-soft hover:-translate-y-1">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-ink-900 mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-700/70 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
