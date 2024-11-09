import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  src: string;
  title: string;
  description: string;
}

const ProductHeroCard: FC<ProductCardProps> = ({ src, title, description }) => {
  return (
    <div className="mb-6 flex w-full flex-row overflow-hidden rounded-lg border shadow-md">
      <div className="relative w-1/3">
        <Image
          src={src}
          alt={title}
          className="rounded-l-lg"
          layout="fill"
          objectFit="scale-down"
        />
      </div>

      <div className="flex w-2/3 flex-col justify-center p-4 text-left">
        <h2 className="mb-2 text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductHeroCard;