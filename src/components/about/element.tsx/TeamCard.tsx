import { Card } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

interface TeamCardProps {
  src: string;
  name: string;
  position: string;
  description: string;
}
const TeamCard: FC<TeamCardProps> = ({ src, name, position, description }) => {
  return (
    <Card className="max-w-sm">
      <div className="flex gap-1">
        <Image
          alt="Bonnie image"
          height="96"
          src={src}
          width="96"
          style={{ objectFit: "cover" }}
          className="mb-3 rounded-full shadow-lg"
        />
        <div>
          <h5 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p>{position}</p>
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default TeamCard;
