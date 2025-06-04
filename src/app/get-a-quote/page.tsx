import Request from "@/components/Get-a-quote-button/Quotebtn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StyledContainer } from "@/components/styles";

export default function GetQ() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Get A Quote", href: "/get-a-quote", isCurrentPage: true },
  ];
  return (
    <div className="mt-22">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Request />
    </div>
  );
}
