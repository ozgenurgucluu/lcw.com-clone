import React from "react";
import FooterSocialMedia from "../FooterSocialMedia";
import FooterBody from "../FooterBody";

const Footer = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex  gap-3 justify-center items-center flex-col">
        <div className="flex text-lg text-gray-600">Uygulamamızı İndirin</div>
        <div className="flex gap-3">
          <img
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/LCW_GOOGLE_PLAY_26-04-24.PNG"
            alt="play"
            width={129}
            className="cursor-pointer"
          />
          <img
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/LCW_APP_STORE_26-04-24.PNG"
            alt="play"
            width={129}
            className="cursor-pointer"
          />
          <img
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/LCW_APP_GALLERY_26-04-24.PNG"
            alt="play"
            width={129}
            className="cursor-pointer"
          />
        </div>
      </div>
      <FooterBody />
      <FooterSocialMedia />
    </div>
  );
};

export default Footer;
