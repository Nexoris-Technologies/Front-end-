import FaqsMobile from "./Faqservice/Faqsmobile";
import HeroPage from "./HeroPage/Hero";
import Keys from "./Key Benefits/Benefits";
import Problem from "../Custome Software Solutions/Problems solves/Problems";
import OurProcess from "./Process/Process";
import Launch from "./Ready to launch/Launch";
import ServiceCovers from "./Service Covers/Covers";
import Help from "./Who we help/Help";
import WhyChoose from "./Why choose/Choose";

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
