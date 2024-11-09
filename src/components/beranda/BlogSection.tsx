import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import { BlogCard } from "./elements/BlogCard";

const BlogSection = () => {
  return (
    <Container classParent="pt-10 pb-10">
      <SubTitle>Blogs</SubTitle>
      <Title>Inspirasi & Tips</Title>
      <div className="grid grid-cols-3 gap-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
};

export default BlogSection;
