import { Card } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

interface TeamCardProps {
  src: string;
  name: string;
  alt: string;
  position: string;
  description: string;
}
const TeamCard: FC<TeamCardProps> = ({
  src,
  name,
  alt,
  position,
  description,
}) => {
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
        <Image
          alt={alt}
          height="96"
          src={src}
          width="96"
          style={{ objectFit: "cover" }}
          className="mb-3 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h5 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p>{position}</p>
        </div>
      </div>
      <p className="line-clamp-3 font-normal text-gray-700 dark:text-gray-400 md:line-clamp-4">
        {description}
      </p>
    </Card>
  );
};

export default TeamCard;
