import Container from "../Container";
import { BlogCard } from "./elements/BlogCard";

const BlogSection = () => {
  return (
    <Container classParent="pt-10 pb-10">
      <h3 className="mb-2 font-medium">Blogs</h3>
      <h2 className="mb-4 text-2xl font-bold">Inspirasi & Tips</h2>
      <div className="grid grid-cols-3 gap-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
};

export default BlogSection;
