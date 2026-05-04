import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
import Rooms from "@/components/v2/Rooms";
import Vision from "@/components/v2/Vision";
import Restaurant from "@/components/v2/Restaurant";
import Testimonial from "@/components/v2/Testimonial";
import BlogNews from "@/components/v2/BlogNews";
import Footer from "@/components/v2/Footer";
import StickyMobileBar from "@/components/v2/StickyMobileBar";

export default function V2Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Vision />
        <Restaurant />
        <Testimonial />
        <BlogNews />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
