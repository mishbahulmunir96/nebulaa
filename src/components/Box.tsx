import { FC } from "react";

interface BoxProps {
  className: string;
}

const Box: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`absolute h-[400px] w-[400px] rounded-[70px] bg-amber-200 ${className}`}
    ></div>
  );
};

export default Box;
