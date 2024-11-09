import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  classname?: string;
}

const Logo: FC<LogoProps> = ({ classname }) => {
  return (
    <div className={`w-32 lg:w-40 ${classname}`}>
      <Link href={"/"}>
        <img src="/image/logo-nebulaa.svg" alt="nebula_logo" />
      </Link>
    </div>
  );
};

export default Logo;
