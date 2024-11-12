import { FC } from "react";
import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import { Blog } from "@/types/blog";
import BlogCard from "./elements/BlogCard";

interface BlogSectionProps {
  blogs: Blog[];
}

const BlogSection: FC<BlogSectionProps> = ({ blogs }) => {
  return (
    <Container classParent="pt-8 md:pt-20 bg-white">
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
