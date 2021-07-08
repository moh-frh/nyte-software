import React from "react";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/NavComponent/Navbar";
import VariosSites from "./components/VariosSitesComponent/VariosSitesComponent";
import Feature from "./components/FeatureComponent/Feature"
import Stepper from './components/Stepper/Stepper'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'
import Terms from './components/Terms/Terms'
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <VariosSites/>
      <Feature/>
      <Stepper/>
      <Questions/>
      <Footer/>
    </>
  );
};




export default App;
