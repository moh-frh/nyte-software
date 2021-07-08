import React, { useState } from "react";
import styled from "styled-components";
import LogoIcon from "./Logo";
import Dashboard from "../../components/NavComponent/Dashboard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Home</MenuLink>
            <MenuLink href="">Features</MenuLink>
            <MenuLink href="">Sitelist</MenuLink>
            <MenuLink href="">FAQ</MenuLink>
          </LinkWrapper>
        </Menu>

        <Dashboard />
      </Container>
    </Nav>
  );
};

export default Navbar;

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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // max-width: 1000px;
  width: 100%;

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

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  margin: 0px 10% 0px 10%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  span: nth-child(1) {
    width: 30.5px;
    border: 2.59574px solid #ffffff;
    background: white;
    margin: 5px;
  }
  
  span: nth-child(2) {
    width: 20.12px;
    background: white;
    margin: 5px;
    border: 2.59574px solid #ffffff;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
