import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[calc(100dvh-[144px])]">
      <div className="w-full grid lg:grid-cols-2 gap-2">
        <div className="w-full h-full flex flex-col items-start justify-center gap-2 mt-6 pb-8 z-50">
          <h1 className="text-white-main font-bold text-center lg:text-left  sm:text-5xl text-4xl z-50">
            Unveil the Reality of Visuals
          </h1>
          <p className="text-white-main text-center lg:text-left sm:text-2xl text-xl font-medium z-50 mt-1">
            Unmasking Truth in a World of Illusions: Deepfake Forensics -
            Exposing Realities, Unveiling Authenticity
          </p>
          <p className="text-white-main text-center lg:text-left sm:text-2xl text-xl font-medium z-50 mt-1">
            Our high-caliber deepfake detection services safeguard truth and
            authenticity amidst the proliferation of manipulated visuals
          </p>
          {/* <p className="text-white text-center lg:text-left sm:text-2xl text-xl font-medium z-50 mt-6">
            In a world flooded with manipulated media, our advanced technology
            stands as a shield against deception. Detect and expose any hint of
            manipulation, forgery, or fakeness within moments. With our
            innovative tools, authenticity prevails, unraveling the truth in the
            realm of illusions
          </p> */}
          <div className="w-full flex sm:flex-row flex-col items-center justify-center lg:justify-start gap-4 mt-4">
            <button className="bg-transparent z-50 px-8 py-5 sm:w-auto w-full rounded-xl text-base sm:text-lg font-medium text-white-main border-2 border-white-main hover:bg-white-main/10 hover:duration-200">
              Get Started
            </button>
            <button className="bg-brand-main z-50 px-8 py-5 sm:w-auto w-full rounded-xl text-base sm:text-lg font-medium text-white-main  hover:duration-200">
              SignUp / LogIn
            </button>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <video
            className="w-full sm:h-[400px] h-[300px] object-cover object-center rounded-2xl shadow-main"
            src="/Assets/Hero/Main.mp4"
            autoPlay
            muted
            height={"60%"}
            width={"100%"}
            controls={true}
            loop
          ></video>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
