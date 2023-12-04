import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import NextImage from "../../Shared/Image/NextImage";
import ItemCard from "./ItemCard";

const MatchJobs = () => {
  const steps = [
    {
      title: "Data Input",
      isTop: true,
      logo: "/Assets/MatchJobs/input.png",
      detail:
        "Backend receives raw video and audio, initiating data preparation before analysis. This ensures optimal input quality for the subsequent model examination.",
    },
    {
      title: "Preprocessing",
      isTop: false,
      logo: "/Assets/MatchJobs/preprocess.png",
      detail:
        " Preprocessing readies data for the model by cleaning, standardizing, and transforming, ensuring optimal input quality and enhancing model performance",
    },
    {
      title: "Transformative Analysis",
      isTop: true,
      logo: "/Assets/MatchJobs/transformative_analysis.png",
      detail:
        "Preprocessed data enters the transformer model, concurrently analyzing visual and audio elements. Extracted features discern patterns signaling potential deepfake manipulation",
    },
    {
      title: "Results and Validation",
      isTop: false,
      logo: "/Assets/MatchJobs/result_generation_and_validation.png",
      detail:
        "The model generates results, including confidence scores and interpretative heatmaps. Results undergo validation checks to ensure accuracy and reliability",
    },
    {
      title: "Communication of Results",
      isTop: true,
      logo: "/Assets/MatchJobs/result.png",
      detail:
        "Validated results are communicated to the frontend, where they are received, interpreted, and presented to users, offering transparent insights into detected deepfake likelihood",
    },
  ];
  return (
    <ComponentWrapper style="lg:py-28 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          Workflow of{" "}
          <span className="bg-[url('/Assets/Process/UnderLine.png')] bg-bottom bg-no-repeat bg-contain">
            Deepfake Forensics
          </span>
        </h2>
        {/* <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[50%]">
          card text data here
        </p> */}
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
                detail={item.detail}
                style={
                  index == 0
                    ? "left-3"
                    : index == 4
                    ? "right-3"
                    : index == 3
                    ? "-right-12"
                    : "left-0"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default MatchJobs;
