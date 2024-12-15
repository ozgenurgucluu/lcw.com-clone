import LcwIcon from "@/icons/LcwIcon";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";

const FooterBody = () => {
  return (
    <div className="flex  justify-center sm:gap-48">
      <div className="flex flex-col gap-5">
        <LcwIcon />
        <div className="flex gap-2 items-center ">
          <IoCallOutline /> <span className="text-gray-600S">444 9 368</span>
        </div>
        <div className="text-black ">LCW.COM’da Engelsiz İletişim!</div>
        <div className="text-gray-600 underline">İşaret Dili Hizmeti</div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="text-gray-600 text-lg font-semibold">Destek</div>
        <div className="flex gap-3 items-center">
          <IoDocumentTextOutline />
          <span className="text-gray-600">İletişim Formu</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoCallOutline />
          <span className="text-gray-600">444 2 369</span>
        </div>
        <div className="flex gap-3 items-center">
          <FaWhatsapp />
          <span className="text-gray-600">Whatsapp Destek</span>
        </div>
        <div className="flex gap-3 items-center">
          <SlEarphones />

          <span className="text-gray-600">Görüntülü Destek</span>
        </div>
        <div className="flex gap-3 items-center">
          <FaTruck />

          <span className="text-gray-600">Sipariş Takibi</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-600 text-lg font-semibold">Destek</div>
        <span className="text-gray-600">Sıkça Sorulan Sorular</span>
        <span className="text-gray-600">İade ve Değişim</span>
        <span className="text-gray-600">Kullanım Koşulları</span>
        <span className="text-gray-600">Site Haritası</span>
        <span className="text-gray-600">İşlem Rehberi</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-600 text-lg font-semibold">Kurumsal</div>
        <span className="text-gray-600">Hakkımızda </span>
        <span className="text-gray-600">Mağazalarımız</span>
        <span className="text-gray-600">Kurumsal</span>
        <span className="text-gray-600">Kariyer Fırsatları</span>
        <span className="text-gray-600">Kurumsal Destek</span>
        <span className="text-gray-600">Hediye Kart</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-600 text-lg font-semibold">Politikalar</div>
        <span className="text-gray-600">Aydınlatma Metni </span>
        <span className="text-gray-600">Aydınlatma Metni / Pazaryeri</span>
        <span className="text-gray-600">
          Veri Gizliliği ve Güvenliği Politikası
        </span>
      </div>
    </div>
  );
};

export default FooterBody;
