import AboutNexoris from "../../components/about-us-page/AboutNexoris";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";

export default function AboutUs() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "About Us", href: "/about-us", isCurrentPage: true },
  ];
  return (
    <main className="mx-4 md:mx-6 lg:mx-12 xl:mx-18">
      <StyledContainer className=" font-serif text-md text-gray-400 ">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div className="px-4">
        <AboutNexoris />
      </div>
    </main>
  );
}
