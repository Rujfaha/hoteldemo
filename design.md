สวมบทบาทเป็น Senior Fullstack Developer ช่วยสร้างหน้า Landing Page สำหรับโรงแรม/รีสอร์ทระดับพรีเมียม โดยใช้ Next.js (App Router), Tailwind CSS และ Framer Motion โดยมีข้อกำหนดดังนี้:

1. แนวทางดีไซน์ (Design Style): 
   - สไตล์ "Modern Luxury" เน้นความสะอาดตา หรูหรา ใช้ฟอนต์หัวข้อที่ดูแพง (เช่น Playfair Display) และมีการเคลื่อนไหวแบบ Smooth Scroll Animations
   - @hotel_ladingpage.webp

2. โครงสร้างหน้าเว็บ (Structure):
   - Hero Section: มีรูปภาพขนาดใหญ่เต็มจอพร้อมสโลแกน และปุ่ม "จองห้องพัก" ที่กดแล้วเลื่อนลงไปยังส่วนติดต่อ
   - Gallery Section: แสดงรูปภาพห้องพักแบบ Grid ที่รองรับ Mobile Responsive
   - Amenities: แสดงสิ่งอำนวยความสะดวก (Wi-Fi, สระว่ายน้ำ, อาหารเช้า) โดยใช้ Lucide Icons
   - Location & Map: ฝัง Google Maps (Google Maps Embed) ให้สามารถมองเห็นตำแหน่งโรงแรมชัดเจน 
     - พร้อมสร้างปุ่ม "นำทางไปยังโรงแรม" ที่เมื่อคลิกแล้วจะเปิด Google Maps ใน Tab ใหม่เพื่อนำทางตามพิกัดที่กำหนด (Lat, Long)
   - Contact CTA: ทำแถบ Sticky บาร์ที่ด้านล่างสำหรับหน้าจอมือถือ ให้มีปุ่ม "โทรเลย" และ "ติดต่อทาง LINE" ตลอดเวลา

3. เทคนิคและประสิทธิภาพ:
   - ใช้ Tailwind CSS ในการจัด Layout ทั้งหมด (เน้น Mobile First)
   - ใช้ Framer Motion ทำ Animation ตอนเลื่อนหน้าจอ (Fade in/Up)
   - โค้ดต้องสะอาด แบ่ง Component แยกส่วนชัดเจน (เช่น Header, Hero, Map, Footer)
   - กำหนดค่าพิกัดแผนที่ (Latitude, Longitude) และลิงก์ติดต่อต่างๆ ไว้ในไฟล์ config แยกต่างหาก เพื่อให้ง่ายต่อการแก้ไขภายหลัง

4. Tech Stack:
   - Next.js (TypeScript)
   - Tailwind CSS
   - Lucide React (Icons)
   - Framer Motion

ช่วยสร้างโครงสร้างไฟล์และเขียนโค้ดที่พร้อมนำไปใช้งานได้ทันที ให้ดูเหมือนงานราคาหลักหมื่นที่ลูกค้าเห็นแล้วต้องประทับใจ