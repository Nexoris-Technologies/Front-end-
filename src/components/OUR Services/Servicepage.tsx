import HeroPage from "./HeroPage/Hero";
import Benefits from "./Key Benefits/Benefits";
import Problem from "./Problems solves/Problems";
import OurProcess from "./Process/Process";
import ServiceCovers from "./Service Covers/Covers";
import Help from "./Who we help/Help";

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
          <Benefits />
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
      </section>
    </main>
  );
}
