import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Partners = () => {
  return (
    <ComponentWrapper style="relative lg:py-28 py-12 bg-brand-main overflow-hidden">
      <div className="w-full flex flex-col items-center justify-start sm:gap-16 gap-10">
        <h2 className="text-white-main text-center text-2xl sm:text-3xl font-medium">
          Partner by amazing companies worldwide
        </h2>
        <div className="w-full flex items-center justify-center gap-6 sm:flex-nowrap flex-wrap">
          {[
            "/Assets/Partners/Google.png",
            "/Assets/Partners/Facebook.png",
            "/Assets/Partners/Youtube.png",
            "/Assets/Partners/Pintrest.png",
            "/Assets/Partners/Behance.png",
          ].map((item: string, index: number) => (
            <NextImage
              key={index}
              containerStyle="sm:h-[32px] h-[28px] w-[130px] sm:w-[160px]"
              imageSrc={item}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 -left-5">
        <NextImage
          imageSrc="/Assets/Partners/LeftCircle.png"
          containerStyle="h-[190px] w-[190px]"
        />
      </div>
      <div className="absolute bottom-0 -right-5">
        <NextImage
          imageSrc="/Assets/Partners/RightCircle.png"
          containerStyle="h-[190px] w-[190px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default Partners;
