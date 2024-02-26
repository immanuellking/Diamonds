import React, { useState } from "react";
import { PiMonitor } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline, IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { RiHandbagLine } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";

const products = [
  "Engagement rings",
  "wedding rings",
  "diamond",
  "gemstones",
  "jewerly",
  "gifts",
  "about",
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      <div className="w-full bg-[#183E40] text-center text-white font-normal sm:font-medium text-[11px] sm:text-sm py-2">
        <p>
          ENDS SOON! Receive Up to $450 of Jewerly With Purchase Over $1,000.
          &#62;
        </p>
      </div>

      <div className="hidden sm:w-[95%] lg:w-[80%] mx-auto sm:flex justify-between pt-6">
        <div className="flex gap-x-4 text-sm flex-1">
          <p>Stores</p>
          <div className="flex gap-x-1">
            <PiMonitor size={20} /> <p>Virtual</p>
          </div>
        </div>

        <div className="flex-2 text-center">
          <h1 className="text-4xl lg;text-5xl font-light uppercase">
            Fine Jewerly Lab<sup>&#174;</sup>
          </h1>
        </div>

        <div className="flex-1 flex justify-end items-start gap-x-2 lg:gap-x-6">
          <FiSearch size={20} className="cursor-pointer" />
          <IoPersonOutline size={20} className="cursor-pointer" />
          <IoHeartOutline size={20} className="cursor-pointer" />
          <IoBagOutline size={20} className="cursor-pointer" />
          <div className="flex items-center gap-x-1">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/united-states-flag-logo-png-transparent.png"
              className="w-4 h-3"
              alt=""
            />
            <div className="flex items-center">
              <p>USA</p>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex w-[80%] lg:w-[60%] mx-auto py-4">
        <ul className="w-full flex justify-between text-sm lg:text-normal">
          <li className="hover:text-[#0d6363] cursor-pointer">
            ENGAGEMENTS RINGS
          </li>
          <li className="hover:text-[#0d6363] cursor-pointer">WEDDING RINGS</li>
          <li className="hover:text-[#0d6363] cursor-pointer">DIAMONDS</li>
          <li className="hover:text-[#0d6363] cursor-pointer">GEMSTONES</li>
          <li className="hover:text-[#0d6363] cursor-pointer">JEWERLY</li>
          <li className="hover:text-[#0d6363] cursor-pointer">GIFTS</li>
          <li className="hover:text-[#0d6363] cursor-pointer">ABOUT</li>
        </ul>
      </div>

      <div className="block sm:hidden p-2 px-4 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaBars size={25} onClick={() => setOpen(!open)} />
            <PiMonitor size={25} />
          </div>
          <div>
            <h1 className="text-2xl font-light uppercase">
              Fine Jewerly Lab<sup>&#174;</sup>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <BsTelephone size={25} />
            <RiHandbagLine size={25} />
          </div>
        </div>
        <div
          className={`${
            open ? "hidden" : "flex"
          } w-full h-10 border-[1px] items-center my-2 px-2 transition-all duration-200 ease-in`}
        >
          <input type="search" className="w-[95%] h-6 border-0 outline-0" />
          <FiSearch size={25} className="" />
        </div>

        <div
          className={`${
            open ? "left-0" : "left-[-500px]"
          } min-w-[350px] h-[90vh] overflow-auto absolute top-[80px] bg-white py-4 px-4 transition-all duration-200 ease-in`}
        >
          <div className="">
            <div className="w-full h-10 border-[1px] flex items-center my-4 px-2">
              <input type="search" className="w-[95%] h-6 border-0 outline-0" />
              <FiSearch size={25} className="" />
            </div>

            <div className="space-y-4 mt-2">
              {products.map((item, index) => (
                <div className="flex justify-between border-b-[1px] py-2">
                  <p className="uppercase font-light tracking-wider">{item}</p>
                  <MdKeyboardArrowRight size={27} />
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-2 mb-10">
              <div className="flex gap-x-2 py-2">
                <PiMonitor size={27} />
                <p className="uppercase font-light tracking-wider">
                  virtual appointment
                </p>
              </div>
              <div className="flex gap-x-2 py-2">
                <TbMessageCircle2 size={27} />
                <p className="uppercase font-light tracking-wider">
                  contact us
                </p>
              </div>
              <div className="flex gap-x-2 py-2">
                <IoPersonOutline size={27} />
                <p className="uppercase font-light tracking-wider">sign in</p>
              </div>
              <div className="flex gap-x-2 py-2">
                <IoHeartOutline size={27} />
                <p className="uppercase font-light tracking-wider">wish list</p>
              </div>
              <div className="flex gap-x-2 py-2">
                <IoBagOutline size={27} />
                <p className="uppercase font-light tracking-wider">my bag</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/united-states-flag-logo-png-transparent.png"
                  className="w-8 h-4"
                  alt=""
                />
                <div className="flex items-center">
                  <p className="uppercase font-light tracking-wider">
                    select your country
                  </p>
                  <MdKeyboardArrowDown size={27} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
