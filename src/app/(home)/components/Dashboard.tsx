import BlogSection from "@/components/home/BlogSection";
import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import TestiSection from "@/components/home/TestiSection";
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
      {/* Pass total dan limit ke BlogSection */}
      <BlogSection
        blogs={blogs.data}
        total={blogs.meta.total}
        limit={blogs.meta.limit}
      />
    </>
  );
};

export default Dashboard;
