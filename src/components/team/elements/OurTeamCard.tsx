import { Card } from "flowbite-react";
import Image from "next/image";
import React, { FC } from "react";

interface OurTeamCardProps {
  src: string;
  alt: string;
  name: string;
  position: string;
}

const OurTeamCard: FC<OurTeamCardProps> = ({ src, alt, name, position }) => {
  return (
    <Card
      className="max-w-sm overflow-hidden rounded-md"
      renderImage={() => <Image width={500} height={500} src={src} alt={alt} />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{position}</p>
    </Card>
  );
};

export default OurTeamCard;
