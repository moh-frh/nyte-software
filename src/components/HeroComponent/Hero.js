import React from "react";
import styled from "styled-components";
import image from "../../assets/images/hero.png";
import HeroText from "./../HeroComponent/HeroText";

const Hero = () => {
  return (
    <Container>
      <InnerWrapper>
        <HeroText />
        <Img src={image} alt="@gouthamgtronics" />
      </InnerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #151724;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



export default Hero;
