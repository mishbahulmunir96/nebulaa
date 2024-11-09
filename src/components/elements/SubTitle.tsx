import { FC, ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle: FC<SubTitleProps> = ({ children }) => {
  return <h3 className="mb-2 font-medium">{children}</h3>;
};

export default SubTitle;
