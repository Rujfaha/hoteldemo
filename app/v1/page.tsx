import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import LocationMap from "@/components/LocationMap";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function V1Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <LocationMap />
        <ContactCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
