// components/Pagination.tsx

"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav className="flex justify-center mt-8 space-x-2">
      {currentPage > 1 && (
        <Link href={createPageLink(currentPage - 1)}>
          <a className="px-4 py-2 bg-gray-200 rounded">Previous</a>
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link key={page} href={createPageLink(page)}>
          <a
            className={`px-4 py-2 rounded ${
              page === currentPage ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </a>
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={createPageLink(currentPage + 1)}>
          <a className="px-4 py-2 bg-gray-200 rounded">Next</a>
        </Link>
      )}
    </nav>
  );
}
