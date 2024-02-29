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
      <main
        className="w-full overflow-auto sm:overflow-hidden hide-x-scrollbar"
        ref={slideRef}
      >
        <div className="flex gap-x-4 sm:gap-x-6">
          <div className="space-y-4">
            <div className="w-[17rem] h-[20rem] sm:w-[22rem] sm:h-[25rem] lg:w-[25rem] lg:h-[30rem]">
              <img
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F2deb0269d2a847a4b914d7c2fcba46b9"
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
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F440f54ad4d334dc99a8da50d08f7bc47"
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
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F5a390a4ec00347b5a10777fe86a9e4e6"
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
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F0e0e597fee554dd3859e168902d93f20"
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
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F38df13186cd64f0fb3fba21de728c4e3"
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
