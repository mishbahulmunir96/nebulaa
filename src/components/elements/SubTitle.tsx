import { FC, ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
  className?: string;
}

const SubTitle: FC<SubTitleProps> = ({ children, className }) => {
  return <h3 className={`mb-2 font-medium ${className}`}>{children}</h3>;
};

export default SubTitle;
