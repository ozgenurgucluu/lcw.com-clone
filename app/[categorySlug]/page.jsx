import ListProducts from "@/components/ListProducts";
import React from "react";

const CategorySlug = async ({ params }) => {
  const { categorySlug } = await params;
  const categoryProducts = await fetch(
    `http://localhost:3001/products?_embed=categories&_embed=seller&categoryId=${categorySlug}`
  ).then((res) => res.json());

  return (
    <div>
      <ListProducts products={categoryProducts} />
    </div>
  );
};

export default CategorySlug;
