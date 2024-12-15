"use client";
import React from "react";
import BasketIcon from "@/icons/BasketIcon";
import ProfileIcon from "@/icons/profileIcon";
import FavoriteIcon from "@/icons/FavoriteIcon";

const HeaderSection = () => {
  const headerSections = [
    {
      text: "Giriş Yap",
      icon: <ProfileIcon />,
    },
    {
      text: "Favorilerim",
      icon: <FavoriteIcon />,
    },
    {
      text: "Sepetim",
      icon: <BasketIcon />,
    },
  ];
  return (
    <div className="flex relative text-sm gap-7 items-center">
      {headerSections.map((section, index) => (
        <a
          key={index}
          className="flex flex-col gap-1  hover:text-blue-600 text-black/70 items-center hover:underline "
        >
          <div>{section.icon}</div>
          <div className="text-xs">{section.text}</div>
        </a>
      ))}
    </div>
  );
};

export default HeaderSection;
