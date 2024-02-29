import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShopByShape from "../components/ShopByShape";
import ShopCategory from "../components/ShopCategory";
import EndSoon from "../components/EndSoon";
import BridalEdit from "../components/BridalEdit";
import Jewerly from "../components/Jewelry";
import ShopNow from "../components/ShopNow";
import Learn from "../components/Learn";
import Appointment from "../components/Appointment";
import Inspired from "../components/Inspired";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ShopByShape />
      <ShopCategory />
      <EndSoon />
      <BridalEdit />
      <Jewerly />
      <ShopNow />
      <Learn />
      <Appointment />
      <Inspired />
      <Footer />
    </div>
  );
};

export default HomePage;
