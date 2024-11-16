import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  classname?: string;
}

const Logo: FC<LogoProps> = ({ classname }) => {
  return (
    <div className={`h-20 w-32 lg:w-40 ${classname}`}>
      <Link href={"/"} className="h-full w-full">
        <Image
          src="/images/logo-nebulaa.svg"
          alt="nebula_logo"
          width={160}
          height={80}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
