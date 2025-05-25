import CustomLogo from "@/components/Custome Software Solutions/custom logos/Logo";
import CustomeHeroPage from "@/components/Custome Software Solutions/Heropage/Hero";
import CustomBenefits from "./Key Benefit/Benefit";
import Help from "./Help/Help";

import CustomCoverService from "./Custom Covers/Covers";
import CustomProcess from "./Custom Process/Process";
import ProblemWeSolve from "./Problem we solve/Problem";
import WhyChooseCustom from "./Why choose us/Chooseus";
import FaqsCustom from "./FaqCustom/Faqcustom";
import CustomLaunch from "./Ready to launch/Customlaunch";

export default function Custom() {
  return (
    <main>
      <section>
        <div>
          <CustomeHeroPage />
        </div>
        <div>
          <CustomLogo />
        </div>
        <div>
          <CustomBenefits />
        </div>
        <div>
          <Help />
        </div>
        <div>
          <CustomCoverService />
        </div>
        <div>
          <CustomProcess />
        </div>
        <div>
          <ProblemWeSolve />
        </div>
        <div>
          <WhyChooseCustom />
        </div>
        <div>
          <FaqsCustom />
        </div>
        <div>
          <CustomLaunch />
        </div>
      </section>
    </main>
  );
}
