import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import Services from "../pages/Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards/>
      <Services/>
    </div>
  );
};

export default Home;
