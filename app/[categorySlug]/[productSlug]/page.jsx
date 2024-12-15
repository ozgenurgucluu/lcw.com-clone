import ProductDetail from "@/components/ProductDetail";
import React from "react";

const ProductSlug = async ({ params }) => {
  const { productSlug } = await params;
  const productDetail = await fetch(
    `http://localhost:3001/products/${productSlug}?_embed=seller&_embed=category`
  ).then((res) => res.json());

  const isCart = await fetch(
    `http://localhost:3001/cart?productId=${productSlug}`
  ).then((res) => res.json());
  console.log("burası", isCart);
  

  return (
    <div>
      <ProductDetail
        {...productDetail}
        isCart={isCart.length > 0 ? true : false}
      />
    </div>
  );
};

export default ProductSlug;
