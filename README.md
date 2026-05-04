# Betria — Hotel Landing Page

Modern Luxury hotel/resort landing page built with **Next.js 14 (App Router) + TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Features

- Mobile-first responsive design
- Smooth scroll + Framer Motion fade-in animations
- Hero, Gallery (grid), Amenities (Lucide icons), Google Maps embed + directions, Contact CTA, Sticky mobile call/LINE bar
- Centralized config (`config/site.ts`) for contact info, coordinates, links

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- **Brand / nav / contact / coordinates** → `config/site.ts`
  - `location.lat`, `location.lng` ใช้คำนวณ Google Maps embed และปุ่ม "นำทางไปยังโรงแรม" อัตโนมัติ
  - `contact.phoneHref`, `contact.lineHref` ใช้กับ Sticky mobile bar
- **Hero image / room images**: ปรับใน `config/site.ts` และ `components/Gallery.tsx`
- **Theme colors / fonts**: `tailwind.config.ts`

## Build

```bash
npm run build
npm run start
```

## Tech Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS 3
- Framer Motion 11
- Lucide React
