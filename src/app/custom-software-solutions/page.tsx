import Custom from "@/components/Custome-Software-Solutions/Custom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";

export const revalidate = 60;

export default function SoftwareSolutions() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    {
      name: "Custom Software Solutions",
      href: "/custom-software-solutions",
      isCurrentPage: true,
    },
  ];
  return (
    <section>
      <StyledContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </StyledContainer>
      <Custom />
    </section>
  );
}
