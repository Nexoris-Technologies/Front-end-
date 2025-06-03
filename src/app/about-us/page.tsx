import AboutNexoris from "../../components/about-us-page/AboutNexoris";
import Breadcrumbs from "@/components/Breadcrumbs";
import {StyledContainer} from "@/app/styles";

export default function AboutUs() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "About Us", href: "/about-us", isCurrentPage: true },
  ];
  return (
    <main>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div>
        <AboutNexoris />
      </div>
    </main>
  );
}
