import Header from "@/components/v3/Header";
import Hero from "@/components/v3/Hero";
import Promotion from "@/components/v3/Promotion";
import Rooms from "@/components/v3/Rooms";
import Experience from "@/components/v3/Experience";
import PriceTable from "@/components/v3/PriceTable";
import Footer from "@/components/v3/Footer";
import StickyMobileBar from "@/components/v3/StickyMobileBar";

export default function V3Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promotion />
        <Rooms />
        <Experience />
        <PriceTable />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
