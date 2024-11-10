import { createClient, FieldsType } from "contentful";

interface ResponseEntry {
  sys: {
    id: string;
  };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONTMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// mengambil banyak data sekaligus
export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogNebulaa",
    });

    const blogs = response.items.map((blog: ResponseEntry) => ({
      entryId: blog.sys.id,
      title: blog.fields.title,
      description: blog.fields.description,
      thumbnail: "https:" + blog.fields.thumbnail.fields.file.url,
      author: blog.fields.author,
      category: blog.fields.category,
      createdAt: blog.fields.createdAt,
      content: blog.fields.content,
    }));

    return blogs;
  } catch (error) {
    console.log(error);
  }
};

// mengambil satu data saja
// export const getEntry = async (entryId: string) => {
//   try {
//     const response = await client.getEntry(entryId);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
