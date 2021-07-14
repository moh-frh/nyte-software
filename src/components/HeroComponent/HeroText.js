import React from "react";
import styled from "styled-components";
import Aio from "../../assets/images/aio.png";
import Splash from "../../assets/images/splash.png";
import colors from './../../assets/colors/colors';

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
          <HomeNyteImage>
            <img src={Aio} />
          </HomeNyteImage>
          <HomeNyteTitle>Home of Nyte AIO</HomeNyteTitle>
          <HomeNyteDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </HomeNyteDesc>
        </HomeNyteContent>

        <HomeNyteContent>
          <HomeNyteImage>
            <img src={Splash} />
          </HomeNyteImage>

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
  margin: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeNyteContent = styled.div``;

const HomeNyteImage = styled.image`
`
const HomeNyteTitle = styled.h4`
  color: white;
`;
const HomeNyteDesc = styled.p`
  color: #c3caea;
  margin-top: -5%;
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
  }

  .readmore {
    background: transparent;;
    border: 1px solid rgba(107, 159, 255, 0.5);
    color: #6b9fff;

    box-sizing: border-box;
    border-radius: 4px;
    &:hover {
      border: 1px solid #6b9fff;
    }
  }
`;

const Container = styled.div`
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 960px) {
    width: 100%
  }
`;

export default HeroText;
