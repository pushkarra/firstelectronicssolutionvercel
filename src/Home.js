import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureProducts from './components/FeatureProducts';
import Services from "./components/Services";
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "First Electronics Solutions",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Footer />
    </>
  );
};

export default Home;