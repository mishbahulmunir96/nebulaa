"use client";

import { FC, useEffect, useState } from "react";
import FilterList from "./elements/FilterList"; // Pastikan path ini benar
import ListProductPage from "./elements/ListProductPage";
import { getProducts } from "@/lib/contentful"; // Pastikan path ini benar

interface Product {
  entryId: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating?: number; // Jika rating ada
}

const ProductSectionPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Menetapkan tipe untuk state

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      console.log(fetchedProducts);

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4">
      <div className="flex w-full justify-between py-12">
        <FilterList />
        <ListProductPage products={products} />
      </div>
    </div>
  );
};

export default ProductSectionPage;
