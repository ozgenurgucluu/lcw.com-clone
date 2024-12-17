import React from "react";
import { GrSecure } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { LiaExclamationCircleSolid } from "react-icons/lia";

const Payment = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, product) => total + product.product.price,
    0
  );

  return (
    <div className=" flex flex-col gap-7 min-w-[580px] px-3 p-2">
      <button className="bg-blue-800 rounded-md text-base tracking-wide p-2.5 py-3 text-white font-semibold">
        ÖDEME ADIMINA GEÇ
      </button>
      <div className="flex justify-between ">
        <h1 className="text-black/75 text-lg">SİPARİŞ ÖZETİ</h1>
        <div className="flex items-center gap-1">
          <span className="text-green-500">
            <GrSecure />
          </span>
          <h2 className="text-green-500 font-semibold text-sm">
            GÜVENLİ ALIŞVERİŞ
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="text-gray-600 text-sm">Ürün Toplam</h3>
          <span className="text-gray-600 text-sm">
            {totalPrice.toFixed(2)} TL
          </span>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 font-semibold text-sm">Kargo Ücreti</h3>
          <span className="text-gray-600 text-sm font-semibold">BEDAVA</span>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-600 font-semibold text-base">
            GENEL TOPLAM
          </h3>
          <span className="text-gray-600 text-base font-semibold">
            {" "}
            {totalPrice.toFixed(2)} TL
          </span>
        </div>
        <span className="border-b"></span>
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm ">Kupon Kodu Ekle</p>
          <span>
            <GrAdd />
          </span>
        </div>
        <span className="border-b"></span>
        <div className="flex gap-2">
          <input type="radio"></input>
          <span className="text-gray-600 text-sm tracking-wide">
            Hediye Paketi İstiyorum
          </span>
        </div>
      </div>
      <button className="bg-blue-800 rounded-md text-base tracking-wide p-2.5 py-3 text-white font-semibold">
        ÖDEME ADIMINA GEÇ
      </button>

      <div className="flex flex-col gap-2">
        {" "}
        <span className="text-gray-600 text-xs tracking-wide">
          * Fiyatlara KDV Dahildir
        </span>
        <span className="text-gray-600 text-xs tracking-wide flex ">
          <LiaExclamationCircleSolid
            style={{ width: "25px", height: "18px" }}
          />
          Sepete eklenen ürünleri diğer müşterilerimiz satın alabilmektedir.
          Stoklar tükenmeden alışveriş işlemlerinizi tamamlayınız.
        </span>
      </div>
    </div>
  );
};

export default Payment;
