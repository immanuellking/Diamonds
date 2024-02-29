import React from "react";
import { FaPlay } from "react-icons/fa";

const Inspired = () => {
  const numbersArray = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <section className="px-4 lg:px-8 py-8 pb-20">
      <main className="bg-[#183E40] pt-8 pb-10 sm:pb-16  lg:pt-12 lg:pb-12 space-y-8 lg:space-y-12">
        <div className="text-white px-4 lg:px-8 flex justify-center sm:justify-between items-end">
          <h1 className="text-2xl sm:text-3xl kg:text-4xl tracking-wide lg:tracking-wider">
            Get Inspired
          </h1>
          <p className="hidden sm:block underline">Shop Insta</p>
        </div>

        <div className="w-full overflow-auto px-4 lg:px-8 hide-x-scrollbar">
          <div className="flex gap-x-4">
            {numbersArray.map((num) => (
              <div className="relative group cursor-pointer">
                <div className="absolute top-4 right-4 rounded-full flex items-center justify-center">
                  <img
                    src="https://likeshop.me/static/img/video.svg"
                    className="w-8"
                  />
                </div>
                <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px]">
                  <img
                    src={`insta-${num}.webp`}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="absolute group-hover:bg-[rgba(0,0,0,0.8)] bg-[rgba(0,0,0,0)] inset-0 flex items-center justify-center transition-all duration-300 ease-linear">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                    Shop Now
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="block sm:hidden text-center text-white underline">Shop Insta</p>
      </main>
    </section>
  );
};

export default Inspired;
