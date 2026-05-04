"use client";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/site";

export default function LocationMap() {
  const { location, contact } = siteConfig;
  return (
    <section id="location" className="py-20 sm:py-28 bg-sand-50">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">
            Find Us
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-ink-900 mb-4">
            ที่ตั้งโรงแรม
          </h2>
          <p className="text-ink-700/70">
            ตั้งอยู่ในทำเลที่เดินทางสะดวก ใกล้แหล่งท่องเที่ยวสำคัญ
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl shadow-soft h-[360px] lg:h-[480px]">
              <iframe
                title="Hotel Location"
                src={location.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-white p-8 shadow-soft flex flex-col">
              <h3 className="font-display text-2xl text-ink-900 mb-6">
                {location.label}
              </h3>

              <ul className="space-y-5 mb-8">
                <li className="flex gap-4">
                  <MapPin className="text-accent shrink-0" size={20} />
                  <span className="text-ink-700/80 text-sm leading-relaxed">
                    {contact.address}
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-accent shrink-0" size={20} />
                  <a
                    href={contact.phoneHref}
                    className="text-ink-700/80 text-sm hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-accent shrink-0" size={20} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-ink-700/80 text-sm hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>

              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto"
              >
                <Navigation size={18} />
                นำทางไปยังโรงแรม
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
