"use client";
import { FC, useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";

interface SearchBarProps {
  classname?: string;
}

const SearchBar: FC<SearchBarProps> = ({ classname }) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenWidth = () =>
        setIsLargeScreen(window.innerWidth >= 1024);

      checkScreenWidth();
      window.addEventListener("resize", checkScreenWidth);
      return () => window.removeEventListener("resize", checkScreenWidth);
    }
  }, []);

  const handleSearchClick = () => {
    if (!isLargeScreen) {
      setShowInput(!showInput);
    }
  };
  return (
    <div className={`flex items-center space-x-2 ${classname} static`}>
      {(showInput || isLargeScreen) && (
        <input
          type="text"
          placeholder="Nyari apa?"
          className="absolute right-0 top-24 w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:static"
        />
      )}
      <button
        className="p-0 font-bold text-blue-900 lg:absolute lg:right-40"
        onClick={handleSearchClick}
      >
        <LuSearch size={24} className="text-slate-600" />
      </button>
    </div>
  );
};

export default SearchBar;
