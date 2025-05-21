import BuiltFor from "@/app/components/Homepage/BuiltFor/BuiltFor";
import Everything from "./Everything to know/Everything";
import Hero from "./Herosection/Hero";
import Love from "./What you love/Love";
import Startup from "./Why start up/Startup";
import Tools from "@/app/components/Homepage/Tool";
import Ourprocess from "@/app/components/Homepage/OurProcess/OurProcess";
import Faqs from "@/app/components/Homepage/Faqs/Faqs";
import StrategyCall from "@/app/components/Homepage/StrategyCall/StrategyCall";

import TestimonialCarousel from "@/app/components/Homepage/OurClients/OurClients";

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
      <div className="">
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
      <div></div>
      <div>
        <Faqs />
      </div>
      <div>
        <StrategyCall />
      </div>
      <div></div>
    </main>
  );
}
