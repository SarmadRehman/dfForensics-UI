import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const FreeTrial = () => {
  return (
    <ComponentWrapper style="lg:py-28 py-12 bg-black-main">
      <div className="w-full grid lg:grid-cols-[3fr,1fr] gap-6">
        <aside className="w-full flex flex-col lg:items-start items-center justify-start gap-8">
          <h2 className="text-white-main lg:text-left text-center sm:text-6xl sm:leading-[90px] text-[44px] font-bold lg:w-[90%]">
            Get dfFLogo & grow your career{" "}
            <span className="text-brand-secondary">3x faster</span> than now
          </h2>
          <p className="text-lg lg:text-left text-center sm:text-xl text-white-main/70 lg:w-[80%] font-medium">
            Our software is suitable for use in various industries. With an
            average rating of4.5 stars on Capterrawe are convinced that we also
            offer the solution for you!
          </p>
          <div className="w-full flex md:flex-row flex-col items-center lg:justify-start justify-center gap-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="sm:w-[400px] w-full bg-white-main py-5 px-8 focus:outline-none rounded-xl text-base sm:text-lg font-medium text-gray-main placeholder:text-gray-main"
            />
            <button className="px-8 py-5 text-white-main text-base sm:text-lg font-medium rounded-xl bg-brand-main hover:bg-brand-main/90 hover:duration-200">
              Start free trial
            </button>
          </div>
        </aside>
        <aside className="w-full lg:flex hidden items-center justify-center">
          <NextImage
            imageSrc="/Assets/Star.png"
            containerStyle="h-[132px] w-[110px]"
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default FreeTrial;
