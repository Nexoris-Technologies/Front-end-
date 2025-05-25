import SeoKey from "./Key Benefit/Keys";
import ScalePlan from "./Scale Plan/Scale";
import SeoChoose from "./Seo choice/Choose";
import SeoCovers from "./Seo covers/Seocovers";

import SeoHelp from "./Seo help/Seohelp";
import SeoHero from "./Seo Hero/Seohero";
import SeoProblemsSolves from "./Seo problems solved/Seosolvings";
import SeoProcess from "./Seo process/Seoprocess";
import Quest from "./SeoQuest/Quest";

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
