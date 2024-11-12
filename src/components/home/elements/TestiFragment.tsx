import React, { FC } from "react";
import { TestiCard } from "./TestiCard";
import Image from "next/image";
import { RatingElement } from "./Rating";

interface TestiFragmentProps {
  src: string;
  alt: string;
  name: string;
}

const TestiFragment: FC<TestiFragmentProps> = ({ src, alt, name }) => {
  return (
    <div>
      <TestiCard />
      <div className="my-4 flex items-center gap-2 pl-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-600">
          <Image
            src={src}
            alt={alt}
            width={56}
            height={56}
            className="h-[56px] rounded-full object-cover"
          />
        </div>
        <div>
          <p>{name}</p>
          <RatingElement />
        </div>
      </div>
    </div>
  );
};

export default TestiFragment;
