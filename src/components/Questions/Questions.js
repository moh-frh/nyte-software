import React, { useState } from "react";
import styled from "styled-components";
import Faq from "../../assets/images/faq.png";
import Plus from "../../assets/images/plus.png";

import Minus from "../../assets/images/minus.png";

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
                  {state?.id === index && !!state?.flag ? (
                    <img src={Minus} />
                  ) : (
                    <img src={Plus} />
                  )}
                </DropdownAction>

                <DropdownTitle>{title}</DropdownTitle>
                {state?.id === index && !!state?.flag && (
                  <DropdownDescription>{description}</DropdownDescription>
                )}
              </DropdownText>
            </DropdownContent>
          ))}
        </DropdownContents>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
    margin-bottom: 10%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  p {
    color: white;
  }
`;
const DropdownTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-left: 5%;
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
  width: 50%;
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
