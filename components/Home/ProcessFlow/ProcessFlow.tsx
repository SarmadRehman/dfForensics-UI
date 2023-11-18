import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import ProcessCard from "./ProcessCard";

const ProcessFlow = () => {
  const steps = [
    {
      title: "iF aNY",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/Assets/Process/GetStarted.png",
    },
    {
      title: "iF aNY",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/Assets/Process/Maps.png",
    },
    {
      title: "iF aNY",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/Assets/Process/Explore.png",
    },
  ];
  return (
    <ComponentWrapper style="bg-white-main lg:py-28 py-12">
      <div className="w-full flex flex-col items-center justify-start lg:gap-16 gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold">
          Process flow for our{" "}
          <span className="bg-[url('/Assets/Process/UnderLine.png')] bg-contain bg-bottom bg-no-repeat">
            DeepFake Forensics
          </span>
        </h2>
        <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[60%]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        </p>
        <div className="w-full grid lg:grid-cols-3 gap-8">
          {steps.map((item: any, index: number) => (
            <ProcessCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ProcessFlow;
