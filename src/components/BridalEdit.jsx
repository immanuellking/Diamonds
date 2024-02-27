import React from "react";

const BridalEdit = () => {
  return (
    <section className="relative px-4 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-12">
      <div className="w-full text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">The Bridal Edit</h1>
        <p className="text-gray-500">Distinct designs that speak to your love story</p>
      </div>

      <main className="w-full grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="w-full col-span-6">
            <div>
                <img src="/bridal/nature.avif" className="w-full" alt="" />
            </div>
            <div>
                <h4 className="text-3xl">Nature Inspired Rings</h4>
                <p>Shop Now</p>
            </div>
        </div>
        <div className="w-full col-span-6">
            <div>
                <img src="/bridal/Three.avif" className="w-full" alt="" />
            </div>
            <div>
                <h4>Three Stone Rings</h4>
                <p>Shop Now</p>
            </div>
        </div>
        <div className="w-full col-span-6">
            <div>
                <img src="/bridal/bridal.avif" className="w-full" alt="" />
            </div>
            <div>
                <h4>Bridal Sets</h4>
                <p>Shop Now</p>
            </div>
        </div>
        <div className="w-full col-span-6">
            <div>
                <img src="/bridal/hidden.avif" className="w-full" alt="" />
            </div>
            <div>
                <h4>Hidden Halo Rings</h4>
                <p>Shop Now</p>
            </div>
        </div>
      </main>
    </section>
  );
};

export default BridalEdit;
