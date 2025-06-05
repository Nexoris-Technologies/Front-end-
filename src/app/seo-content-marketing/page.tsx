import SeoContent from "@/components/Seo-content-service/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";

export const revalidate = 60;

export default function SeoMarketing() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    {
      name: "SEO Content Marketing",
      href: "/seo-content-marketing",
      isCurrentPage: true,
    },
  ];
  return (
    <main className="mx-4 md:mx-6 lg:mx-12 xl:mx-18">
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div>
        <SeoContent />
      </div>
    </main>
  );
}
