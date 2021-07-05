import React from "react";
import styled from "styled-components";
import NyteLogo from "../../assets/logo.png";
import Terms from '../../components/Terms/Terms'
const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={NyteLogo} />
        <p>Nyte Software</p>
      </Logo>

      <Links>
        <Navigations>
          <h1>Navigation</h1>
          <NavigationContent>
            <p>Home</p>
            <p>Feature</p>
            <p>Sitelist</p>
            <p>FAQ</p>
          </NavigationContent>
        </Navigations>

        <UsefullLinks>
          <h1>Useful Links</h1>
          <p>Dashboard</p>
        </UsefullLinks>

        <Socials>
          <h1>Socials</h1>
          <NavigationContent>
            <p>Twitter</p>
            <p>Instagram</p>
          </NavigationContent>
        </Socials>
      </Links>

      <Terms/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background: #121321;
  padding: 2% 10% 2% 10%;
  `;
  
  const Logo = styled.div`

  color: #6b9fff;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  h1 {
    color: #c3caea;
  }
  p {
    color: white;
  }
`;
const Navigations = styled.div``;
const NavigationContent = styled.div`
  display: flex;
  flex-direction: row;
  p{
      margin: 1rem;
  }
`;

const UsefullLinks = styled.div``;
const Socials = styled.div``;

export default Footer;
