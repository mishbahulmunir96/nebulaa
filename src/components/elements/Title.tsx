import { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}
const Title: FC<TitleProps> = ({ children, className }) => {
  return <h2 className={`mb-4 text-2xl font-bold ${className}`}>{children}</h2>;
};

export default Title;
