import React from "react";
import styled from "styled-components";
import champs from "../../assets/images/champs.svg";
import footaction from "../../assets/images/footaction.png";
import footLocker from "../../assets/images/foot_looker.png";
import yeezy from "../../assets/images/yeezy.png";
import kids from "../../assets/images/kids.png";
import Eastbay from "../../assets/images/eastbay.png";

const VariosSites = () => {
  return (
    <Container>
      <Title>Supporting various sites such as</Title>
      <Images>
        <img src={yeezy}  alt="example"/>
        <img src={kids}  alt="example"/>
        <img src={Eastbay} alt="example" />
        <img src={footaction}  alt="example"/>
        <img src={champs}  alt="example"/>
        <img src={footLocker}  alt="example"/>
      </Images>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 17%;
  margin-bottom: 17%;
`;
const Title = styled.p`
  font-family: Inter;
font-weight: 600;
font-size: 21px;
line-height: 25px;
text-align: center;

color: #6B9FFF;
`;
const Images = styled.h3`
  img {
    margin: 1rem;
  }
`;

export default VariosSites;
