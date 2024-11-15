import Image from "next/image";
import Container from "../Container";
import SocialMedia from "../fragments/SocialMedia";
import { Button } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <Container
      classParent=" bg-[#FCEED5] md:h-screen relative overflow-hidden"
      classChildren="md:grid md:grid-cols-[1.2fr_0.8fr] h-full "
    >
      <div className="z-40 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold leading-snug">
            <span className="text-[56px]">Rangkai Keindahan</span> <br />&
            Kenangan Bersama Kami
          </h1>
          <p className="font-medium leading-6 text-slate-900">
            Temukan berbagai pilihan buket bunga, gift istimewa, dan layanan
            penyewaan serta hias box hantaran yang elegan untuk setiap momen
            spesial Anda. Kami menghadirkan produk berkualitas, menjadikan
            setiap detail bermakna dan berkesan. Percayakan kebutuhan Anda pada
            kami dan rasakan layanan terbaik untuk menciptakan kenangan yang tak
            terlupakan.
          </p>
          <div className="mb-10 mt-8 flex w-full flex-col items-center justify-around gap-8 md:mb-0 md:flex-row">
            <SocialMedia className="w-full justify-around md:w-1/2 md:gap-16" />

            <Link href="/product">
              <Button pill className="flex items-center px-1 py-1 font-bold">
                Lihat Produk &nbsp; &gt;
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-40 flex justify-center md:flex-col md:items-end">
        <div>
          <Image
            src="/images/logo-nebula-hero.svg"
            alt="nebulaa"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* <Box className="-bottom-12 right-0 z-30 h-[500px] w-[500px] origin-top-left rotate-[20deg]" />
      <Box className="-bottom-24 right-48 z-20 h-[500px] w-[200px] origin-top-left rotate-[8deg] bg-blue-950" /> */}
    </Container>
  );
};

export default Hero;
