import React from "react";

const EndSoon = () => {
  return (
    <section className="w-full px-4 lg:px-8">
      <div className="flex justify-center bg-[#183E40]">
        <div>
          <img src="/public/end.webp" alt="" />
        </div>
        <div className="flex flex-col justify-center gap-y-2 text-white">
          <h1 className="text-lg uppercase">Ends Soon!</h1>
          <div className="text-sm">
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
