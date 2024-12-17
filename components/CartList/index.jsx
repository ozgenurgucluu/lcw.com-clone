import React from "react";
import Payment from "@/components/Payment";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import Image from "next/image";

const CartList = ({ cart }) => {
  return (
    <div className="px-3  flex justify-between sm:gap-10">
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
          {cart.map((product, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex items-center gap-3">
                <TiTick
                  style={{ width: "25px", height: "35px", color: "blue" }}
                />
                {/* <Image
                  src={product.product?.thumbnail || "/placeholder.jpg"}
                  alt="ürün-resmi"
                  width={125}
                  height={125}
                /> */}
                <h4 className="text-base text-gray-600 w-[225px]">
                  {product.productId || "Ürün ID"}
                </h4>
              </div>
              <div className="flex items-center">
                <span className="border flex gap-3 p-1.5 items-center">
                  <VscChromeMinimize />1 <VscAdd />
                </span>
              </div>
              <div className="text-blue-700 font-semibold flex items-center">
                {(product.product?.price || 0).toFixed(2)} TL
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>

      <Payment cart={cart} />
    </div>
  );
};

export default CartList;
