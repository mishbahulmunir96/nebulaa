"use client";

import { FC } from "react";
import CurrentPage from "./elements/CurrentPage";
import PaginationNext from "./elements/PaginationNext";
import PaginationPrev from "./elements/PaginationPrev";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  total: number;
  limit: number;
}

const Pagination: FC<PaginationProps> = ({ limit, total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(String(searchParams.get("page"))) || 1;

  const handleNextPage = () => {
    if (currentPage < Math.ceil(total / limit)) {
      router.push(`?page=${currentPage + 1}`);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  return (
    <nav
      className="flex items-center justify-center bg-slate-200 px-4 pb-8 md:px-6"
      aria-label="Pagination"
    >
      <div className="flex justify-between md:w-[35%]">
        <PaginationPrev onClick={handlePrevPage}></PaginationPrev>
        <CurrentPage page={currentPage} />
        <PaginationNext onClick={handleNextPage}></PaginationNext>
      </div>
    </nav>
  );
};

export default Pagination;
