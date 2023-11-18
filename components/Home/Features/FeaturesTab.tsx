"use client";
import NextImage from "@/components/Shared/Image/NextImage";
import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const FeaturesTab = () => {
  const [isActive, setisActive] = useState<string>("Deal Tracking");
  const setActiveFeature = (feature: string) => {
    setisActive(feature);
  };
  const features = [
    {
      name: "Deal Tracking",
      detail:
        "Deals are often organized into a sales or business development pipeline.",
      icon: (
        <CiSearch className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-brand-secondary",
    },
    {
      name: "Pipeline Management",
      detail:
        "Once a lead is qualified, sales representatives make initial contact.",
      icon: (
        <BiFilterAlt className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#F7C31D]",
    },
    {
      name: "Interview Scheduling",
      detail:
        "Consider various interview formats, such as in-person, phone, video.",
      icon: (
        <FiCalendar className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#39C0C8]",
    },
    {
      name: "Email Tracking",
      detail:
        "In some cases, email tracking can also provide information about that.",
      icon: (
        <TfiEmail className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#FF7049]",
    },
  ];
  return (
    <div className="w-full grid lg:grid-cols-2 xl:gap-10 gap-8 lg:pr-10 lg:pl-0 md:pl-10">
      <aside className="w-full h-full">
        {isActive === "Deal Tracking" ? (
          <NextImage
            imageSrc="/Assets/Features/Feature1.png"
            imageStyle="lg:object-cover object-contain"
            containerStyle="w-full lg:h-full h-[300px] sm:h-[400px] sm:inline-block hidden"
          />
        ) : isActive === "Pipeline Management" ? (
          <NextImage
            imageSrc="/Assets/Features/Feature2.png"
            imageStyle="lg:object-cover object-contain"
            containerStyle="w-full lg:h-full h-[300px] sm:h-[400px] sm:inline-block hidden"
          />
        ) : isActive === "Interview Scheduling" ? (
          <NextImage
            imageSrc="/Assets/Features/Feature1.png"
            imageStyle="lg:object-cover object-contain"
            containerStyle="w-full lg:h-full h-[300px] sm:h-[400px] sm:inline-block hidden"
          />
        ) : (
          <NextImage
            imageSrc="/Assets/Features/Feature2.png"
            imageStyle="lg:object-cover object-contain"
            containerStyle="w-full lg:h-full h-[300px] sm:h-[400px] sm:inline-block hidden"
          />
        )}
      </aside>
      <aside className="w-full flex flex-col items-start justify-start xl:gap-8 gap-5">
        {features.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => setActiveFeature(item.name)}
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
