import { FC, ReactNode } from "react";

interface ContainerProps {
  classParent?: string;
  classChildren?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({
  classParent,
  classChildren,
  children,
}) => {
  return (
    <section className={`bg-[#FCEED5] px-2 pt-20 md:px-36 ${classParent}`}>
      <div
        className={`container mx-auto pb-6 text-blue-950 md:mb-0 ${classChildren}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
