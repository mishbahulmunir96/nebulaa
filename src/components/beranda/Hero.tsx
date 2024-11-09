import Image from "next/image";
import Container from "../Container";

const Hero = () => {
  return (
    <Container
      classParent="md:h-screen"
      classChildren="md:grid md:grid-cols-[1.2fr_0.8fr] h-full"
    >
      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left">
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
      <div className="flex justify-center md:flex-col md:items-end">
        <div>
          <Image
            src="/image/logo-nebula-hero.svg"
            alt="nebulaa"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
