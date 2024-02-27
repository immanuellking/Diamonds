import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShopByShape from "../components/ShopByShape";
import ShopCategory from "../components/ShopCategory";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ShopByShape />
      <ShopCategory />
    </div>
  );
};

export default HomePage;
