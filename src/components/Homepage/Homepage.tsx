import BuiltFor from "@/components/Homepage/BuiltFor";
import Everything from "./Everything";
import Hero from "./Hero";
import Love from "./Love";
import Startup from "./Startup";
import Tools from "@/components/Homepage/Tool";
import Ourprocess from "@/components/Homepage/OurProcess";
import Faqs from "@/components/Homepage/Faqs";
import StrategyCall from "@/components/Homepage/StrategyCall";

import TestimonialCarousel from "@/components/Homepage/OurClients";

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
