import BlogSection from "@/components/home/BlogSection";
import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import TestiSection from "@/components/home/TestiSection";
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
