import { FC } from "react";

interface LogoProps {
  classname?: string;
}

const Logo: FC<LogoProps> = ({ classname }) => {
  return (
    <div className={`w-32 lg:w-40 ${classname}`}>
      <img src="/image/logo-nebulaa.svg" alt="nebula_logo" />
    </div>
  );
};

export default Logo;
