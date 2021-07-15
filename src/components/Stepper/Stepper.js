import React, { useState } from "react";
import styled from "styled-components";

import Step1 from "../../assets/images/step1.png";
import Step2 from "../../assets/images/step2.png";
import Step3 from "../../assets/images/step3.png";
import Step4 from "../../assets/images/step4.png";

import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";

const stepsOption = [
  {
    icon: Step1,
    title: "Beautiful and Easy User Interface",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: Image1,
  },
  {
    icon: Step2,
    title: "Antibot Handling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: Image2,
  },
  {
    icon: Step3,
    title: "Captcha Service Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: Image3,
  },
  {
    icon: Step4,
    title: "24/7 Discord Support Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: Image4,
  },
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
          <div key={index} onClick={() => stepClicked(index)}>
            {Step === index ? (
              <TextStepperClicked>
                <img src={step.icon} alt="example" />
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </TextStepperClicked>
            ) : (
              <TextStepper>
                <img src={step.icon} alt="example" />
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </TextStepper>
            )}
          </div>
        ))}
      </WrapperText>

      <WrapperImage>
        {Step === null && <img src={Image1} alt="example" />}
        {Step === 0 && <img src={Image1} alt="example" />}
        {Step === 1 && <img src={Image2} alt="example" />}
        {Step === 2 && <img src={Image3} alt="example" />}
        {Step === 3 && <img src={Image4} alt="example" />}
      </WrapperImage>
    </Container>
  );
};

const Container = styled.div`
  background-color: #181a2b;
  margin-left: -13%;
  margin-right: -13%;
  padding: 10% 20% 10% 20%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const WrapperText = styled.div`
width: 50%;
`;
const WrapperImage = styled.div`
width: 50%;
`;
const TextStepper = styled.div`
  cursor: pointer;
  margin-bottom: 3rem;
  p {
    color: #c3caea;
  }
  h4 {
    color: white;
  }
`;
const TextStepperClicked = styled.div`
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

export default Stepper;
