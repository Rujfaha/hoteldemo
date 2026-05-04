"use client";

import { Calendar, Users, Baby } from "lucide-react";

function Field({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-5 py-4">
      <div className="text-[#0d9488]">{icon}</div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-700/60">
          {label}
        </div>
        <div className="flex items-baseline gap-2 leading-none text-ink-800">
          <span className="text-xl font-medium tabular-nums tracking-tight">
            {value}
          </span>
          {sub && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-ink-700/50">
              {sub}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookingBar() {
  return (
    <div className="grid grid-cols-1 divide-y divide-black/5 rounded-2xl bg-white shadow-soft md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:divide-x md:divide-y-0">
      <Field
        icon={<Calendar size={22} />}
        label="Arrival Date"
        value="20 April"
        sub="Mon"
      />
      <Field
        icon={<Calendar size={22} />}
        label="Departure Date"
        value="27 April"
        sub="Mon"
      />
      <Field icon={<Users size={22} />} label="Adults" value="2" />
      <Field icon={<Baby size={22} />} label="Children" value="1" />
      <div className="flex items-center justify-center p-4">
        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#0d9488] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#0f766e] md:w-auto"
        >
          Check Availability
        </a>
      </div>
    </div>
  );
}
