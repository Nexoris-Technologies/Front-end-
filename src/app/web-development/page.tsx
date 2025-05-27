import Competition from "@/components/Web-development-service/competition";
import Faqs from "@/components/Web-development-service/Faqs";
import Benefits from "@/components/Web-development-service/Benefits";
import Process from "@/components/Web-development-service/Process";
import Problems from "@/components/Web-development-service/Problems";
import ServiceCover from "@/components/Web-development-service/ServiceCover";
import Help from "@/components/Web-development-service/Help";
import Choose from "@/components/Web-development-service/Choose";

import Website from "@/components/Web-development-service/Website";
import BackedBy from "@/components/Web-development-service/BackedBy";

function WebDevelopment() {
  return (
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
}

export default WebDevelopment;
