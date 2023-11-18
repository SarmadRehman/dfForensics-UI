"use client";
import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";
type Props = {
  title: string;
  image: string;
  detail: string;
};

const ProcessCard: React.FC<Props> = ({ image, title, detail }: Props) => {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6">
      <NextImage imageSrc={image} containerStyle="w-[80px] h-[80px]" />
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
