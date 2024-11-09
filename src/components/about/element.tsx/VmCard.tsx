import React, { FC } from "react";
import { Card } from "flowbite-react";
interface VmCardProps {
  title: string;
  value: string;
}
const VmCard: FC<VmCardProps> = ({ title, value }) => {
  return (
    <Card className="max-w-sm">
      <h1 className="text-2xl font-medium tracking-tight dark:text-white">
        {title}
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400">{value}</p>
    </Card>
  );
};

export default VmCard;
