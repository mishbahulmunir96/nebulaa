import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import ProductHomeCard from "./elements/ProductHomeCard";

const ProductSection = () => {
  return (
    <Container classParent="pt-8 md:pt-20 bg-slate-200">
      <div className="text-center">
        <Title className="text-base font-medium">Product Kami</Title>
        <SubTitle className="text-2xl font-bold">
          Dapatkan Product Terbaik Dari Kami Untuk Setiap Momen Spesialmu
        </SubTitle>

        <ProductHomeCard
          src="/images/buket.webp"
          title="Ragam Buket yang Menawan untuk Setiap Momen Spesial"
          description="Kami menawarkan berbagai jenis buket istimewa untuk melengkapi momen spesial Anda. Dari buket bunga yang klasik dan memikat, buket uang yang kreatif dan unik, hingga buket wisuda yang penuh makna. Tersedia dalam berbagai ukuran, mulai dari yang elegan dan sederhana hingga yang besar dan memukau. Temukan buket sempurna untuk setiap acara di koleksi kami!"
        />
        <ProductHomeCard
          src="/images/box-hantaran.webp"
          title="Jasa Penyewaan dan Hias Box Hantaran yang Elegan"
          description="Kami menyediakan layanan penyewaan dan hias box hantaran untuk momen istimewa Anda. Dengan berbagai pilihan desain yang elegan dan penuh estetika, setiap box dirancang untuk menambah kesan mewah dan berkesan pada acara Anda. Pastikan hantaran Anda tampil istimewa dengan sentuhan terbaik dari tim profesional kami."
        />
        <ProductHomeCard
          src="/images/flower-box.webp"
          title="Bloombox dan Flowerbox Eksklusif untuk Momen Spesial"
          description="Temukan keindahan dalam kesederhanaan dengan Bloombox dan Flowerbox kami. Dirangkai dengan sentuhan elegan dan menggunakan bunga-bunga pilihan terbaik, setiap kotak dirancang untuk membawa kebahagiaan dan kesan mewah. Cocok untuk hadiah atau dekorasi yang memukau, jadikan setiap momen lebih berarti dengan kreasi eksklusif kami."
        />
      </div>
    </Container>
  );
};

export default ProductSection;
