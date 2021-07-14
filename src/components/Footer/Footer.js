import React from "react";
import styled from "styled-components";
import NyteLogo from "../../assets/images/logo.png";
import Terms from "../../components/Terms/Terms";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={NyteLogo} />
        <h4>Nyte Software</h4>
      </Logo>

      <Links>
        <Navigations>
          <h3>Navigation</h3>
          <NavigationContent>
            <p>Home</p>
            <p>Feature</p>
            <p>Sitelist</p>
            <p>FAQ</p>
          </NavigationContent>
        </Navigations>

        <Navigations>
          <h3>Useful Links</h3>
          <NavigationContent>
            <p>Dashboard</p>
          </NavigationContent>
        </Navigations>
        <Navigations>
          <h3>Socials</h3>
          <NavigationContent>
            <p>Twitter</p>
            <p>Instagram</p>
          </NavigationContent>
        </Navigations>

      </Links>

      <Terms />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  background: #121321;
  padding: 5%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  height: 40px;
  img{
    margin-right: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  h3 {
    color: #c3caea;
  }
  p {
    color: white;
  }
`;
const Navigations = styled.div`
`;
const NavigationContent = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin-right: 2rem;
  }
`;

export default Footer;
