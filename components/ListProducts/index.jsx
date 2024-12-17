"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListProducts = ({ products = [] }) => {
  return (
    <div className="p-2 bg-slate-50">
      {products.length > 0 ? (
        <div className=" grid grid-cols-6 gap-2 ">
          {products.map((product, index) => (
            <Link
              href={`/${product.categoryId}/${product.id}`}
              className=" flex-wrap hover:scale-[1.03] flex flex-col gap-4 rounded-md shadow-sm sm:p-4 p-2 "
              key={index}
            >
              <Image
                src={product.thumbnail}
                width={379}
                height={506}
                key={index}
                alt="resim"
                loader={({ src }) => src}
              />
              <h2 className="text-gray-800 ">{product.seller.title}</h2>
              <h2 className="line-clamp-2 text-overflow-ellipsis text-sm overflow-hidden text-black/65 ">
                {product.title}
              </h2>
              <h1 className="text-blue-700 font-semibold">
                {product.price.toFixed(2)}TL
              </h1>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ListProducts;
