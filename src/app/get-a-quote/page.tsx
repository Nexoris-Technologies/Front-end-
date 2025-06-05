import Request from "@/components/Get-a-quote-button/Quotebtn";
import Breadcrumbs from "@/components/Breadcrumbs";

export const revalidate = 60;

export default function GetQ() {
  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Get a Quote", href: "/get-a-quote", isCurrentPage: true },
  ];
  return (
    <div className="mt-22 mx-4 md:mx-6 lg:mx-12 xl:mx-18">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Request />
    </div>
  );
}
