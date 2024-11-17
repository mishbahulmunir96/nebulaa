import Image from "next/image";
import Container from "../Container";
import AboutHeroCard from "./element/AboutHeroCard";
import { Carousel } from "flowbite-react";

const AboutHero = () => {
  return (
    <Container
      classParent="h-screen bg-[#FCEED5] pb-20"
      classChildren="h-full mt-10 bg-amber-200 rounded-xl relative"
    >
      <div className="absolute opacity-10 md:left-72 md:opacity-20">
        <Image
          src="/images/logo-nebula-hero.svg"
          alt="logo-nebula"
          width={400}
          height={200}
        />
      </div>
      <Carousel className="md:px-16">
        <AboutHeroCard
          title="Tentang Kami"
          description="Selamat datang di Nebulaa, penyedia layanan terbaik untuk kebutuhan buket, gift, dan penyewaan box hantaran Anda. Kami berdedikasi untuk membantu pelanggan merayakan momen-momen spesial dengan cara yang indah dan penuh makna."
        />
        <AboutHeroCard
          title="Sejarah Kami"
          description="Didirikan pada tahun [tahun berdiri], [Nama Perusahaan] bermula dari hasrat kami untuk menciptakan rangkaian buket yang unik dan layanan hantaran yang elegan. Berkat dedikasi dan kerja keras, kami berkembang dari usaha kecil menjadi penyedia layanan yang dipercaya oleh banyak pelanggan setia."
        />
        <AboutHeroCard
          title="Nilai-nilai Perusahaan"
          description="Kami menjunjung tinggi kreativitas, integritas, dan komitmen terhadap kepuasan pelanggan. Nilai-nilai ini mendorong kami untuk terus menghadirkan produk-produk yang tidak hanya menarik secara visual, tetapi juga bermakna dalam setiap detailnya."
        />
      </Carousel>
    </Container>
  );
};

export default AboutHero;
