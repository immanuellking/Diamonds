import React from "react";

const EndSoon = () => {
  return (
    <section className="w-full px-4 lg:px-8">
      <div className="flex justify-center bg-[#183E40]">
        <div className="basis-[50%] flex justify-end" >
          <img src="/end.webp" alt="" />
        </div>
        <div className="flex flex-col justify-center gap-y-2 text-white basis-[50%]  py-8 sm:py-0 px-4 sm:px-0">
          <h1 className="text-lg uppercase">Ends Soon!</h1>
          <div className="text-xs sm:text-sm space-y-4 sm:space-y-0">
            <p>
              <span className="font-semibold">Stud Earrings</span> with purchase
              over $1,000.
            </p>
            <p>
              <span className="font-semibold">
                Stud Earrings & Diamond Necklace
              </span>{" "}
              with purchase over $3,000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSoon;
