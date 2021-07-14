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
        <img src={yeezy} />
        <img src={kids} />
        <img src={Eastbay} />
        <img src={footaction} />
        <img src={champs} />
        <img src={footLocker} />
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
const Title = styled.h3`
  color: #6b9fff;
`;
const Images = styled.h3`
  img {
    margin: 1rem;
  }
`;

export default VariosSites;
