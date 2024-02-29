import React from "react";

const BridalEdit = () => {
  return (
    <section className="relative px-4 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="w-full text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">The Bridal Edit</h1>
        <p className="text-gray-500">
          Distinct designs that speak to your love story
        </p>
      </div>

      <main className="w-full grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="w-full col-span-6 space-y-4 group ">
          <div>
            <img
              src="https://image.brilliantearth.com/cdn-cgi/image/width=1352,height=1690,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F521a0eabaaca42ca98db89ddb26e8f94"
              className="w-full"
              alt=""
            />
          </div>
          <div className="group-hover:text-[#0d6363]">
            <h4 className="text-base sm:text-xl lg:text-3xl">
              Nature Inspired Rings
            </h4>
            <p className="underline text-sm sm:text-base">Shop Now</p>
          </div>
        </div>
        <div className="w-full col-span-6 space-y-4 group ">
          <div>
            <img
              src="https://image.brilliantearth.com/cdn-cgi/image/width=1352,height=1690,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Ff07efa54b3934b618fb8c04f66ddfff2"
              className="w-full"
              alt=""
            />
          </div>
          <div className="group-hover:text-[#0d6363]">
            <h4 className="text-base sm:text-xl lg:text-3xl">
              Three Stone Rings
            </h4>
            <p className="underline text-sm sm:text-base">Shop Now</p>
          </div>
        </div>
        <div className="w-full col-span-6 space-y-4 group ">
          <div>
            <img
              src="https://image.brilliantearth.com/cdn-cgi/image/width=1352,height=1690,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F48725c38a23a4fafa8dd549d9832d7ac"
              className="w-full"
              alt=""
            />
          </div>
          <div className="group-hover:text-[#0d6363]">
            <h4 className="text-base sm:text-xl lg:text-3xl">Bridal Sets</h4>
            <p className="underline text-sm sm:text-base">Shop Now</p>
          </div>
        </div>
        <div className="w-full col-span-6 space-y-4 group ">
          <div>
            <img src="https://image.brilliantearth.com/cdn-cgi/image/width=1352,height=1690,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F6d6ecbef3dad4af89ec96f0a1535adcb" className="w-full" alt="" />
          </div>
          <div className="group-hover:text-[#0d6363]">
            <h4 className="text-base sm:text-xl lg:text-3xl">
              Hidden Halo Rings
            </h4>
            <p className="underline text-sm sm:text-base">Shop Now</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BridalEdit;
