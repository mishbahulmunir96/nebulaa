"use client";

import { useEffect, useState } from "react";
import Logo from "./elements/Logo";
import MenuBar from "./fragments/MenuBar";
import SearchBar from "./fragments/SearchBar";

const Navbar = () => {
  const [isBlured, setIsBlured] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlured(true);
      } else {
        setIsBlured(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 flex h-20 w-full items-center justify-center px-2 transition-all lg:px-36 ${isBlured ? "bg-blue-800/50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex h-full items-center justify-between">
        <Logo classname="order-2 lg:order-none"></Logo>
        <MenuBar classname="order-1 lg:order-none" />
        <SearchBar classname="order-3 lg:order-none" />
      </nav>
    </header>
  );
};

export default Navbar;
