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
export const getEntries = async (page: number = 1) => {
  try {
    const limit = 3;

    const skip = (page - 1) * limit;
    const response = await client.getEntries({
      content_type: "blogNebulaa",
      order: ["-fields.createdAt"],
      limit,
      skip,
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

    return {
      data: blogs,
      meta: {
        total: response.total,
        limit: response.limit,
      },
    };
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
