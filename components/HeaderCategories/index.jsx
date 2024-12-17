"use client";
import React, { useState } from "react";
import Link from "next/link";

const HeaderCategories = ({ categories = [] }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index, isOpen) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: isOpen,
    }));
  };

  const menuData = [
    {
      title: "Kadın",
      subCategories: [
        "Elbiseler",

        "Pantolonlar",
        "Ceketler",
        "Kışlık Giyim",
        "Etekler",
        "Kazaklar",
        "İç Giyim",
        "Pijama Takımları",
        "Gelinlikler",
        "Spor Giyim",
        "Deniz Giyim",
        "Trençkotlar",
        "Kot Ceketler",
        "Şapkalar",
      ],
    },
    {
      title: "Erkek",
      subCategories: [
        "Tişörtler",
        "Ceketler",
        "Pantolonlar",
        "Saatler",
        "Kravatlar",
        "Takım Elbiseler",
        "Kazaklar",
        "Ayakkabılar",
        "Montlar",
        "Şapkalar",
        "Çoraplar",
        "Kemerler",
        "Atkılar",
      ],
    },
    {
      title: "Anne-Çocuk",
      subCategories: [
        "Hamile Giyim",
        "Bebek Bakımı",
        "Çocuk Kıyafetleri",
        "Emzirme Ürünleri",
        "Eğitici Oyuncaklar",
        "Okul Çantaları",
        "Bebek Arabaları",
        "Bebek Mamaları",
        "Bebek Yatakları",
        "Oyuncak Arabalar",
        "Boyama Kitapları",
        "Çocuk Ayakkabıları",
      ],
    },
    {
      title: "Ayakkabı",
      subCategories: [
        "Sneaker",
        "Topuklu Ayakkabı",
        "Botlar",
        "Sandaletler",
        "Çocuk Ayakkabıları",
        "Klasik Ayakkabılar",
        "Outdoor Ayakkabılar",
        "Ev Terlikleri",
        "Spor Ayakkabılar",
        "Kışlık Botlar",
        "Gelin Ayakkabıları",
        "Yürüyüş Ayakkabıları",
      ],
    },
    {
      title: "Ev Yaşam",
      subCategories: [
        "Mutfak",
        "Dekorasyon",
        "Ev Tekstili",
        "Banyo Aksesuarları",
        "Bahçe Ürünleri",
        "Oturma Grupları",
        "Yemek Takımları",
        "Aydınlatma",
        "Halılar",
        "Perdeler",
        "Nevresim Takımları",
        "Mutfak Aletleri",
        "Çerçeveler",
        "Duvar Saatleri",
      ],
    },
    {
      title: "Kozmetik",
      subCategories: [
        "Makyaj",
        "Cilt Bakımı",
        "Parfüm",
        "Saç Bakımı",
        "El ve Ayak Bakımı",
        "Güneş Ürünleri",
        "Doğal Kozmetik",
        "Rujlar",
        "Maskaralar",
        "Fondötenler",
        "Göz Kalemleri",
      ],
    },
    {
      title: "Spor & Outdoor",
      subCategories: [
        "Koşu Ayakkabıları",
        "Fitness Ekipmanları",
        "Yoga Matları",
        "Çadırlar",
        "Doğa Yürüyüşü",
        "Outdoor Giyim",
        "Bisikletler",
        "Kamp Çadırları",
        "Spor Salonu Ekipmanları",
        "Yüzme Ürünleri",
        "Trekking Ayakkabıları",
        "Avcılık Ekipmanları",
        "Dağcılık Ekipmanları",
      ],
    },
  ];

  return (
    <div className="shadow-lg bg-white shadow-gray-200  pb-2 z-50 sm:px-6 px-2.5 flex gap-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => toggleMenu(index, true)}
          onMouseLeave={() => toggleMenu(index, false)}
        >
          <Link
            className="font-bold text-black/55 mb-3 hover:text-blue-800 transition duration-100 group relative pb-2"
            href={`/${category.id}`}
          >
            {category.title}
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          {openMenus[index] && (
            <div
              onMouseEnter={() => toggleMenu(index, true)}
              onMouseLeave={() => toggleMenu(index, false)}
              className={`fixed top-[175px] transition-all duration-700 translate-y-[-29px]  ease-in-out left-0 w-screen h-[530px] bg-white z-50 shadow-md overflow-y-auto p-5`}
            >
              <div>
                <div className="grid grid-cols-7 gap-1 p-4">
                  {menuData.map((menu, index) => (
                    <div key={index} className="bg-white ">
                      <h2 className="text-blue-600 font-semibold mb-2">
                        {menu.title}
                      </h2>
                      <ul className="space-y-2">
                        {menu.subCategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-blue-600 text-sm"
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderCategories;
