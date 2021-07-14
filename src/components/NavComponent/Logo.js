import React from "react";
import NyteLogo from '../../assets/images/logo.png'
import styled from "styled-components";

const Logo = () => {
  return (
    <Container>
      <img src={NyteLogo} />
      <p>Nyte Software</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  img{
    margin: 5px;
  }
`;
export default Logo;
