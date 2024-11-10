import { Blog } from "@/types/blog";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="mb-4 w-full md:max-w-sm">
      <div className="relative h-[200px] w-full">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>

      <h5 className="line-clamp-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="line-clamp-4 font-normal text-gray-700 dark:text-gray-400">
        {blog.description}
      </p>
    </Card>
  );
};

export default BlogCard;
