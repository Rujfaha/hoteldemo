"use client";
import Reveal from "./Reveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    title: "Deluxe Ocean Suite",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    title: "Premier King",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    title: "Garden Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    title: "Pool Pavilion",
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    title: "Spa Retreat",
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
          <h2 className="font-display text-3xl sm:text-5xl text-ink-900 mb-4">
            Treat Yourself At Our Luxury Hotel
          </h2>
          <p className="text-ink-700/70">
            ห้องพักหลากสไตล์ ออกแบบโดยคำนึงถึงความสะดวกสบายและความงามในทุกรายละเอียด
            พร้อมวิวสุดประทับใจในทุกมุมของรีสอร์ต
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white/80 text-xs uppercase tracking-wider">
                  Room
                </p>
                <h3 className="text-white font-display text-xl">{img.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
