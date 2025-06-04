import Serve from "@/components/Mobile-development-service/Servicepage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";

export default function ServiceMobileApplication() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    {
      name: "Mobile Developement Service",
      href: "/mobile-app-development",
      isCurrentPage: true,
    },
  ];
  return (
    <main>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <section>
        <div>
          <Serve />
        </div>
      </section>
    </main>
  );
}
