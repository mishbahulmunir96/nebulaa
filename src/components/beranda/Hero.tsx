import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#FCEED5] px-2 pt-20 lg:h-screen lg:px-36">
      <div className="container mx-auto mb-6 h-full lg:mb-0 lg:grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-center">
          <div className="text-blue-950">
            <h1 className="mb-6 text-4xl font-bold leading-snug">
              <span className="text-[56px]">Rangkai Keindahan</span> <br />&
              Kenangan Bersama Kami
            </h1>
            <p className="font-medium leading-6">
              Temukan berbagai pilihan buket bunga, gift istimewa, dan layanan
              penyewaan serta hias box hantaran yang elegan untuk setiap momen
              spesial Anda. Kami menghadirkan produk berkualitas, menjadikan
              setiap detail bermakna dan berkesan. Percayakan kebutuhan Anda
              pada kami dan rasakan layanan terbaik untuk menciptakan kenangan
              yang tak terlupakan.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:flex-col lg:items-end">
          <div>
            <Image
              src="/image/logo-nebula-hero.svg"
              alt="nebulaa"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
