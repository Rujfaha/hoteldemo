"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  GraduationCap,
  Globe,
  Server,
  Layout,
  ArrowRight,
  ExternalLink,
  Code2,
  Palette,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";

/* ─── Demo data ───────────────────────────────────────────────── */
const demos = [
  {
    id: "v1",
    href: "/v1",
    title: "Lanna Classic",
    location: "น่าน",
    color: "from-[#e8455d] to-[#c93a4f]",
    ring: "ring-[#e8455d]/30",
    image:
      "https://plus.unsplash.com/premium_photo-1661874901387-7d272fa36c43?q=80&w=800&auto=format&fit=crop",
    desc: "โทนสีชมพู-แดง สไตล์ล้านนาหรูหรา สง่างาม",
    tags: ["Serif Heading", "Pink Accent", "Gallery Grid"],
  },
  {
    id: "v2",
    href: "/v2",
    title: "Tropical Beach",
    location: "เกาะสมุย",
    color: "from-[#0d9488] to-[#0f766e]",
    ring: "ring-[#0d9488]/30",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    desc: "โทนสี Teal ธีมชายทะเล สดใส ผ่อนคลาย",
    tags: ["Playfair Display", "Teal Accent", "Booking Bar"],
  },
  {
    id: "v3",
    href: "/v3",
    title: "Mountain Retreat",
    location: "ปาย",
    color: "from-[#6b7c5e] to-[#4a5a3c]",
    ring: "ring-[#6b7c5e]/30",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    desc: "โทนเขียว-ครีม ธรรมชาติ สงบ เน้นราคาและโปรโมชั่น",
    tags: ["Cormorant Garamond", "Sage Green", "Price Table"],
  },
  {
    id: "studyplan",
    href: "https://studyplan.totalh.net/",
    external: true,
    title: "Study Plan",
    location: "Web Application",
    color: "from-[#6366f1] to-[#4f46e5]",
    ring: "ring-[#6366f1]/30",
    image: "/studyplan.png",
    desc: "ระบบวางแผนการเรียน จัดตารางคอร์ส และติดตามความก้าวหน้า",
    tags: ["Next.js", "Full Stack", "Dashboard"],
  },
];

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "หน้าเว็บหน้าเดียวสวยๆ ไว้โปรโมทธุรกิจ โรงแรม ร้านอาหาร หรือสินค้าของคุณ ให้ลูกค้าเห็นปุ๊บ สนใจปั๊บ",
  },
  {
    icon: Globe,
    title: "เว็บไซต์เต็มรูปแบบ",
    desc: "เว็บหลายหน้า มีทุกอย่างครบ ทั้งหน้าแรก หน้าเกี่ยวกับเรา หน้าบริการ หน้าติดต่อ ฯลฯ ดูเป็นมืออาชีพ",
  },
  {
    icon: Server,
    title: "ระบบหลังบ้าน",
    desc: "ระบบจัดการข้อมูลครบวงจร เช่น ระบบจองห้อง ระบบสมาชิก ระบบสต็อก ฯลฯ ใช้งานง่าย จัดการเองได้",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    desc: "เว็บแสดงผลสวยทุกหน้าจอ ไม่ว่าจะดูบนมือถือ แท็บเล็ต หรือคอมพิวเตอร์ ไม่มีเลย์เอาท์พัง",
  },
];

/* ─── Animation variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-white selection:bg-white/20">
      {/* ── Hero ────────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0a09] via-[#1a1a2e] to-[#16213e]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28">
          {/* Nav */}
          <nav className="flex items-center justify-between mb-16 sm:mb-24">
            <span className="text-lg font-semibold tracking-wider">
              <Code2 className="inline-block w-5 h-5 mr-2 -mt-0.5 text-teal-400" />
              AK.DEV
            </span>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#demos" className="hover:text-white transition">
                Demos
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </nav>

          {/* Hero content — photo + text */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-2xl"
            >
              <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-4">
                Freelance Web Developer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                สร้างเว็บไซต์
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  ให้ธุรกิจของคุณ
                </span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                รับออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ ตั้งแต่หน้า Landing Page สวยๆ
                ไปจนถึงระบบหลังบ้านครบวงจร ดีไซน์ทันสมัย ใช้งานง่าย
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#demos"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all hover:scale-[1.03] shadow-lg shadow-teal-500/25"
                >
                  ดูผลงาน <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide backdrop-blur transition-all"
                >
                  ติดต่อเรา
                </a>
              </div>

              {/* Education badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3">
                <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-white/80">กำลังศึกษาอยู่ที่ </span>
                  <span className="text-white font-medium">
                    KMUTT — Computer Engineering (International)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
                  <img
                    src="/arkkarawin.jpg"
                    alt="อัครวินท์ รุจิปราชญ์"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="text-xl sm:text-2xl font-semibold text-white/90">
                    อัครวินท์ รุจิปราชญ์
                  </p>
                  <p className="text-sm text-white/40 mt-1">Arkkarawin Rujiprach</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ── Demo Showcase ───────────────────────────────────── */}
      <section id="demos" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ตัวอย่างผลงาน
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto">
              ผลงานเว็บไซต์ที่เคยทำ ทั้ง Landing Page และ Web App
              กดเข้าไปดูเต็มๆ ได้เลย
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {demos.map((d, i) => (
              <motion.div
                key={d.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block bg-white/[0.03] border border-white/[0.06] rounded-3xl overflow-hidden hover:ring-4 ${d.ring} transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-xs text-white/70 uppercase tracking-wider">
                          {d.location}
                        </span>
                        <h3 className="text-xl font-bold">{d.title}</h3>
                      </div>
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${d.color} shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <p className="text-sm text-white/60 leading-relaxed">
                      {d.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/[0.06] text-white/50 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────── */}
      <section
        id="services"
        className="relative py-20 sm:py-28 bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              บริการของเรา
            </h2>
            <p className="mt-3 text-white/50 max-w-lg mx-auto">
              พร้อมช่วยทำเว็บไซต์ให้คุณทุกรูปแบบ ไม่ว่าจะเป็นร้านค้า โรงแรม
              คลินิก หรือธุรกิจอะไรก็ตาม บอกมาได้เลย
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/30 text-sm"
          >
            <Palette className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Node.js",
              "PostgreSQL",
              "Prisma",
            ].map((t) => (
              <span
                key={t}
                className="bg-white/[0.04] px-4 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ติดต่อผม
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto">
              สนใจอยากทำเว็บ หรืออยากคุยรายละเอียดก่อน ทักมาได้เลยครับ
              ยินดีให้คำปรึกษาฟรี
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                label: "โทรศัพท์",
                value: "099-382-2802",
                href: "tel:+66993822802",
              },
              {
                icon: Mail,
                label: "อีเมล",
                value: "zegram5599@gmail.com",
                href: "mailto:zegram5599@gmail.com",
              },
              {
                icon: Facebook,
                label: "Facebook",
                value: "Arkkarawin R.",
                href: "https://web.facebook.com/arkkarawin.rujiprach.5/",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@akkarawin.59",
                href: "https://www.instagram.com/akkarawin.59/",
              },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-teal-500/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-blue-500/30 transition-colors">
                  <c.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© 2025 Arkkarawin Rujiprach. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-white/50">Next.js + Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
