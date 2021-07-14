import React from "react";
import styled from "styled-components";
import FeatureImage from "../../assets/images/feature-image.png";
import DeclinesImage from "../../assets/images/declines.png";


const Feature = () => {
  return (
    <>
      <Container>
        <FeatureText>
          <h3>FEATURE</h3>
          <h1>Unmatched Performance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </FeatureText>
        <FeatureImageContent>
          <img src={FeatureImage} alt="example" />
        </FeatureImageContent>
      </Container>
      <Container>
        <FeatureImageContent>
          <img src={DeclinesImage} alt="example"/>
        </FeatureImageContent>

        <FeatureText>
          <h3>FEATURE</h3>
          <h1>Task, Profile, and Proxy Groups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </FeatureText>
      </Container>
    </>
  );
};

const FeatureText = styled.div`
  padding: 10%;
  width: 50%;
  h3 {
    color: #6b9fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  h1 {
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 21px;
    line-height: 138%;
    /* or 29px */

    color: #c3caea;
  }
`;
const FeatureImageContent = styled.div`
  width: 50%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-top: 5%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default Feature;
