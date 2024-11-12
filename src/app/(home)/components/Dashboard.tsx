import BlogSection from "@/components/beranda/BlogSection";
import Hero from "@/components/beranda/Hero";
import ProductSection from "@/components/beranda/ProductSection";
import TestiSection from "@/components/beranda/TestiSection";
import Pagination from "@/components/Pagination";
import { getEntries } from "@/lib/contentful";
import { FC } from "react";

interface DashboardProps {
  page: number;
}

const Dashboard: FC<DashboardProps> = async ({ page }) => {
  const blogs = await getEntries(page || 1);

  if (!blogs) {
    return;
  }

  return (
    <>
      <Hero />
      <ProductSection />
      <TestiSection />
      <BlogSection blogs={blogs.data} />
      <Pagination limit={blogs.meta.limit} total={blogs.meta.total} />
    </>
  );
};

export default Dashboard;
