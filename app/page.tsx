import Navbar from "@/app/Components/Navbar";
import styles from './style'
import Hero from "@/app/Components/Hero";
import Stats from "@/app/Components/Stats";
import Business from "@/app/Components/Business";
import Billing from "@/app/Components/Billing";
import CardDeal from "@/app/Components/CardDeal";
import Testimonials from "@/app/Components/Testimonials";
import Clients from "@/app/Components/Clients";
import CTA from "@/app/Components/CTA";
import Footer from "@/app/Components/Footer";

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
