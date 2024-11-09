import ProductHeroCard from "../elements/ProductHeroCard";

const ProductSection = () => {
  return (
    <div className="px-2 py-10 lg:px-36">
      <div className="container mx-auto text-blue-900">
        <div className="text-center">
          <h3 className="mb-2 font-medium">Product Kami</h3>
          <h2 className="mb-4 text-2xl font-bold">
            Dapatkan Product Terbaik Dari Kami Untuk Setiap Momen Spesialmu
          </h2>

          <ProductHeroCard
            src="/image/overview-bouqet.png"
            title="Ragam Buket yang Menawan untuk Setiap Momen Spesial"
            description="Kami menawarkan berbagai jenis buket istimewa untuk melengkapi momen spesial Anda. Dari buket bunga yang klasik dan memikat, buket uang yang kreatif dan unik, hingga buket wisuda yang penuh makna. Tersedia dalam berbagai ukuran, mulai dari yang elegan dan sederhana hingga yang besar dan memukau. Temukan buket sempurna untuk setiap acara di koleksi kami!"
          />
          <ProductHeroCard
            src="/image/overview-bouqet.png"
            title="Jasa Penyewaan dan Hias Box Hantaran yang Elegan"
            description="Kami menyediakan layanan penyewaan dan hias box hantaran untuk momen istimewa Anda. Dengan berbagai pilihan desain yang elegan dan penuh estetika, setiap box dirancang untuk menambah kesan mewah dan berkesan pada acara Anda. Pastikan hantaran Anda tampil istimewa dengan sentuhan terbaik dari tim profesional kami."
          />
          <ProductHeroCard
            src="/image/overview-bouqet.png"
            title="Bloombox dan Flowerbox Eksklusif untuk Momen Spesial"
            description="Temukan keindahan dalam kesederhanaan dengan Bloombox dan Flowerbox kami. Dirangkai dengan sentuhan elegan dan menggunakan bunga-bunga pilihan terbaik, setiap kotak dirancang untuk membawa kebahagiaan dan kesan mewah. Cocok untuk hadiah atau dekorasi yang memukau, jadikan setiap momen lebih berarti dengan kreasi eksklusif kami."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
