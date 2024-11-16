import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GoStarFill } from "react-icons/go";

interface CardProductPageProps {
  src: string;
  title: string;
  description?: string;
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
  const phoneNumber = "6285225126631";
  const customMessage =
    "Halo, saya tertarik dengan produk Anda di website Nebulaa!";

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
      <div className="mb-5 mt-2.5 flex items-center gap-2">
        <span>
          <GoStarFill size={24} className="text-yellow-300" />
        </span>
        <Badge color="info">{rating.toFixed(1)}</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </span>
        <Link
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`}
          target="_blank" // Untuk membuka WhatsApp di tab baru
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Pesan
        </Link>
      </div>
    </Card>
  );
};

export default CardProductPage;
