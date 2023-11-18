import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import NextImage from "../../Shared/Image/NextImage";
import ItemCard from "./ItemCard";

const MatchJobs = () => {
  const steps = [
    {
      title: "if Any",
      isTop: true,
      logo: "/Assets/MatchJobs/Recruiters.png",
    },
    {
      title: "if Any",
      isTop: false,
      logo: "/Assets/MatchJobs/Candidates.png",
    },
    {
      title: "if Any",
      isTop: true,
      logo: "/Assets/MatchJobs/JobOpening.png",
    },
    {
      title: "if Any",
      isTop: false,
      logo: "/Assets/MatchJobs/Companies.png",
    },
    {
      title: "if Any",
      isTop: true,
      logo: "/Assets/MatchJobs/HumanResources.png",
    },
  ];
  return (
    <ComponentWrapper style="lg:py-28 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          Any special feature pertaining{" "}
          <span className="bg-[url('/Assets/Process/UnderLine.png')] bg-bottom bg-no-repeat bg-contain">
            to Deepfake Forensics.
          </span>
        </h2>
        <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="w-full flex flex-col items-center justify-start md:gap-8 gap-3">
          <NextImage
            imageSrc="/Assets/MatchJobs/MainCircle.png"
            containerStyle="lg:w-[240px] md:w-[180px] lg:h-[240px] md:h-[180px] h-[120px] w-[120px]"
          />
          <NextImage
            imageSrc="/Assets/MatchJobs/Arrow.png"
            containerStyle="md:w-[16px] w-[12px] md:h-[240px] h-[160px]"
            imageStyle="objecct-fill"
          />
          <div className="w-full flex items-center justify-center">
            {steps.map((item: any, index: number) => (
              <ItemCard
                key={index}
                title={item.title}
                logo={item.logo}
                isTop={item.isTop}
              />
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default MatchJobs;
