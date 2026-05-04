export const siteConfig = {
  name: "Arkkarawin Hotel",
  tagline: "เสน่ห์แห่งล้านนา กลางเมืองน่าน",
  hero: {
    headline: "พักผ่อนอย่างมีระดับ ใจกลางเมืองน่าน",
    subline:
      "สัมผัสบรรยากาศอันอบอุ่นแบบล้านนา ผสานความหรูหราร่วมสมัย ท่ามกลางขุนเขาและวัฒนธรรมเมืองน่านอันงดงาม",
    image:
      "https://plus.unsplash.com/premium_photo-1661874901387-7d272fa36c43?q=80&w=1095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  contact: {
    phone: "099 382 2802",
    phoneHref: "tel:+66993822802",
    line: "@arkkarawinhotel",
    lineHref: "https://line.me/R/ti/p/@arkkarawinhotel",
    email: "zegram5599@gmail.com",
    address: "อำเภอเมืองน่าน จังหวัดน่าน 55000",
    facebook: "Arkkarawin Rujiprach",
    facebookHref:
      "https://web.facebook.com/arkkarawin.rujiprach.5/?locale=th_TH",
  },
  // พิกัดใจกลางเมืองน่าน — ปรับเป็นพิกัดโรงแรมจริงได้
  location: {
    lat: 18.7756,
    lng: 100.773,
    label: "Arkkarawin Hotel, จังหวัดน่าน",
    // Embed ผ่าน Google Maps (ไม่ต้องใช้ API key สำหรับ embed แบบ q=)
    get embedUrl() {
      return `https://www.google.com/maps?q=${this.lat},${this.lng}&hl=th&z=15&output=embed`;
    },
    get directionsUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}`;
    },
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
