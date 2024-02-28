import React from "react";
import { FaPlay } from "react-icons/fa";

const Inspired = () => {
  const numbersArray = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <section className="px-4 lg:px-8 py-8">
      <main className="bg-[#183E40] py-12 space-y-12">
        <div className="text-white px-8 flex justify-between items-end">
          <h1 className="text-4xl tracking-wider">Get Inspired</h1>
          <p className="underline">Shop Insta</p>
        </div>

        <div className="w-full overflow-auto px-8">
          <div className="flex gap-x-4">
            {numbersArray.map((num) => (
              <div className="relative">
                <div className="absolute top-4 right-4 rounded-full flex items-center justify-center">
                  <img src="https://likeshop.me/static/img/video.svg" className="w-8" />
                </div>
                <div className="w-[350px] h-[350px]">
                  <img
                    src={`/public/inspired/insta-${num}.webp`}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0 flex items-center justify-center">
                    <p className="text-white">Shop Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Inspired;
