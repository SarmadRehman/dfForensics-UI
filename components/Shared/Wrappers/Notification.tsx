import React from "react";
import { MdCancel } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const Notification = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start">
      <div className="w-full h-[64px] flex items-center justify-center gap-4 bg-black-main px-3">
        <p className="text-white-main sm:text-base text-sm font-normal sm:inline-block hidden">
          Would you like to view this website in another language?
        </p>
        <div className="h-[40px] sm:w-[170px] w-full flex sm:justify-center justify-between px-2 items-center gap-3 rounded bg-white-main">
          <p className="text-black-main text-sm sm:text-base font-medium">
            Nederlands
          </p>
          <FiChevronDown className="text-xl text-black-main" />
        </div>
        <MdCancel className="text-white-main/60 text-2xl cursor-pointer flex-shrink-0" />
      </div>
    </section>
  );
};

export default Notification;
