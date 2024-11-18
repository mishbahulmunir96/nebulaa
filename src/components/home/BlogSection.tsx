import { Blog } from "@/types/blog";
import { FC } from "react";
import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import BlogCard from "./elements/BlogCard";

interface BlogSectionProps {
  blogs: Blog[];
  total: number;
  limit: number;
}

const BlogSection: FC<BlogSectionProps> = ({ blogs, total, limit }) => {
  return (
    <Container classParent="pt-8 md:pt-20 bg-slate-200 ">
      <SubTitle className="text-center md:text-left">Blogs</SubTitle>
      <Title className="text-center md:text-left">Inspirasi & Tips</Title>
      <div className="gap-2 md:grid md:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default BlogSection;
