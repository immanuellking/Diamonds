import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShopByShape from "../components/ShopByShape";
import ShopCategory from "../components/ShopCategory";
import EndSoon from "../components/EndSoon";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ShopByShape />
      <ShopCategory />
      <EndSoon />
    </div>
  );
};

export default HomePage;
