import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ShopCategory = () => {
  const slideRef = useRef();

  const handleClick = (direction) => {
    const scrollAmount = slideRef.current.clientWidth;
    if (direction === "right") {
      slideRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    if (direction === "left") {
      slideRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-4 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">Shop By Category</h1>
      <main className="w-full overflow-auto sm:overflow-hidden hide-x-scrollbar" ref={slideRef}>
        <div className="flex gap-x-4 sm:gap-x-6">
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="/category/engagement.avif"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h4 className="text-lg cursor-pointer hover:text-[#0d6363]">
              Engagement Rings
            </h4>
          </div>
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="/category/women.avif"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h4 className="text-lg cursor-pointer hover:text-[#0d6363]">
              Women's Wedding Rings
            </h4>
          </div>
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="/category/men.avif"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h4 className="text-lg cursor-pointer hover:text-[#0d6363]">
              Men's Wedding Rings
            </h4>
          </div>
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="/category/gemstone.avif"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h4 className="text-lg cursor-pointer hover:text-[#0d6363]">
              Gemstone Rings
            </h4>
          </div>
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="/category/fine.avif"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h4 className="text-lg cursor-pointer hover:text-[#0d6363]">
              Fine Jewerly
            </h4>
          </div>
        </div>
      </main>
      <div
        className="hidden sm:flex w-14 h-14 justify-center items-center rounded-full bg-white absolute top-[40%] lg:top-[50%] left-8  lg:left-20 cursor-pointer"
        onClick={() => handleClick("left")}
      >
        <MdKeyboardArrowLeft size={40} />
      </div>
      <div
        className="hidden sm:flex w-14 h-14 justify-center items-center rounded-full bg-white absolute top-[40%] lg:top-[50%] right-8 lg:right-20 cursor-pointer"
        onClick={() => handleClick("right")}
      >
        <MdKeyboardArrowRight size={40} />
      </div>
    </section>
  );
};

export default ShopCategory;
