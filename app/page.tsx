import Navbar from "@/Components/Navbar";
import styles from './style'
import Hero from "@/Components/Hero";
import Stats from "@/Components/Stats";
import Business from "@/Components/Business";
import Billing from "@/Components/Billing";
import CardDeal from "@/Components/CardDeal";
import Testimonials from "@/Components/Testimonials";
import Clients from "@/Components/Clients";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar/>
        </div>
      </div>
      <div className="bg-pirmary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className="xl:max-w-[1280px] w-full">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
    </div>
  );
}
