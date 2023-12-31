import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import ProcessCard from "./ProcessCard";
import { MdOutlineVerified, MdMonitor, MdSecurity } from "react-icons/md";
const UseCases = () => {
  const steps = [
    {
      title: "Media Verification",
      detail:
        "One of our Deepfake forensics tool's superior capabilities, ensuring authenticity in visual content across various media platforms.",
      icon: <MdOutlineVerified className="text-[60px] text-brand-main" />,
    },
    {
      title: "KYC Security",
      detail:
        "Leveraging our cutting-edge Deepfake forensics tool to bolster Know Your Customer (KYC) procedures, guarding against fraudulent identities.",
      icon: <MdSecurity className="text-[60px] text-brand-main" />,
    },
    {
      title: "Social Media Monitoring",
      detail:
        "Our market-leading Deepfake forensics tool safeguards social platforms by detecting and preventing image, video, and audio forgeries.",
      icon: <MdMonitor className="text-[60px] text-brand-main" />,
    },
  ];
  return (
    <ComponentWrapper style="bg-white-main lg:py-28 py-12">
      <div className="w-full flex flex-col items-center justify-start lg:gap-16 gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold">
          Use Cases Of Our{" "}
          <span className="bg-[url('/Assets/Process/UnderLine.png')] bg-contain bg-bottom bg-no-repeat">
            DeepFake Forensics
          </span>
        </h2>
        {/* <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[60%]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        </p> */}
        <div className="w-full grid lg:grid-cols-3 gap-8">
          {steps.map((item: any, index: number) => (
            <ProcessCard
              key={index}
              title={item.title}
              icon={item.icon}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default UseCases;
