"use client";

import { FC, useEffect, useState } from "react";
import FilterList from "./elements/FilterList";
import ListProductPage from "./elements/ListProductPage";
import { getProducts } from "@/lib/contentful";

interface Product {
  entryId: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating?: number;
  category: string;
}

const ProductSectionPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    Semua: true,
    Buket: false,
    "Box Hantaran": false,
    FlowerBox: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      console.log(fetchedProducts);

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };

      if (id !== "Semua" && newCheckedItems[id]) {
        newCheckedItems["Semua"] = false;
      }

      if (id === "Semua") {
        Object.keys(newCheckedItems).forEach((key) => {
          if (key !== "Semua") {
            newCheckedItems[key] = false;
          }
        });
      }

      return newCheckedItems;
    });
  };

  const filteredProducts = products.filter((product) => {
    if (checkedItems["Semua"]) return true;
    return Object.keys(checkedItems).some(
      (key) => checkedItems[key] && product.category === key,
    );
  });

  return (
    <div className="bg-slate-200 px-4">
      <div className="flex w-full flex-col justify-between py-12 md:flex-row">
        <FilterList
          className="block md:hidden"
          checkedItems={checkedItems}
          onCheckboxChange={handleCheckboxChange}
        />
        <FilterList
          className="hidden md:block"
          checkedItems={checkedItems}
          onCheckboxChange={handleCheckboxChange}
        />
        <ListProductPage products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductSectionPage;
