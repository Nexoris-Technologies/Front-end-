import About from "./About page/about";
import Build from "./Let's build/Build";
import What from "./What makes Us/What";
import WhatWeDo from "./What we do/Do";
import Who from "./Who we are/Who";
import Why from "./Why we do/Why";

export default function AboutNexoris() {
  return (
    <main>
      <div>
        <About />
      </div>
      <div>
        <Who />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div>
        <Why />
      </div>
      <div>
        <What />
      </div>
      <div>
        <Build />
      </div>
    </main>
  );
}
