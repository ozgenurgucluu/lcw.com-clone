"use client";
import React from "react";
import Payment from "@/components/Payment";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import Image from "next/image";
import iade from "@/images/iade.png";
import ParcelIcon from "@/icons/ParcelIcon";
import DebitCartICon from "@/icons/DebitCartICon";
import PrizeIcon from "@/icons/PrizeIcon";
import PresentIcon from "@/icons/PresentIcon";

const CartList = ({ cart }) => {
  const extradite = [
    {
      icon: <ParcelIcon />,
      title: "LC Wakiki Markalı Ürünlerde 120 Ücretsiz İade",
      text: "81 İlde 500'den Fazla Mağazadan Anında İade ve Değişim",
    },
    {
      icon: <DebitCartICon />,
      title: "Kapıda Nakit Ödeme Seçeneği",
      text: "Farklı Ödeme Seçenekleri ile Ödeme Kolaylığı ",
    },
    {
      icon: <PrizeIcon />,
      title: "LC Wakiki Güvencesi",
      text: "Kaliteli, güvenli ve Orijinal Ürünlerle Her Zaman Yanınızda",
    },
    {
      icon: <PresentIcon />,
      title: "İlk Siparişe Ücretsiz Kargo",
      text: "Üye Olarak Verilen İlk Siparişte Kargo Ücretsiz",
    },
  ];
  return (
    <div className="px-3  flex flex-col gap-6">
      <div className="flex justify-between sm:gap-10 ">
        <div className="flex flex-col w-full gap-6 ">
          <div className="flex justify-between ">
            <div className="text-gray-600 text-[18px] font-semibold flex ">
              Sepetim ({cart.length} Ürün)
            </div>
            <Link
              href="/"
              className="flex text-blue-800 items-center font-semibold"
            >
              <GoChevronLeft /> Alışverişe Devam Et
            </Link>
          </div>
          <div className="flex flex-col sm:gap-4 border w-full sm:px-6 sm:p-6">
            <div className="flex items-center gap-1 ">
              <div className="flex items-center text-blue-700 font-semibold ">
                <TiTick style={{ width: "30px", height: "35px" }} />
                LC Waikiki
              </div>
              <span className="text-gray-600">
                tarafından gönderilecek ürünler
              </span>
            </div>
            <div className="bg-green-100 w-full sm:p-1.5 flex justify-center">
              <span className="text-green-500">Kargo Bedava</span>
            </div>
            <span className="border-b "></span>
            {cart.map((cartItem, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex items-center gap-3">
                  <TiTick
                    style={{ width: "25px", height: "35px", color: "blue" }}
                  />
                  <Image
                    src={cartItem.product?.thumbnail}
                    alt="ürün-resmi"
                    width={125}
                    height={125}
                    loader={({ src }) => src}
                  />
                  <h4 className="text-base text-gray-600 w-[225px]">
                    {cartItem.product.title}
                  </h4>
                </div>
                <div className="flex items-center">
                  <span className="border flex gap-3 p-1.5 items-center">
                    <VscChromeMinimize />1 <VscAdd />
                  </span>
                </div>
                <div className="text-blue-700 font-semibold flex items-center">
                  {(cartItem.product?.price || 0).toFixed(2)} TL
                </div>
              </div>
            ))}
          </div>
        </div>
        <Payment cart={cart} />
      </div>
      <div className="flex justify-center gap-1 ">
        {extradite.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col bg-blue-100 justify-center items-center max-w-72 gap-3 p-3.5 rounded-md"
            >
              <span className="text-blue-700 flex w-20 h-24">{item.icon}</span>
              <h1 className="text-blue-700 text-lg text-center font-semibold">
                {item.title}
              </h1>
              <span className="border-b w-full border-blue-300"></span>
              <h2 className="text-sm text-center text-blue-500">{item.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
