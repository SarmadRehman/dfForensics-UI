"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfileCard from "./ProfileCard";

const OurTeam = () => {
  const team = [
    {
      name: "Dr Ali Javed",
      avatar: "/Assets/Team/Supervisor.jpeg",
      role: "Supervisor",
      twitter: "",
      linkedin:
        "https://www.linkedin.com/in/dr-ali-javed-278a4737?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      name: "Asad Mirza",
      avatar: "/Assets/Team/Person.avif",
      role: "Researcher",
      twitter: "",
      linkedin: "",
      github: "",
    },
    {
      name: "Wijdan Haider",
      avatar: "/Assets/Team/wijdan.jpeg",
      role: "Researcher",
      twitter: "",
      linkedin: "",
      github: "",
    },
    {
      name: "Sarmad Rehman",
      avatar: "/Assets/Team/sarmad.png",
      role: "Researcher",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/sarmad-rehman-bb450b1bb/",
      github: "",
    },
  ];
  return (
    <section
      id="ourTeam"
      className="w-full flex flex-col items-center justify-start gap-16 lg:py-16 py-10 relative"
    >
      <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold">
        Our Team
      </h2>
      <div className="h-[470px] max-w-full w-full md:px-6 px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="w-full h-full"
        >
          {team.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ProfileCard
                  name={item.name}
                  role={item.role}
                  linkedin={item.linkedin}
                  avatar={item.avatar}
                  github={item.github}
                  twitter={item.twitter}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* bottom Gradients */}
      <span className="absolute bottom-[30%] left-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#00CCFF] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute bottom-[40%] left-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      {/* top gradient */}
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#690D89] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      {/* bottom  most gradient */}
      <span className="absolute bottom-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#690D89] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute bottom-[5%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
    </section>
  );
};

export default OurTeam;
