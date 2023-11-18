"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import NextImage from "@/components/Shared/Image/NextImage";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ReviewCard from "./ReviewCard";

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute lg:-top-[216px] md:-top-40 -top-[68px] xl:right-[8%] lg:right-[10%] sm:right-[5%]  right-[2%] sm:h-[56px] h-[48px] sm:w-[56px] w-[48px] flex items-center justify-center z-20 hover:bg-brand-main rounded-full group bg-[#DDE7FF] hover:duration-200"
      onClick={onClick}
    >
      <BsArrowRight className="text-2xl text-brand-main group-hover:text-white-main" />
    </button>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute lg:-top-[216px] md:-top-40 -top-[68px] xl:right-[13%] lg:right-[17%] right-[20%] sm:right-[15%]  sm:h-[56px] h-[48px] sm:w-[56px] w-[48px] flex items-center justify-center z-20 hover:bg-brand-main rounded-full group bg-[#DDE7FF] hover:duration-200"
      onClick={onClick}
    >
      <BsArrowLeft className="text-2xl text-brand-main group-hover:text-white-main" />
    </button>
  );
}

const Reviews = () => {
  const reviews = [
    {
      logo: "/Assets/Reviews/Mobilen.png",
      userName: "Brooklyn Simmons",
      userRole: "CEO, mobiel.nl",
      userImg: "/Assets/Reviews/Customer1.png",
      review:
        " We have been using Hire.me for more than five years now and are very satisfied. We are especially pleased with the excellent service. This makes it a very pleasant company to work with.",
    },
    {
      logo: "/Assets/Reviews/Rabobank.png",
      userName: "Jenny Wilson",
      userRole: "CEO, Rabobank",
      userImg: "/Assets/Reviews/Customer2.png",
      review:
        " With Hire.me we ensure clear work schedules and fast processing of our time registration. The application ensures that everything is always at hand. With we can easily reach all our part-time employees with open shifts.",
    },
    {
      logo: "/Assets/Reviews/Mobilen.png",
      userName: "Brooklyn Simmons",
      userRole: "CEO, mobiel.nl",
      userImg: "/Assets/Reviews/Customer1.png",
      review:
        " We have been using Hire.me for more than five years now and are very satisfied. We are especially pleased with the excellent service. This makes it a very pleasant company to work with.",
    },
    {
      logo: "/Assets/Reviews/Rabobank.png",
      userName: "Jenny Wilson",
      userRole: "CEO, Rabobank",
      userImg: "/Assets/Reviews/Customer2.png",
      review:
        " With Hire.me we ensure clear work schedules and fast processing of our time registration. The application ensures that everything is always at hand. With we can easily reach all our part-time employees with open shifts.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full flex flex-col items-center justify-start gap-16 lg:py-28 py-12 bg-white-main overflow-hidden">
      <div className="w-full flex items-center justify-start lg:pl-16 lg:pr-0 md:px-10 px-5">
        <h2 className="lg:w-[70%] sm:text-left text-center text-black-main font-bold sm:text-7xl text-5xl sm:leading-[83px]">
          4,000+ companies trusted{" "}
          <span className="bg-[url('/Assets/Process/UnderLine.png')] bg-contain bg-bottom bg-no-repeat">
            Hire.me
          </span>
        </h2>
      </div>

      <div className="w-full md:pl-10 md:pr-0 px-5">
        <div className="w-full h-[450px] relative ">
          <Slider {...settings}>
            {reviews.map((item: any, index: number) => (
              <ReviewCard
                key={index}
                logo={item.logo}
                review={item.review}
                userImg={item.userImg}
                userName={item.userName}
                userRole={item.userRole}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
