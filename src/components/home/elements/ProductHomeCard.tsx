import Image from "next/image";
import { FC } from "react";

interface ProductHomeCardProps {
  src: string;
  title: string;
  description: string;
}

const ProductHomeCard: FC<ProductHomeCardProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="relative mb-6 flex w-full flex-col overflow-hidden rounded-lg border bg-white shadow-md md:h-[225px] md:flex-row">
      <div className="relative z-30 mx-auto mt-3 h-[250px] w-[330px] md:mx-auto md:my-auto md:ml-3 md:h-[200px] md:w-[300px]">
        <Image
          src={src}
          alt={title}
          className="rounded-lg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="z-30 flex flex-col justify-center p-4 md:w-2/3 md:text-left">
        <h2 className="mb-2 text-lg font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductHomeCard;
