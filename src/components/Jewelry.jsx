import React from "react";

const Jewelry = () => {
  return (
    <section className="relative px-4 lg:px-8 py-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">Jewelry Trends</h1>

      <main className="w-full overflow-auto hide-x-scrollbar">
        <div className="flex gap-x-4 lg:gap-x-8 min-w-[1000px] sm:min-w-full">
          <div className="w-full space-y-4 group ">
            <div>
              <img
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fcaa9166fa9e5495db554c3734dc0071c"
                className="w-full"
                alt=""
              />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Personalized Jewerly
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F7a3a092fa90d495e800b82f72ea4b7bf"
                className="w-full"
                alt=""
              />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Heart Shaped Jewelry
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F0196dc2883be464ba1e7794eacbed1a7"
                className="w-full"
                alt=""
              />
            </div>
            <h4 className="text-base lg:text-lg group-hover:text-[#0d6363]">
              Tennis Jewelry
            </h4>
          </div>
          <div className="w-full space-y-4 group ">
            <div>
              <img
                src="https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F75587660789c4a96a3921fa7f30c21ed"
                className="w-full"
                alt=""
              />
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
