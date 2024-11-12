import Image from "next/image";
import Box from "../Box";
import Container from "../Container";

const HeroProduct = () => {
  return (
    <Container
      classParent="h-screen pt-32"
      classChildren="text-center  flex justify-center bg-[#FCEED5] rounded-xl pt-12 pb-12 px-8 relative overflow-hidden text-slate-200 bg-amber-200"
    >
      <div className="z-40 w-1/2">
        <Image
          src="/image/hero-product-page.svg"
          alt="perkumpulan buket-buket"
          width={500}
          height={300}
          className="absolute -bottom-11 left-4"
        />
      </div>
      <div className="z-40 my-auto w-1/2 text-right">
        <h1 className="py-12 text-3xl font-extrabold leading-none tracking-tight md:text-5xl">
          Momen Spesial Dimulai dari Sini
        </h1>
        <p className="text-lg font-normal">
          Temukan produk terbaik kami yang dirancang dengan sentuhan kreatif dan
          penuh makna.
        </p>
      </div>
      <Box className="-top-12 right-[450px] h-[650px] w-[550px] origin-bottom-right rotate-[70deg] bg-blue-950" />
    </Container>
  );
};

export default HeroProduct;
