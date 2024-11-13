import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProductPageProps {
  src: string;
  title: string;
  description: string;
  price: number;
  rating?: number;
}

const CardProductPage: FC<CardProductPageProps> = ({
  src,
  title,
  description,
  price,
  rating = 0,
}) => {
  return (
    <Card className="max-w-sm">
      <div className="relative h-52 w-full overflow-hidden rounded-md">
        <Image src={src} alt={title} style={{ objectFit: "cover" }} fill />
      </div>
      <Link href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <div className="mb-5 mt-2.5 flex items-center">
        <span>{rating}</span>
        <Badge color="info">5.0</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>
        <Link
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </Link>
      </div>
    </Card>
  );
};

export default CardProductPage;
