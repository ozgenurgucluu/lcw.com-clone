"use client";
import SearchIcon from "@/icons/searchIcon";
import HeaderTop from "@/components/HeaderTop";
import HeaderSection from "../HeaderSection";
import LogoIcon from "@/icons/LogoIcon";
import HeaderCategories from "../HeaderCategories";
import Link from "next/link";

const Header = ({ categories = [] }) => {
  return (
    <>
      <div className="sticky top-0 left-0 bg-white flex flex-col gap-0 z-50 w-full sm:px-6 px-2.5 ">
        <HeaderTop />
        <div className=" flex justify-between items-center sm:gap-56 ">
          <Link href="/" className=" flex -ml-4 ">
            <LogoIcon />
          </Link>
          <div className="flex justify-center relative items-center group focus-within:bg-transparent">
            <input
              className="sm:min-w-[778px] h-[36px] px-2 border-black rounded-xl focus:rounded-xl bg-gray-100/60 flex pl-10 outline-none focus:border-blue-600 focus:bg-white text-sm border"
              placeholder="Ürün, kategori veya marka ara"
            />
            <div className="absolute left-2 p-2">
              <SearchIcon />
            </div>
            <button className="bg-gray-500 focus:border-blue-600 group-focus-within:bg-blue-600 -m-2 text-white border border-black h-[36px] px-7 rounded-r-2xl focus:outline-none transition-colors duration-300">
              ARA
            </button>
          </div>

          <HeaderSection />
        </div>
      </div>
      <HeaderCategories categories={categories} />
    </>
  );
};

export default Header;
