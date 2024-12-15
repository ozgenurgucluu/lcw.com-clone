"use client";
import React from "react";
import GiftCartIcon from "@/icons/GiftCartIcon";
import CargoIcon from "@/icons/CargoIcon";
import Link from "next/link";

const index = () => {
  return (
    <div className=" flex items-center justify-between gap-3">
      <div className="flex text-xs text-gray-700 opacity-75 hover:opacity-100 my-2">
        Tüm Ürünlerde 950 TL ve Üzeri Alışverişinde Kargo Ücretsiz!
      </div>
      <div className="flex gap-4 ">
        <div className="flex items-center gap-1">
          <GiftCartIcon />
          <Link
            href={"/"}
            className="flex text-xs text-gray-700 opacity-75 hover:opacity-100 my-2 hover:underline"
          >
            Hediye Kartı Satın Al
          </Link>
        </div>
        <p className="flex items-center text-gray-400">|</p>
        <div className="flex gap-1 items-center">
          <CargoIcon />
          <Link
            href={"/"}
            className="flex text-xs text-gray-700 opacity-75 hover:opacity-100 my-2 hover:underline"
          >
            Sipariş Takip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
