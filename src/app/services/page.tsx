import BackedBy from "@/components/common/ServicePage1/BackedBy/BackedBy";
import Competition from "@/components/common/ServicePage1/Competition/competition";
import Faqs from "@/components/common/ServicePage1/FAQs/Faqs";
import Benefits from "@/components/common/ServicePage1/KeyBenefits/Benefits";
import Process from "@/components/common/ServicePage1/OurProcess/Process";
import Problems from "@/components/common/ServicePage1/ProblemsWeSolve/Problems";
import ServiceCover from "@/components/common/ServicePage1/WhatServiceCover/ServiceCover";
import Help from "@/components/common/ServicePage1/WhoWeHelp/Help";
import Choose from "@/components/common/ServicePage1/WhyChoose/Choose";
import Website from "@/components/common/ServicePage1/YourWebsite/Website";

function Services() {
 return(
  <section> 
   <Competition />
   <BackedBy />
   <Help />
   <ServiceCover />
   <Benefits />
   <Process />
   <Problems />
   <Choose />
   <Faqs />
   <Website />
  </section>
 );
};

export default Services;