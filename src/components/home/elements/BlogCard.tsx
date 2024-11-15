import { Blog } from "@/types/blog";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/${blog.entryId}`}>
      <Card className="mb-4 w-full bg-white md:max-w-sm">
        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            style={{ objectFit: "cover" }}
            fill
          />
        </div>

        <h5 className="line-clamp-2 text-2xl font-bold tracking-tight text-gray-900">
          {blog.title}
        </h5>
        <p className="line-clamp-4 font-normal text-gray-700">
          {blog.description}
        </p>
      </Card>
    </Link>
  );
};

export default BlogCard;
