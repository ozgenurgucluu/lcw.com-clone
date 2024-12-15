"use client";
import React from "react";
import Image from "next/image";
import newyear from "@/images/newyear.png";
import newyear2 from "@/images/new-2.png";
import erkek from "@/images/erkek.png";
import cocuk from "@/images/cocuk.png";
const HomeContainer = () => {
  return (
    <div className="p-2 flex flex-col gap-3">
      <video
        preload="none"
        aria-label="Video player"
        className="w-full aspect-video"
        controls="none"
        autoPlay
        muted
      >
        <source src="/videos/caglalcw.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image src={newyear} alt="newyear" />
      <Image src={newyear2} alt="newyear" />
      <Image src={erkek} alt="erkek" />
      <Image src={cocuk} alt="cocuk" />
    </div>
  );
};

export default HomeContainer;
