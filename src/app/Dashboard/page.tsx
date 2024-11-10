import BlogSection from "@/components/beranda/BlogSection";
import Hero from "@/components/beranda/Hero";
import ProductSection from "@/components/beranda/ProductSection";
import TestiSection from "@/components/beranda/TestiSection";
import { getEntries } from "@/lib/contentful";

const Dashboard = async () => {
  const blogs = await getEntries();

  if (!blogs) {
    return;
  }

  return (
    <>
      <Hero />
      <ProductSection />
      <TestiSection />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default Dashboard;
