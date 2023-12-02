import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const HowItWorks = () => {
  return (
    <ComponentWrapper style="lg:py-28 py-12 bg-black-main">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <h2 className="text-white-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          How does{" "}
          <span className="bg-[url('/Assets/AlgorithmUnderline.png')] bg-bottom bg-no-repeat bg-contain">
            Deepfake Forensics
          </span>{" "}
          algorithm works
        </h2>
        <p className="text-white-main/70 text-center text-lg sm:text-xl font-medium lg:w-[50%]">
          A generic Image depicting any work flow
        </p>
        <NextImage
          imageSrc="/Assets/HowItWorks.jpeg"
          containerStyle="w-full xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] rounded-2xl"
          imageStyle="object-fill rounded-2xl"
        />
      </div>
    </ComponentWrapper>
  );
};

export default HowItWorks;
