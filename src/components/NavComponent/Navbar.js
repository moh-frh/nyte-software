import React, { useState } from "react";
import styled from "styled-components";
import LogoIcon from "./Logo";
import Dashboard from "../../components/NavComponent/Dashboard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <Container>
        <LogoIcon />
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Home</MenuLink>
            <MenuLink href="">Features</MenuLink>
            <MenuLink href="">Sitelist</MenuLink>
            <MenuLink href="">FAQ</MenuLink>
          </LinkWrapper>
        </Menu>
        <Dashboard />

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <svg width="31" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 2h30.5M10.383 13.68H30.5" stroke="#fff" stroke-width="2.596"></path></svg>
        </Hamburger>
      </Container>
  );
};


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;





const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 960px) {
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 960px) {
    flex-direction: column;
  }

`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  span {
    width: 30.5px;
    border: 2.59574px solid #ffffff;
    background: white;
    margin: 3px;
  }
  
  ${'' /* span: nth-child(2) {
    width: 20.12px;
    background: white;
    margin: 5px;
    border: 2.59574px solid #ffffff;
    margin-bottom: 5px;
  } */}

  @media (max-width: 960px) {
    display: flex;
  }
`;

export default Navbar;