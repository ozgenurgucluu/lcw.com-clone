"use client";
import React from "react";
import BasketIcon from "@/icons/BasketIcon";
import ProfileIcon from "@/icons/profileIcon";
import FavoriteIcon from "@/icons/FavoriteIcon";
import Link from "next/link";

const HeaderSection = () => {
  const headerSections = [
    {
      text: "Giriş Yap",
      icon: <ProfileIcon />,
      to: "/",
    },
    {
      text: "Favorilerim",
      icon: <FavoriteIcon />,
      to: "/",
    },
    {
      text: "Sepetim",
      icon: <BasketIcon />,
      to: "http://localhost:3000/cart",
    },
  ];
  return (
    <div className="flex relative text-sm gap-7 items-center">
      {headerSections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-1  hover:text-blue-600 text-black/70 items-center hover:underline "
        >
          <Link className="flex flex-col gap-1 items-center" href={section.to}>
            <span>{section.icon}</span>
            <span className="text-xs">{section.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderSection;
