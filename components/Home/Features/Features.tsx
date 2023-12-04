import React from "react";
import NextImage from "../../Shared/Image/NextImage";
import { BsCheckCircle } from "react-icons/bs";
import FeaturesTab from "./FeaturesTab";

const Features = () => {
  return (
    <section className="w-full px-5 md:px-0 lg:py-28 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <div className="w-full text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          <span className="bg-[url('/Assets/Features/Circle.png')] bg-center bg-no-repeat bg-contain">
            Research
          </span>{" "}
          <span>features leading to the Deepfake Forensics</span>
        </div>
        <FeaturesTab />

        <div className="w-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 xl:gap-10 gap-8 lg:pl-16 lg:pr-0 md:px-10 my-12">
          <aside className="w-full flex flex-col items-center lg:items-start justify-start xl:gap-12 gap-5">
            <div className="text-black-main lg:text-left text-center sm:text-6xl text-[44px] font-bold ">
              <span>Deepfake Forensics is built for </span>
              <span className="bg-[url('/Assets/Features/Circle.png')] bg-center bg-no-repeat bg-contain">
                You
              </span>
            </div>
            <div className="w-full flex items-start justify-start gap-3">
              <BsCheckCircle className="text-2xl text-brand-secondary flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-main font-medium lg:w-[70%]">
                <span className="text-black-main font-bold">
                  {" "}
                  Deepfake-Free Pipeline: Crafted for Ease, Designed for
                  Precision:{" "}
                </span>
                Refine your screening process effortlessly by leveraging our
                comprehensive deepfake detection pipeline. Focus on the essence
                of candidates' audiovisual submissions without concerns about
                falsified content. Our technology ensures a secure and
                trustworthy screening experience, allowing you to identify
                genuine talent seamlessly.
              </p>
            </div>
          </aside>
          <aside className="w-full h-full flex items-center justify-center">
            <NextImage
              imageSrc="/Assets/Features/Man.jpeg"
              imageStyle="object-cover rounded-2xl"
              containerStyle="md:w-[500px] w-full h-[300px] sm:h-[400px] rounded-2xl"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
