import React from "react";
import styled from "styled-components";

import {Hero, Navbar, VariosSites, Feature, Stepper, Questions, Footer} from './components/index'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <VariosSites/>
      <Feature/>
      <Stepper/>
      <Questions/>
      <Footer/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;


export default App;
