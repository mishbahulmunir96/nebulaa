"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Menu from "../elements/Menu";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface MenuBarProps {
  classname?: string;
}

const MenuBar: FC<MenuBarProps> = ({ classname }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log("Clicked outside:", event.target);
    console.log("MenuRef current:", menuRef.current);

    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative my-5 md:static md:flex md:items-center md:justify-center ${classname}`}
    >
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <HiX size={24} className="text-slate-600" />
        ) : (
          <HiOutlineMenu size={24} className="text-slate-600" />
        )}
      </div>

      <ul
        ref={menuRef}
        className={`${isOpen ? "flex" : "hidden"} absolute -left-2 top-[52px] flex-col rounded-md bg-white px-3 py-1 md:static md:flex md:flex-row md:items-center md:justify-between md:bg-transparent`}
      >
        <Menu
          href={"/"}
          classname="rounded-lg md:px-6 md:py-3 transition-all duration-300 ease-in-out hover:font-semibold"
        >
          Beranda
        </Menu>
        <Menu
          href={"/about"}
          classname="rounded-lg md:px-6 md:py-3 transition-all duration-300 ease-in-out hover:font-semibold"
        >
          About
        </Menu>
        <Menu
          href={"/product"}
          classname="rounded-lg md:px-6 md:py-3 transition-all duration-300 ease-in-out hover:font-semibold"
        >
          Product
        </Menu>
        <Menu
          href={"/team"}
          classname="rounded-lg md:px-6 md:py-3 transition-all duration-300 ease-in-out hover:font-semibold"
        >
          Team
        </Menu>
      </ul>
    </div>
  );
};

export default MenuBar;
