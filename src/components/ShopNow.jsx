import React from "react";

const ShopNow = () => {
  return (
    <section className="px-4 lg:px-8 py-8">
      <main className="flex flex-col sm:flex-row gap-8 sm:gap-4">
        <div className="space-y-8">
          <div>
            <img src="/essentials.avif" alt="" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl">The Essentials Edit</h3>
            <p className="text-gray-600 text-sm lg:text-base">
              It’s time to refresh your jewelry box with the latest in timeless
              must-haves.
            </p>
            <button className="text-sm border-[1px] border-black w-full lg:w-auto lg:px-28 py-2.5 hover:bg-[#2c2c2c] hover:text-white transition-all duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <img src="/sol.avif" alt="" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl">The Sol Collection</h3>
            <p className="text-gray-600 text-sm lg:text-base">
              Discover fine jewelry designed to capture a distinctive style and
              story.
            </p>
            <button className="text-sm border-[1px] border-black w-full lg:w-auto lg:px-28 py-2.5 hover:bg-[#2c2c2c] hover:text-white transition-all duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ShopNow;
