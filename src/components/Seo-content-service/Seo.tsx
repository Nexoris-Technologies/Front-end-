import ScalePlan from "./Scale";
import SeoChoose from "./Choose";
import SeoCovers from "./Seocovers";

import SeoHelp from "./Seohelp";
import SeoHero from "./Seohero";
import SeoProblemsSolves from "./Seosolvings";
import SeoProcess from "./Seoprocess";
import Quest from "./Quest";
import SeoKey from "./Keys";

export default function SeoContent() {
  return (
    <section>
      <div>
        <SeoHero />
      </div>
      <div>
        <SeoKey />
      </div>
      <div>
        <SeoHelp />
      </div>
      <div>
        <SeoCovers />
      </div>
      <div>
        <SeoProcess />
      </div>
      <div>
        <SeoProblemsSolves />
      </div>
      <div>
        <SeoChoose />
      </div>
      <div>
        <ScalePlan />
      </div>
      <div>
        <Quest />
      </div>
    </section>
  );
}
