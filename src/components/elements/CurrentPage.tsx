import React, { FC } from "react";

interface CurrentPageProps {
  page: number;
}

const CurrentPage: FC<CurrentPageProps> = ({ page }) => {
  return (
    <p
      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      rel="prev"
    >
      {page}
    </p>
  );
};

export default CurrentPage;
