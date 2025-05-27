import About from "./About-page/about";

import What from "./About-page/What";
import WhatWeDo from "./About-page/Do";
import Who from "./About-page/Who";
import Why from "./About-page/Why";
import Build from "./About-page/Build";

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
