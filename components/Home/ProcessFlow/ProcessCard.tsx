"use client";
import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";
type Props = {
  title: string;
  icon: React.ReactNode;
  detail: string;
};

const ProcessCard: React.FC<Props> = ({ icon, title, detail }: Props) => {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6 bg-white-main shadow-feature  rounded-2xl p-6 cursor-pointer ">
      {/* <NextImage imageSrc={image} containerStyle="w-[80px] h-[80px]" /> */}
      {icon}
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-3">
        <h2 className="text-black-main sm:text-3xl text-2xl lg:text-left text-center font-medium">
          {title}
        </h2>
        <p className="text-gray-main text-base sm:text-lg lg:text-left text-center font-medium">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
