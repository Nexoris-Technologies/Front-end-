import BuiltFor from "@/components/common/HomePage/BuiltFor/BuiltFor";
import Everything from "./Everything to know/Everything";
import Hero from "./Herosection/Hero";
import Love from "./What you love/Love";
import Startup from "./Why start up/Startup";
import Tools from "@/components/common/HomePage/Tools/Tool";
<<<<<<< HEAD
import Ourprocess from "@/components/common/HomePage/OurProcess/OurProcess";
import Insight from "@/components/common/HomePage/Insights/Insights";
import Faqs from "@/components/common/HomePage/Faqs/Faqs";
import StrategyCall from "@/components/common/HomePage/StrategyCall/StrategyCall";
import Footer from "@/components/common/HomePage/Footer/Footer";
import TestimonialCarousel from "@/components/common/HomePage/OurClients/OurClients";
=======
import OurProcess from "@/components/common/HomePage/OurProcess/OurProcess";
import TestimonialCarousel from "@/components/common/HomePage/OurClients/OurClients";
import Insight from "@/components/common/HomePage/Insights/Insights";
import Faqs from "@/components/common/HomePage/Faqs/Faqs";
import StrategyCall from "@/components/common/HomePage/StrategyCall/StrategyCall";
>>>>>>> origin/master

export default function HomePage() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Startup />
      </div>
      <div>
        <Love />
      </div>
      <div>
        <Everything />
      </div>
<<<<<<< HEAD
      <div className="">
=======
      <div>
>>>>>>> origin/master
        <BuiltFor />
      </div>
      <div>
        <Tools />
      </div>
      <div>
<<<<<<< HEAD
        <Ourprocess />
=======
        <OurProcess />
>>>>>>> origin/master
      </div>
      <div>
        <TestimonialCarousel />
      </div>
      <div>
        <Insight />
      </div>
      <div>
        <Faqs />
      </div>
      <div>
        <StrategyCall />
      </div>
<<<<<<< HEAD
      <div>
        <Footer />
      </div>
=======
>>>>>>> origin/master
    </main>
  );
}
