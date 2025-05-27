import CustomLogo from "@/components/Custome-Software-Solutions/Logo";
import CustomeHeroPage from "@/components/Custome-Software-Solutions/Hero";
import CustomBenefits from "./Benefit";
import Help from "./Help";

import CustomProcess from "./Process";
import ProblemWeSolve from "./Problem";
import WhyChooseCustom from "./Chooseus";
import FaqsCustom from "./Faqcustom";
import CustomLaunch from "./Customlaunch";
import CustomCoverService from "./Covers";

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
