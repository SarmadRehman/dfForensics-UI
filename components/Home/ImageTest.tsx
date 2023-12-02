"use client";
import React, { ChangeEvent, useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { LuImagePlus, LuUpload } from "react-icons/lu";
import { FaDropbox, FaGoogleDrive } from "react-icons/fa";

const ImageTest = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };
  console.log(file);
  return (
    <ComponentWrapper style="bg-white-off lg:py-28 py-16 z-50">
      <div className="w-full flex items-start justify-center sm:gap-7 gap-4">
        <div className="md:w-[600px] w-full flex flex-col items-center justify-start sm:gap-8 gap-5">
          <label htmlFor="fileInput" className="w-full z-50">
            <button className="sm:h-[200px] h-[150px] w-full z-50 flex items-center justify-center cursor-pointer rounded-xl border-[5px] border-dashed border-black-main relative flex-col gap-4">
              <input
                id="fileInput"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="w-full h-full z-50 opacity-0 absolute top-0 left-0 cursor-pointer"
              />{" "}
              <LuUpload className="sm:text-5xl text-4xl text-black-main" />
              <h2 className="text-black-main sm:text-3xl text-xl text-center font-semi-bold">
                Upload Here
              </h2>
              <p className="">
                Upload AudioVisual, Audio, Video, or Image to detect the
                forgeries
              </p>
            </button>
          </label>

          <button className="sm:w-[200px] w-full py-5 bg-black-main text-base sm:text-lg text-white-main font-semibold rounded-lg relative">
            Upload
            <input
              id="fileInput"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="w-full h-full z-50 opacity-0 absolute top-0 left-0 cursor-pointer"
            />
          </button>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 z-50">
          <FaDropbox className="sm:text-4xl text-3xl text-black-main cursor-pointer" />
          <FaGoogleDrive className="sm:text-4xl text-3xl text-black-main cursor-pointer" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ImageTest;
