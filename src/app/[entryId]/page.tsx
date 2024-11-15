import Container from "@/components/Container";
import { getEntry } from "@/lib/contentful";
import { Badge } from "flowbite-react";
import { notFound } from "next/navigation";
import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "@/lib/richtext-options";

interface BlogDetailProps {
  params: { entryId: string };
}

const BlogDetail: FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntry(params.entryId);

  if (!blog) {
    return notFound();
  }

  return (
    <Container>
      <Badge color="gray">{blog.category}</Badge>

      <h1 className="text-2xl font-bold md:text-4xl">{blog.title}</h1>

      <div className="flex items-center justify-between">
        <p className="text-sm">
          {format(blog.createdAt, "dd MMMM yyyy")} - {blog.author}
        </p>
      </div>

      <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-[400px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail blog"
          fill
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        {documentToReactComponents(blog.content, RICHTEXT_OPTIONS)}
      </section>
    </Container>
  );
};

export default BlogDetail;
