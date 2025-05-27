import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
  isCurrentPage: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex flex-wrap items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                /
              </span>
            )}
            {breadcrumb.isCurrentPage ? (
              <span aria-current="page" className="text-gray-800 font-medium">
                {breadcrumb.name}
              </span>
            ) : (
              <Link href={breadcrumb.href} className="hover:underline">
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
