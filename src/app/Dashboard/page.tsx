import BlogSection from "@/components/beranda/BlogSection";
import Hero from "@/components/beranda/Hero";
import ProductSection from "@/components/beranda/ProductSection";
import TestiSection from "@/components/beranda/TestiSection";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <TestiSection />
      <BlogSection />
    </>
  );
};

export default Dashboard;
