import Image from "next/image";
import Box from "../Box";
import Container from "../Container";

const HeroProduct = () => {
  return (
    <Container
      classParent="h-screen pt-32"
      classChildren="text-center  bg-[#FCEED5] rounded-xl pt-12 pb-12 px-8 relative overflow-hidden md:text-slate-200 bg-amber-200 h-[70vh]"
    >
      <div className="flex md:w-full">
        <div className="">
          <Image
            src="/images/hero-product-page.svg"
            alt="perkumpulan buket-buket"
            width={500}
            height={300}
            className="absolute -bottom-11 left-4 z-10"
          />
        </div>
        <div className="absolute top-0 z-30 mb-64 md:right-8 md:my-12 md:w-1/2 md:text-right">
          <h1 className="p-0 py-12 text-3xl font-extrabold leading-snug md:text-5xl">
            Momen Spesial Dimulai dari Sini
          </h1>
          <p className="p-0 text-xl font-semibold md:text-lg md:font-normal">
            Temukan produk terbaik kami yang dirancang dengan sentuhan kreatif
            dan penuh makna.
          </p>
        </div>
      </div>
      <Box className="right-36 z-0 h-[650px] w-[550px] origin-bottom-right rotate-[70deg] bg-blue-950 md:-top-12 md:right-[450px]" />
    </Container>
  );
};

export default HeroProduct;
