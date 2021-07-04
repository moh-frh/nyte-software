import React from "react";
import styled from "styled-components";
import Aio from "../../assets/aio.png";
import Splash from "../../assets/splash.png";

const HeroText = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet consectetur adipiscing elit</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Description>
      <BtnContainer>
        <button className="readmore">$599 - Sold Out</button>
        {/* <button>7 Day Free Trial</button> */}
      </BtnContainer>

      <HomeNyte>
        <HomeNyteContent>
          <div>
            <img src={Aio} />
            <HomeNyteTitle>Home of Nyte AIO</HomeNyteTitle>
            <HomeNyteDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </HomeNyteDesc>
          </div>
        </HomeNyteContent>

        <HomeNyteContent>
          <img src={Splash} />
          <HomeNyteTitle>Home of Nyte Splash</HomeNyteTitle>
          <HomeNyteDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </HomeNyteDesc>
        </HomeNyteContent>
      </HomeNyte>
    </Container>
  );
};

const HomeNyte = styled.div`
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const HomeNyteContent = styled.div``

const HomeNyteTitle = styled.h4`
  color: white;
`;
const HomeNyteDesc = styled.p`
  color: #c3caea;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 63px;
  color: #ffffff;
`;
const Description = styled.p`
  color: #c3caea;
`;

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 1px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export default HeroText;
