import React from "react";

const Learn = () => {
  return (
    <section className="px-4 lg:px-8 py-8">
      <main className="bg-[#183E40] px-4 sm:px-0 py-16 flex flex-col items-center gap-y-8">
        <div className="flex justify-center gap-8 sm:gap-16">
          <div className="group flex flex-col gap-2 items-center justify-end">
            <div>
              <img
                src="/diamond.png"
                className="w-[48px] sm:w-[93px]"
                alt="diamond"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-white group-hover:text-[#4c8380] group-hover:underline">
              Beyond Conflict Free
            </p>
          </div>
          <div className="group flex flex-col gap-2 items-center">
            <div>
              <img
                src="/recycle.png"
                className="w-[48px] sm:w-[93px]"
                alt="diamond"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-white group-hover:text-[#4c8380] group-hover:underline">
              Recycled Precious Metals
            </p>
          </div>
          <div className="group flex flex-col gap-2 items-center">
            <div>
              <img
                src="hand-shake.png"
                className="w-[48px] sm:w-[93px]"
                alt="diamond"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-white group-hover:text-[#4c8380] group-hover:underline">
              Committed to Giving Back
            </p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-white text-4 sm:px-10 text-center">
          Since our founding in 2005, we've been setting new industry standards
          to build a brighter future in the communities where we operate.
        </p>
        <button className="text-sm border-[1px] border-white w-full sm:w-auto sm:px-8 py-3 hover:bg-white text-white hover:text-[#183E40] transition-all duration-300 ease-in-out">
          Learn More
        </button>
      </main>
    </section>
  );
};

export default Learn;
