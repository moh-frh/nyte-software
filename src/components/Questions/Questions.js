import React, { useState } from "react";
import styled from "styled-components";
import Faq from "../../assets/faq.png";
import Plus from "../../assets/plus.png";

const dropdownOptions = [
  {
    title: "How much is Nyte AIO?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation.`,
  },

  {
    title: "When do you restock?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation.`,
  },

  {
    title: "What countries do you support?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation.`,
  },
  {
    title: "What operating systems do you support?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation.`,
  },
];

const Questions = () => {
  const [state, setstate] = useState(null);

  const dropdownClicked = (id) => (e) => {
    if (state?.flag === true) {
      if (id !== state?.id) {
        setstate({ id, flag: true });
      } else {
        setstate(null);
      }
    } else {
      setstate({ id, flag: true });
    }
  };
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <Wrapper>
        <ImageContent>
          <img src={Faq} />
        </ImageContent>

        <DropdownContents>
          {dropdownOptions.map(({ title, description }, index) => (
            <DropdownContent key={index} onClick={dropdownClicked(index)}>
              <DropdownText>
                <DropdownAction>
                  <img src={Plus} />
                </DropdownAction>

                <DropdownTitle>
                  {title}
                </DropdownTitle>
              </DropdownText>
                {state?.id === index && !!state?.flag && (
                  <DropdownDescription>{description}</DropdownDescription>
                )}
            </DropdownContent>
          ))}
        </DropdownContents>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 10rem;
  h1 {
    color: white;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: white;
  }
`;
const Title = styled.div``;
const DropdownTitle = styled.div`
  
  color: white;
`;
const DropdownDescription = styled.div`
  margin-left: 5%;
  margin-top: 5%;
  color: #c3caea;
  border-left: 2px solid #6b9fff;
  padding-left: 5%;
`;
const DropdownAction = styled.div``;
const DropdownText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
const DropdownContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const DropdownContent = styled.div`
  background: #1d1f31;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  margin: 0.5rem;
  cursor: pointer;
`;

const ImageContent = styled.div`
  width: 50%;
`;

export default Questions;
