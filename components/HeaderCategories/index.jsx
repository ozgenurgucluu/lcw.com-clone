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
              className={`fixed top-[175px] transition-all duration-700 translate-y-[-13px]  ease-in-out left-0 w-screen h-[530px] bg-white z-50 shadow-md overflow-y-auto p-5`}
            >
              <div className="text-black">lorem*68</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderCategories;
