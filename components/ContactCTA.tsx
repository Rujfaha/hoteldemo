"use client";
import { Phone, MessageCircle, Facebook } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/site";

export default function ContactCTA() {
  const { contact } = siteConfig;
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden bg-ink-900 text-white"
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 to-ink-900" />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-3xl sm:text-5xl mb-5">
            พร้อมต้อนรับท่านสู่ประสบการณ์เหนือระดับ
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            จองห้องพักโดยตรงกับเรา รับส่วนลดและสิทธิพิเศษเฉพาะลูกค้าจองตรงเท่านั้น
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={contact.phoneHref} className="btn-primary">
              <Phone size={18} />
              โทรเลย {contact.phone}
            </a>
            <a
              href={contact.lineHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={18} />
              ติดต่อทาง LINE
            </a>
            <a
              href={contact.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Facebook size={18} />
              Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
