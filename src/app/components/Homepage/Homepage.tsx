import Everything from "./Everything to know/Everything";
import Hero from "./Herosection/Hero";
import Love from "./What you love/Love";
import Startup from "./Why start up/Startup";

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
    </main>
  );
}
