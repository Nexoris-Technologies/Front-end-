import Contact from "@/components/Contactpage/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";
export default function ContactUs() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Contact Us", href: "/contact-us", isCurrentPage: true },
  ];
  return (
    <main className="mx-4 md:mx-6 lg:mx-12 xl:mx-18">
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div>
        <Contact />
      </div>
    </main>
  );
}
