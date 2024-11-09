import Link from "next/link";
import { FC, ReactNode } from "react";

interface MenuProps {
  href: string;
  children: string;
  classname?: ReactNode;
}

const Menu: FC<MenuProps> = ({ href, children, classname }) => {
  return (
    <li className="mx-1 my-1 px-4 lg:m-0 lg:p-0">
      <Link
        href={href}
        className={`rounded-lg text-lg font-medium text-gray-900 no-underline transition-all duration-300 ease-in-out hover:font-semibold lg:px-6 lg:py-3 lg:text-base ${classname}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Menu;
