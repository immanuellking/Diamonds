import React from "react";

const Appointment = () => {
  return (
    <section className="px-4 lg:px-8 py-8">
      <main className="space-y-4 lg:space-y-8">
        <div className="w-full">
          <img src="/appointments.avif" className="w-full hidden sm:block" alt="banner" />
          <img src="/appointment-mobile.avif" className="w-full sm:hidden block" alt="banner" />
        </div>
        <div className="sm:w-[60%] lg:w-[40%] space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl">We're Here For You</h1>
            <p className="text-sm text-gray-600">
              Appointments curated just for you. Start your stack, find your
              fit, design the perfect piece.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="w-full border-[1px] border-black py-3 sm:py-2.5 text-sm hover:bg-[#2c2c2c] hover:text-white transition-all duration-300 ease-in-out">Visit a Showroom</button>
            <button className="w-full border-[1px] border-black py-3 sm:py-2.5 text-sm hover:bg-[#2c2c2c] hover:text-white transition-all duration-300 ease-in-out">Book a Virtual Appointment</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Appointment;
