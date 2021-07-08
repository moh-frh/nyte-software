import React, { useState } from "react";
import styled from "styled-components";

import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";

const stepsOption = [
  {
    icon: Step1,
    title: "Beautiful and Easy User Interface",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    icon: Step2,
    title: "Antibot Handling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    icon: Step3,
    title: "Captcha Service Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    icon: Step4,
    title: "24/7 Discord Support Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const imagesOption = [
  { image: Image1 },
  { image: Image2 },
  { image: Image3 },
  { image: Image4 },
];

const Stepper = () => {
  const [Step, setStep] = useState(null);

  const stepClicked = (index) => {
    console.warn("clicked: ", index);
    setStep(index);
  };

  return (
    <Container>
      <WrapperText>
        {stepsOption.map((step, index) => (
          <TextStepper key={index} onClick={() => stepClicked(index)}>
            <img src={step.icon} />
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </TextStepper>
        ))}
      </WrapperText>

      <WrapperImage>
        {(Step === null) && <img src={Image1} /> }
        {(Step === 0) && <img src={Image1} /> }
        {(Step === 1) && <img src={Image2} /> }
        {(Step === 2) && <img src={Image3} /> }
        {(Step === 3) && <img src={Image4} /> }
        
        
      </WrapperImage>
    </Container>
  );
};

const Container = styled.div`
  background-color: #181a2b;
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
