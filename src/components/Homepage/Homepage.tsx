import Insight from "@/components/Homepage/Insights";

import Everything from "@/components/Homepage/Everything";
import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";
import TestimonialCarousel from "@/components/Homepage/OurClients";
import Ourprocess from "@/components/Homepage/OurProcess";
import StrategyCall from "@/components/Homepage/StrategyCall";
import Love from "@/components/Homepage/Love";
import Startup from "@/components/Homepage/Startup";
import Tools from "@/components/Homepage/Tool";
import BuiltFor from "./BuiltFor";

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
