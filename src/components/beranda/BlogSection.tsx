import { BlogCard } from "../elements/BlogCard";

const BlogSection = () => {
  return (
    <div className="px-2 py-10 lg:px-36">
      <div className="container mx-auto text-blue-900">
        <h3 className="mb-2 font-medium">Blogs</h3>
        <h2 className="mb-4 text-2xl font-bold">Inspirasi & Tips</h2>
        <div className="grid grid-cols-3 gap-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
