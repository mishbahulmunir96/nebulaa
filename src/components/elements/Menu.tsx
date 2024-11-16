import Link from "next/link";
import { FC } from "react";

interface MenuProps {
  href: string;
  children: string;
  className?: string;
  classname?: string;
}

const Menu: FC<MenuProps> = ({ href, children, className, classname }) => {
  return (
    <li className={`mx-1 my-1 md:m-0 md:p-0`}>
      <Link
        href={href}
        className={`text-lg font-medium text-gray-900 no-underline md:text-base ${classname}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Menu;
