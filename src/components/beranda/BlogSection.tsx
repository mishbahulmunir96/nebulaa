import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import { BlogCard } from "./elements/BlogCard";

const BlogSection = () => {
  return (
    <Container classParent="pt-8 md:pt-20 bg-white">
      <SubTitle className="text-center">Blogs</SubTitle>
      <Title className="text-center md:text-left">Inspirasi & Tips</Title>
      <div className="gap-2 md:grid md:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
};

export default BlogSection;
