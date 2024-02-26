import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[85vh] lg:h-[75vh] px-12 flex justify-end sm:justify-center lg:justify-end items-end lg:items-center bg-center bg-cover bg-no-repeat sm:bg-cover bg-[url('https://image.brilliantearth.com/cdn-cgi/image/width=998,height=1330,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F71d996c369994ce999ca8b4e5358e85a')] sm:bg-[url('https://image.brilliantearth.com/cdn-cgi/image/width=2880,height=1040,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fee11053e12eb482cbead685201881210')]">
      <div className="space-y-6 mb-8 lg:mb-0">
        <h1 className="text-center lg:text-left text-4xl">Coming Up Roses</h1>
        <p className="text-center lg:text-left">
          Let your love story bloom with one-of-a-kind engagement ring.
        </p>
        <div className="space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 text-sm flex flex-col sm:flex-row justify-center lg:justify-start">
          <button className="bg-[#183E40] border-[1px] border-[#183E40] text-white px-10 py-3 sm:px-8">
            Shop Engagement Rings
          </button>
          <button className="bg-transparent border-[1px] border-black px-10 py-3 sm:px-8">
            Shop Wedding Rings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
