import { FC } from "react";

interface AboutHeroCardProps {
  title: string;
  description: string;
}

const AboutHeroCard: FC<AboutHeroCardProps> = ({ title, description }) => {
  return (
    <div className="mt-0 w-full text-center">
      <h1 className="my-6 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h1>
      <p className="text-xl font-normal text-slate-900">{description}</p>
    </div>
  );
};

export default AboutHeroCard;
