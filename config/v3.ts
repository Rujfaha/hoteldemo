import { siteConfig } from "./site";

// /v3 demo — Mountain Retreat สไตล์สบายๆ โทนธรรมชาติ เน้นราคา + โปรโมชั่น
export const v3Config = {
  name: siteConfig.name,
  tagline: "Mountain Retreat — ปาย แม่ฮ่องสอน",
  hero: {
    eyebrow: "PRIVATE MOUNTAIN RETREAT",
    headline: "พักผ่อนช้าๆ\nท่ามกลางขุนเขา",
    subline:
      "คาบินหลังเล็กท่ามกลางสวนและวิวขุนเขา กลางหุบเขาปาย สำหรับการพักผ่อนที่ได้ยินเสียงลมและนก",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop",
    priceFrom: 1990,
  },
  promotion: {
    badge: "SUMMER DEAL",
    title: "อยู่ 3 คืน จ่ายเพียง 2 คืน",
    desc: "จองภายในเดือนนี้ รับฟรี! อาหารเช้าสำหรับ 2 ท่าน และ Welcome Drink ทุกคืน",
    discount: "30%",
    validUntil: "ถึง 30 มิ.ย. นี้เท่านั้น",
    code: "SUMMER30",
  },
  rooms: [
    {
      name: "Valley Cabin",
      desc: "คาบินหลังเล็กวิวทุ่ง พร้อมระเบียงส่วนตัว เหมาะสำหรับ 2 ท่าน",
      size: "28 ตร.ม.",
      guests: 2,
      original: 2500,
      price: 1990,
      image:
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
      includes: ["อาหารเช้า", "Wi-Fi", "ที่จอดรถ", "เครื่องทำน้ำอุ่น"],
    },
    {
      name: "Mountain View Loft",
      desc: "ห้องเพดานสูงพร้อมหน้าต่างบานใหญ่ เปิดรับวิวขุนเขายามเช้า",
      size: "38 ตร.ม.",
      guests: 2,
      original: 3500,
      price: 2790,
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop",
      includes: ["อาหารเช้า", "Wi-Fi", "ที่จอดรถ", "อ่างแช่ริมหน้าต่าง"],
      popular: true,
    },
    {
      name: "Family Pavilion",
      desc: "บ้านพักส่วนตัว 2 ห้องนอน พร้อมสนามหญ้าและมุมจุดไฟ",
      size: "65 ตร.ม.",
      guests: 4,
      original: 5900,
      price: 4590,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
      includes: ["อาหารเช้า 4 ท่าน", "Wi-Fi", "ที่จอดรถ", "Firepit"],
    },
  ],
  priceTable: [
    { season: "Low Season", months: "มิ.ย. — ส.ค.", rate: "1,990" },
    { season: "Regular", months: "ก.ย. — ต.ค., มี.ค. — พ.ค.", rate: "2,490" },
    { season: "High Season", months: "พ.ย. — ก.พ.", rate: "2,990" },
    { season: "Peak", months: "31 ธ.ค. — 2 ม.ค.", rate: "3,990" },
  ],
  experiences: [
    { title: "เดินป่าเช้า", desc: "ชมทะเลหมอกกับไกด์ท้องถิ่น" },
    { title: "Slow Breakfast", desc: "มื้อเช้าในสวน พร้อมกาแฟดริป" },
    { title: "Campfire Night", desc: "ก่อกองไฟเล่าเรื่อง ดูดาว" },
    { title: "Yoga ริมสระ", desc: "คลาสเล็กๆ ทุกเช้าวันหยุด" },
  ],
  contact: siteConfig.contact,
  location: {
    lat: 19.358,
    lng: 98.4361,
    label: `${siteConfig.name} — ปาย`,
    address: "อำเภอปาย จังหวัดแม่ฮ่องสอน 58130",
    get embedUrl() {
      return `https://www.google.com/maps?q=${this.lat},${this.lng}&hl=th&z=13&output=embed`;
    },
    get directionsUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}`;
    },
  },
};
