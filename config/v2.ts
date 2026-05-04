import { siteConfig } from "./site";

// /v2 demo — ใช้ชื่อ & contact เดียวกับของเดิม แต่เปลี่ยนสถานที่เป็นเกาะสมุย
export const v2Config = {
  name: siteConfig.name,
  tagline: "Beachfront Luxury บนเกาะสมุย",
  hero: {
    headline: "Wherever You Go,\nStay With us!",
    subline:
      "ดื่มด่ำกับวิวทะเลสีคราม ทรายขาวละเอียด และบริการระดับพรีเมียม ในรีสอร์ทริมหาดสุดเอ็กซ์คลูซีฟบนเกาะสมุย",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  contact: siteConfig.contact,
  location: {
    lat: 9.5018,
    lng: 99.9648,
    label: `${siteConfig.name}, เกาะสมุย`,
    address: "ตำบลบ่อผุด อำเภอเกาะสมุย จังหวัดสุราษฎร์ธานี 84320",
    get embedUrl() {
      return `https://www.google.com/maps?q=${this.lat},${this.lng}&hl=th&z=14&output=embed`;
    },
    get directionsUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}`;
    },
  },
};
