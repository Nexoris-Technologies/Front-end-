import HeroPage from "./Hero";

import ServiceCovers from "./Covers";

import Help from "./Help";
import WhyChoose from "./Choose";
import Launch from "./Launch";
import OurProcess from "./Process";
import FaqsMobile from "./Faqsmobile";
import Keys from "./Benefits";
import Problem from "./Problems";

export default function Serve() {
  return (
    <main>
      <section>
        <div>
          <HeroPage />
        </div>
        <div>
          <Help />
        </div>
        <div>
          <Keys />
        </div>
        <div>
          <Problem />
        </div>
        <div>
          <ServiceCovers />
        </div>
        <div>
          <OurProcess />
        </div>
        <div>
          <WhyChoose />
        </div>
        <div>
          <FaqsMobile />
        </div>
        <div>
          <Launch />
        </div>
      </section>
    </main>
  );
}
