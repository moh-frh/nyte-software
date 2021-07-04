import React from "react";
import styled from "styled-components";
import champs from "../../assets/champs.svg";
import footaction from "../../assets/footaction.png";
import footLocker from "../../assets/foot_looker.png";
import yeezy from "../../assets/yeezy.png";
import kids from "../../assets/kids.png";

const VariosSitesComponent = () => {
  return (
    <Container>
      <Title>Supporting various sites such as</Title>
      <Images>
        <img src={champs} />
        <img src={footaction} />
        <img src={footLocker} />
        <img src={yeezy} />
        <img src={kids} />
      </Images>
    </Container>
  );
};

const Title = styled.h3`
color: #6B9FFF
`
const Images = styled.h3`
img{
    margin: 1rem;
}
    
`

const Container = styled.div`
margin: 10rem;
display: flex;
align-items: center;
flex-direction: column;
`;

export default VariosSitesComponent;
