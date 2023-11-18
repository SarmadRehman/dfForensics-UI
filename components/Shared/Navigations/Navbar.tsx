"use client";
import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/",
    },
    {
      name: "Pages",
      route: "/",
    },
    {
      name: "Contact",
      route: "/",
    },
  ];
  return (
    <>
      <ComponentWrapper style="bg-transparent h-[80px] z-50">
        <div className="w-full h-full flex items-center justify-between z-50">
          <Link href={"/"} className="relative h-[20px] w-[95px]">
            <h1 className="text-white-main text-3xl">LOGOdfF</h1>
            {/* <Image
              className="w-full h-full object-fill"
              src={"/Assets/Logo.png"}
              alt=""
              fill
            /> */}
          </Link>
          <div className="h-full md:flex hidden items-center justify-center gap-6 z-50">
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.route}
                className="text-white-main text-lg font-medium flex items-center justify-center gap-2"
              >
                {item.name}

                {/* {item.name === "Pages" && (
                  <FiChevronDown className="text-2xl text-white-main" />
                )} */}
              </Link>
            ))}
          </div>
          {/* START A FREE TRIAL */}
          {/* <button className="md:inline-block hidden py-3 px-6 bg-transparent rounded-[30px] border-[1.5px] border-white-main text-lg text-white-main font-medium z-50 hover:bg-white-main/10 hover:duration-200 ease-in-out">
            Start free trial
          </button> */}
          <button className="md:hidden flex" onClick={toggleDrawer}>
            <BiMenuAltRight className="text-white-main text-3xl" />
          </button>
        </div>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "100%" }}
        className="bla bla bla"
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-6 p-4">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer}>
              <MdCancel className="text-3xl text-red-600" />
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-12">
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.route}
                onClick={toggleDrawer}
                className="text-black-main text-lg font-medium flex items-center justify-center "
              >
                {item.name}
                {item.name === "Pages" && (
                  <FiChevronDown className="text-2xl text-black-main" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
