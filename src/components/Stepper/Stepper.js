import React from "react";
import styled from "styled-components";

import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";

import Image1 from "../../assets/image1.png";
const Stepper = () => {
  return (
    <Container>
      <WrapperText>
        <TextStepper>
          <img src={Step1} />
          <h4>Beautiful and Easy User Interface</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </TextStepper>
        <TextStepper>
          <img src={Step2} />
          <h4>Antibot Handling</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </TextStepper>
        <TextStepper>
          <img src={Step3} />
          <h4>Captcha Service Support</h4>
          <p>
            2Captcha, CapMonster, AntiCaptcha, AYCD AutoSolve. Consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </TextStepper>
        <TextStepper>
          <img src={Step4} />
          <h4>24/7 Discord Support Team</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </TextStepper>
      </WrapperText>

      <WrapperImage>
        <img src={Image1} />
      </WrapperImage>
    </Container>
  );
};

const Container = styled.div`
  background-color: #181A2B;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10rem;
`;
const WrapperText = styled.div``;
const WrapperImage = styled.div``;
const TextStepper = styled.div`
  &:focus {
    background-color: red;
  }
  cursor: pointer;
  border-left: 3px solid #6b9fff;
  padding-left: 3rem;
  margin-bottom: 3rem;
  p {
    color: #c3caea;
  }
  h4 {
    color: white;
  }
`;
const ImageStepper = styled.div``;

export default Stepper;
