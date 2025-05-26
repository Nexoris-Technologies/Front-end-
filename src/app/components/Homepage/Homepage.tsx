import Insight from "@/components/common/HomePage/Insights/Insights";
import Tools from "@/components/common/HomePage/Tools/Tool";
import BuiltFor from "@/components/Homepage/BuiltFor/BuiltFor";
import Everything from "@/components/Homepage/Everything to know/Everything";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import Hero from "@/components/Homepage/Herosection/Hero";
import TestimonialCarousel from "@/components/Homepage/OurClients/OurClients";
import Ourprocess from "@/components/Homepage/OurProcess/OurProcess";
import StrategyCall from "@/components/Homepage/StrategyCall/StrategyCall";
import Love from "@/components/Homepage/What you love/Love";
import Startup from "@/components/Homepage/Why start up/Startup";

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
      <div>
        <BuiltFor />
      </div>
      <div>
        <Tools />
      </div>
      <div>
        <Ourprocess />
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
    </main>
  );
}
