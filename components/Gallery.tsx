"use client";
import Reveal from "./Reveal";

type RoomCard = {
  src: string;
  title: string;
  price: string;
  unit?: string;
  desc: string;
  features: string[];
  span?: string;
};

const images: RoomCard[] = [
  {
    // ห้องไม้สักล้านนา ตกแต่งหรูหรา
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
    title: "Lanna Deluxe Suite",
    price: "฿3,500",
    unit: "/ คืน",
    desc: "ห้องสวีทไม้สักสไตล์ล้านนา พร้อมวิวขุนเขาเมืองน่าน",
    features: ["45 ตร.ม.", "เตียง King", "อ่างอาบน้ำไม้สัก"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    // ห้องนอนไม้สักโทนอบอุ่น
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    title: "Teak Premier",
    price: "฿2,400",
    unit: "/ คืน",
    desc: "ห้องไม้สักโทนอบอุ่น กลิ่นอายเรือนเหนือ",
    features: ["32 ตร.ม.", "เตียง King", "ระเบียงไม้"],
  },
  {
    // ห้องพักสไตล์ร่วมสมัย
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    title: "Superior Twin",
    price: "฿2,800",
    unit: "/ คืน",
    desc: "ห้องเตียงคู่สไตล์ร่วมสมัย เหมาะสำหรับเพื่อนร่วมเดินทาง",
    features: ["30 ตร.ม.", "2 เตียงเดี่ยว", "พักได้ 2 ท่าน"],
  },
  {
    // ห้องสวีทใจกลางเมือง
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
    title: "Executive Suite",
    price: "฿4,500",
    unit: "/ คืน",
    desc: "ห้องสวีทใจกลางเมืองน่าน พร้อมพื้นที่นั่งเล่นกว้างขวาง",
    features: ["50 ตร.ม.", "เตียง King", "พื้นที่นั่งเล่น"],
  },
  {
    // เรือนไทยสไตล์ล้านนา
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    title: "Family Lanna House",
    price: "฿3,900",
    unit: "/ คืน",
    desc: "เรือนไม้สองชั้นสไตล์ล้านนา เหมาะสำหรับครอบครัว",
    features: ["55 ตร.ม.", "2 เตียง", "พักได้ 4 ท่าน"],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-sand-50">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">
            Our Rooms
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight text-ink-900 mb-4 text-balance">
            ห้องพักหรูหรา
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            สไตล์ล้านนาร่วมสมัย
          </h2>
          <p className="text-ink-700/70 leading-relaxed text-pretty">
            ห้องพักหลากสไตล์
            ออกแบบโดยคำนึงถึงความสะดวกสบายและความงามในทุกรายละเอียด
            พร้อมวิวสุดประทับใจในทุกมุมของรีสอร์ต
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[230px]">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Price badge — เด่นชัดตลอดเวลา */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/95 px-4 py-1.5 shadow-soft backdrop-blur-sm">
                <span className="font-display text-base font-semibold text-accent">
                  {img.price}
                </span>
                {img.unit && (
                  <span className="ml-1 text-xs text-ink-700/70">
                    {img.unit}
                  </span>
                )}
              </div>

              {/* Default bottom title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-white/80 text-xs uppercase tracking-wider">
                  Room
                </p>
                <h3 className="text-white font-display text-xl">{img.title}</h3>
              </div>

              {/* Hover overlay — แสดงราคา + รายละเอียด */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-900/95 via-ink-900/70 to-ink-900/10 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-accent text-xs uppercase tracking-[0.2em] mb-2">
                    เริ่มต้น {img.price} {img.unit}
                  </p>
                  <h3 className="font-display text-2xl text-white mb-2">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {img.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {img.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
                  >
                    จองห้องนี้ →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
