import Contact from "@/components/Contactpage/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import {StyledContainer} from "@/app/styles";
export default function ContactUs() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Contact Us", href: "/contact-us", isCurrentPage: true },
  ];
  return (
    <main>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div>
        <Contact />
      </div>
    </main>
  );
}
