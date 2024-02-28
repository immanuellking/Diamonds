import React from "react";

const Jewelry = () => {
  return (
    <section className="relative px-4 lg:px-8 py-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">Jewelry Trends</h1>

      <main className="w-full overflow-auto">
        <div className="flex gap-x-4 lg:gap-x-8 min-w-[1000px] sm:min-w-full">
          <div className="w-full space-y-4 group ">
            <div>
              <img src="/jewerly/personalized.avif" className="w-full" alt="" />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Personalized Jewerly
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img src="/jewerly/heart-shaped.avif" className="w-full" alt="" />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Heart Shaped Jewelry
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img src="/jewerly/tennis.avif" className="w-full" alt="" />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Tennis Jewelry
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img src="/jewerly/gold.avif" className="w-full" alt="" />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Gold Chains
            </h4>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Jewelry;
