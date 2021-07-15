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
  align-items: space-between;
  flex-direction: column;
  padding: 0% 10% 0% 10%;
`;


export default App;
