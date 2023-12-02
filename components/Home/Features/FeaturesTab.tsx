"use client";
import NextImage from "@/components/Shared/Image/NextImage";
import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GiSoundWaves } from "react-icons/gi";
import { FaVideo, FaBrain } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const FeaturesTab = () => {
  const [isActive, setisActive] = useState<string>("Audio Forgeries");
  const setActiveFeature = (feature: string) => {
    setisActive(feature);
  };
  const features = [
    {
      name: "Audio Forgeries",
      detail:
        "Deals are often organized into a sales or business development pipeline.",
      icon: (
        <GiSoundWaves className="text-white-main sm:h-[54px] h-[34px] w-[34px] sm:w-[54px]" />
      ),
      background: "bg-brand-secondary",
    },
    {
      name: "Video Forgeries",
      detail:
        "Once a lead is qualified, sales representatives make initial contact.",
      icon: (
        <FaVideo className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-brand-secondary",
    },
    {
      name: "Interpretability",
      detail:
        "Consider various interview formats, such as in-person, phone, video.",
      icon: (
        <FaBrain className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-brand-secondary",
    },
    {
      name: "Image Forgeries",
      detail:
        "In some cases, email tracking can also provide information about that.",
      icon: (
        <FaImage className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-brand-secondary",
    },
  ];
  return (
    <div className="w-full grid lg:grid-cols-2 xl:gap-10 gap-8 lg:pr-10 lg:pl-0 md:pl-10">
      <aside className="w-full h-full flex items-center justify-center">
        {isActive === "Audio Forgeries" ? (
          <NextImage
            imageSrc="/Assets/Features/Audio.jpeg"
            imageStyle="object-cover rounded-2xl"
            containerStyle="md:w-[500px] w-full h-[300px] sm:h-[400px] rounded-2xl"
          />
        ) : isActive === "Video Forgeries" ? (
          <NextImage
            imageSrc="/Assets/Features/Video.jpeg"
            imageStyle="object-cover rounded-2xl"
            containerStyle="md:w-[500px] w-full h-[300px] sm:h-[400px] rounded-2xl"
          />
        ) : isActive === "Interpretability" ? (
          <NextImage
            imageSrc="/Assets/Features/Int.jpeg"
            imageStyle="object-cover rounded-2xl"
            containerStyle="md:w-[500px] w-full h-[300px] sm:h-[400px] rounded-2xl"
          />
        ) : (
          <NextImage
            imageSrc="/Assets/Features/Image.jpeg"
            imageStyle="object-cover rounded-2xl"
            containerStyle="md:w-[500px] w-full h-[300px] sm:h-[400px] rounded-2xl"
          />
        )}
      </aside>
      <aside className="w-full flex flex-col items-start justify-start xl:gap-8 gap-5">
        {features.map((item: any, index: number) => (
          <div
            key={index}
            onMouseEnter={() => setActiveFeature(item.name)}
            className={`w-full flex flex-col sm:flex-row items-center justify-start gap-5 cursor-pointer p-3 rounded-lg hover:duration-200 ${
              isActive === item.name
                ? "sm:bg-slate-200/30"
                : "sm:hover:bg-slate-200/30"
            }`}
          >
            <span
              className={`sm:h-[106px] h-[70px] sm:w-[106px] w-[70px] flex-shrink-0 flex items-center justify-center ${item.background} rounded-full`}
            >
              {item.icon}
            </span>
            <div className="flex flex-col sm:items-start items-center justify-start gap-3">
              <h2
                className={`text-black-main text-[28px] sm:text-[32px] text-center sm:text-left font-medium`}
              >
                {item.name}
              </h2>
              <p className="text-gray-main text-base sm:inline-block hidden sm:text-lg text-center sm:text-left font-medium sm:w-[90%]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default FeaturesTab;
