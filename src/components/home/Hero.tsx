import Image from "next/image";
import Container from "../Container";
import Box from "../Box";

const Hero = () => {
  return (
    <Container
      classParent="md:h-screen relative overflow-hidden"
      classChildren="md:grid md:grid-cols-[1.2fr_0.8fr] h-full "
    >
      <div className="z-40 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold leading-snug">
            <span className="text-[56px]">Rangkai Keindahan</span> <br />&
            Kenangan Bersama Kami
          </h1>
          <p className="font-medium leading-6 text-gray-700">
            Temukan berbagai pilihan buket bunga, gift istimewa, dan layanan
            penyewaan serta hias box hantaran yang elegan untuk setiap momen
            spesial Anda. Kami menghadirkan produk berkualitas, menjadikan
            setiap detail bermakna dan berkesan. Percayakan kebutuhan Anda pada
            kami dan rasakan layanan terbaik untuk menciptakan kenangan yang tak
            terlupakan.
          </p>
        </div>
      </div>
      <div className="z-40 flex justify-center md:flex-col md:items-end">
        <div>
          <Image
            src="/image/logo-nebula-hero.svg"
            alt="nebulaa"
            width={400}
            height={400}
          />
        </div>
      </div>

      <Box className="-bottom-12 right-0 z-30 h-[500px] w-[500px] origin-top-left rotate-[20deg]" />
      <Box className="-bottom-24 right-48 z-20 h-[500px] w-[200px] origin-top-left rotate-[8deg] bg-blue-950" />
    </Container>
  );
};

export default Hero;
