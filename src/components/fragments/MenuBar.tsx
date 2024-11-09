"use client";

import React, { FC, useState } from "react";
import Menu from "../elements/Menu";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface MenuBarProps {
  classname?: string;
}

const MenuBar: FC<MenuBarProps> = ({ classname }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative my-5 lg:static lg:flex lg:items-center lg:justify-center ${classname}`}
    >
      <div className="text-blue-900 lg:hidden" onClick={toggleMenu}>
        {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
      </div>

      <ul
        className={`${isOpen ? "flex" : "hidden"} absolute -left-2 top-[52px] flex-col rounded-md bg-yellow-400 px-3 py-1 lg:static lg:flex lg:flex-row lg:items-center lg:justify-between lg:bg-transparent`}
      >
        <div className="flex flex-col justify-center pl-1 text-lg font-bold text-blue-950 lg:hidden">
          <h3>Menu</h3>
        </div>
        <hr className="border border-slate-300" />
        <Menu href={"/"}>Beranda</Menu>
        <Menu href={"/about"}>About</Menu>
        <Menu href={"/product"}>Product</Menu>
        <Menu href={"/team"}>Team</Menu>
      </ul>
    </div>
  );
};

export default MenuBar;
