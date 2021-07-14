import React from "react";

import {Hero, Navbar, VariosSites, Feature, Stepper, Questions, Footer} from './components/index'

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
