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

interface ProductFields {
  title: string;
  category: string;
  description: string;
  thumbnail: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  price: number;
  rating?: number;
}

export const getProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "product",
    });

    const products = response.items.map((product: ResponseEntry) => ({
      entryId: product.sys.id,
      title: product.fields.title,
      description: product.fields.description,
      thumbnail: "https:" + product.fields.thumbnail.fields.file.url,
      price: product.fields.price,
      rating: product.fields.rating,
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getEntry = async (entryId: string) => {
  try {
    const response: ResponseEntry = await client.getEntry(entryId);

    return {
      entryId: response.sys.id,
      title: response.fields.title,
      description: response.fields.description,
      thumbnail: "https:" + response.fields.thumbnail.fields.file.url,
      author: response.fields.author,
      category: response.fields.category,
      createdAt: response.fields.createdAt,
      content: response.fields.content,
    };
  } catch (error) {
    console.log(error);
  }
};
