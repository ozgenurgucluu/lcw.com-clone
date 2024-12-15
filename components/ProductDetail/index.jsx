"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/icons/StarIcon";
import { GiReturnArrow } from "react-icons/gi";
import { PiCoatHanger } from "react-icons/pi";

const ProductDetail = ({
  title,
  price,
  images = [],
  sellerId,
  categoryId,
  description,
  attributes,
  id,
  isCart,
}) => {
  const [addedCart, setAddedCart] = useState(isCart);

  const addToCart = () => {
    fetch(`http://localhost:3001/cart`, {
      method: "POST",
      body: JSON.stringify({
        productId: id,
      }),
    }).then(() => setAddedCart(true));
  };

  const removeFromCart = async () => {
    const cartItem = await fetch(
      `http://localhost:3001/cart?productId=${id}`
    ).then((res) => res.json());

    fetch(`http://localhost:3001/cart/${cartItem[0].id}`, {
      method: "DELETE",
    }).then(() => setAddedCart(false));
  };

  return (
    <div className="flex sm:gap-5 p-2 ">
      <div className="sm:grid grid-cols-2 gap-3  shadow-xl shadow-slate-100">
        {images.map((image, index) => (
          <Image
            loader={({ src }) => src}
            key={index}
            src={image}
            alt="product-image"
            width={600}
            height={825}
          />
        ))}
      </div>
      <div className="flex flex-col gap-7 pl-4 flex-1  ">
        <div className="flex flex-col   ">
          <span className="text-black/55 text-xs">
            {categoryId.toUpperCase("tr")}
          </span>
          <h1 className="text-black text-2xl leading-tight ">
            <Link
              href="/"
              className="text-blue-600 font-semibold mr-2 hover:underline cursor-pointer "
            >
              {sellerId.toUpperCase("tr")}
            </Link>
            {title}
          </h1>
        </div>
        <div>
          <div className="flex  items-center gap-2">
            <span className="text-yellow-500">
              <StarIcon />
            </span>
            <span>|</span>
            <span className="text-black/80 text-xs tracking-wide">
              İlk değerlendiren siz olun
            </span>
          </div>
          <div className="flex gap-3 ">
            <h5 className="text-black/85 text-sm">
              Satıcı :{" "}
              <span className="text-blue-600 text-sm font-semibold">
                {sellerId}
              </span>
              <span> (İade Süresi: 120 Gün)</span>
            </h5>
          </div>
        </div>
        <div className="border-b  border-black/25 "></div>
        <div className="text-blue-600 font-semibold  text-2xl">
          {price.toFixed(2)}TL
        </div>
        <div className="border-b  border-black/25 "></div>
        {!addedCart ? (
          <button
            onClick={addToCart}
            className="bg-blue-600 p-3 rounded-md text-white font-semibold  tracking-wide hover:bg-blue-800"
          >
            SEPETE EKLE
          </button>
        ) : (
          <button
            onClick={removeFromCart}
            className="bg-red-600 p-3 rounded-md text-white font-semibold  tracking-wide hover:bg-red-700"
          >
            SEPETTEN KALDIR
          </button>
        )}
        <div className="shadow-md flex flex-col gap-3 py-4">
          <p className="text-black/60 text-sm tracking-wide">
            Bu ürün <span className="text-black/85">{sellerId}</span> satıcısı
            tarafından gönderilecektir.
          </p>
          <p className="border-b"></p>
          <div className="flex text-black/60 text-sm tracking-wide gap-1 ">
            <GiReturnArrow />
            <span className="text-black/85">120</span> Gün İçerisinde İade
          </div>
        </div>
        <div className="flex flex-col gap-4 shadow-lg py-4 px-1">
          <div className="text-blue-600 flex  gap-2 items-center font-semibold">
            <PiCoatHanger style={{ width: "30px", height: "35px" }} />
            <h3>AÇIKLAMA</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-black/85 text-sm">Ürün Açıklaması</h2>
            <p className="text-sm  text-gray-600">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-black/85 text-sm">
              Ürün İçeriği ve Özellikleri
            </h2>
            {attributes.map((attribute, index) => (
              <div key={index} className="flex gap-2 ">
                <h2 className="text-black/85 text-sm">{attribute.title}:</h2>
                <p className="text-sm  text-gray-600">{attribute.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
