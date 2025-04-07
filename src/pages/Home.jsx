// Home page layout including main content sections
// File: Home.jsx

import React from "react";
import HeroSection from "../sections/HeroSection";
import SectionExploring from "../sections/Section_Exploring";
import NextExploringOurUnique from "../sections/Next_Exploring_Our_Unique";
import Blog from "./Blog";
import NewCollection from "../components/NewCollection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionExploring />
      <NextExploringOurUnique />
      <Blog />
      <NewCollection />
    </>
  );
};

export default Home;
