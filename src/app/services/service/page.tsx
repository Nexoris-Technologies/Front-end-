import Glance from "@/components/common/ServicePage2/BenefitAtaGlance/Glance";
import Operators from "@/components/common/ServicePage2/BuiltForOperators/Operators";
import Nexoris from "@/components/common/ServicePage2/ChooseNexoris/Nexoris";
import Experiences from "@/components/common/ServicePage2/DesignExperiences/Experiences";
import Faqs from "@/components/common/ServicePage2/FAQs/Faqs";
import Process from "@/components/common/ServicePage2/OurProcess/Process";
import WeSolve from "@/components/common/ServicePage2/ProblemWeSolve/WeSolve";
import Tired from "@/components/common/ServicePage2/Tired/Tired";
import Audit from "@/components/common/ServicePage2/UXAudit/Audit";
import WeHelp from "@/components/common/ServicePage2/WeHelp/WeHelp";

function Services() {
 return(
  <section> 
   <Experiences />
   <Operators />
   <Glance />
   <Audit />
   <WeHelp />
   <WeSolve />
   <Process />
   <Nexoris />
   <Faqs />
   <Tired />
  </section>
 );
};

export default Services;