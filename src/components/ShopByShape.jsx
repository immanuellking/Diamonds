import React from "react";

const shapes = [
  "round",
  "oval",
  "emerald",
  "cushion",
  "pear",
  "radiant",
  "princess",
  "marquise",
  "asscher",
  "heart",
];

const ShopByShape = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 space-y-12">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
        Shop Diamonds by Shape
      </h1>
      <div className="w-full">
        <main className="w-full">
          <div className=" flex lg:justify-center px-8 snap-mandatory snap-center gap-x-14 overflow-auto">
            {shapes.map((shape, index) => (
              <div key={index} className="space-y-4 flex flex-col items-center">
                <div style={{ width: "70px", height: "70px" }}>
                  <img
                    src={`/public/shape/${shape}.webp`}
                    className="w-full "
                    alt=""
                  />
                </div>
                <div className="w-full text-center capitalize">
                  <p>{shape}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ShopByShape;
