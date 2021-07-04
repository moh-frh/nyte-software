import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import HeroText from "./HeroText";
import Tilt from "react-tilt";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InnerWrapper = styled.div`
margin: 10% 9% 10% 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    // background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  background-color: #151724;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Hero;
