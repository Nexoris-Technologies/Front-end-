import Glance from "@/components/Ui-Ux-servicepage/Glance";
import Operators from "@/components/Ui-Ux-servicepage/Operators";
import Nexoris from "@/components/Ui-Ux-servicepage/Nexoris";
import Experiences from "@/components/Ui-Ux-servicepage/Experiences";
import Faqs from "@/components/Ui-Ux-servicepage/Faqs";
import Process from "@/components/Ui-Ux-servicepage/Process";
import WeSolve from "@/components/Ui-Ux-servicepage/WeSolve";
import Tired from "@/components/Ui-Ux-servicepage/Tired";

import WeHelp from "@/components/Ui-Ux-servicepage/WeHelp";
import Audit from "@/components/Ui-Ux-servicepage/Audit";
import Breadcrumbs from "@/components/Breadcrumbs";
import {StyledContainer} from "@/app/styles";

function UiUxDesign() {
  const breadcrumbs = [
      { name: "Home", href: "/", isCurrentPage: false },
      { name: "UI UX Design Consulting", href: "/ui-ux-design-consulting", isCurrentPage: true },
    ];
  return (
    <section>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
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
}

export default UiUxDesign;
