import SeoContent from "@/components/Seo-content-service/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import {StyledContainer} from "@/app/styles";

export default function SeoMarketing() {
  const breadcrumbs = [
      { name: "Home", href: "/", isCurrentPage: false },
      { name: "SEO Content Marketing", href: "/seo-content-marketing", isCurrentPage: true },
    ];
  return (
    <main>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <div>
        <SeoContent />
      </div>
    </main>
  );
}
