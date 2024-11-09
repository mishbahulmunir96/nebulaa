import BlogSection from "@/components/beranda/BlogSection";
import Hero from "@/components/beranda/Hero";
import ProductSection from "@/components/beranda/ProductSection";
import Testimoni from "@/components/beranda/Testimoni";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <Testimoni />
      <BlogSection />
    </>
  );
};

export default Dashboard;
