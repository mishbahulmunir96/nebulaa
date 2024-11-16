import { FC } from "react";
interface VmCardProps {
  title: string;
  value: string;
}
const VmCard: FC<VmCardProps> = ({ title, value }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-amber-200">
      <div className="bg-blue-950 px-5 py-2">
        <h1 className="text-xl font-medium tracking-tight text-slate-300">
          {title}
        </h1>
      </div>
      <p className="m-5 font-normal text-gray-700">{value}</p>
    </div>
  );
};

export default VmCard;
