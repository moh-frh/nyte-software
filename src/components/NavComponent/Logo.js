import React from "react";
import NyteLogo from "../../assets/images/logo.png";
import styled from "styled-components";

const Logo = () => {
  return (
    <Container>
      <img src={NyteLogo} alt="example" />
      <p>Nyte Software</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  p {

    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
  }
  img {
    margin: 5px;
  }
`;
export default Logo;
