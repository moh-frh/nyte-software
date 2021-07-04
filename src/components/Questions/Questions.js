import React from "react";
import styled from "styled-components";
import Faq from "../../assets/faq.png";
import Plus from "../../assets/plus.png";
const Questions = () => {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <Wrapper>
        <ImageContent>
          <img src={Faq} />
        </ImageContent>

        <DropdownContents>
          <DropdownContent>
            <DropdownAction>
              <img src={Plus} />
            </DropdownAction>
            <DropdownTitle>How much is Nyte AIO?</DropdownTitle>
          </DropdownContent>
          <DropdownContent>
            <DropdownAction>
              <img src={Plus} />
            </DropdownAction>
            <DropdownTitle>When do you restock?</DropdownTitle>
          </DropdownContent>
          <DropdownContent>
            <DropdownAction>
              <img src={Plus} />
            </DropdownAction>
            <DropdownTitle>What countries do you support?</DropdownTitle>
          </DropdownContent>
          <DropdownContent>
            <DropdownAction>
              <img src={Plus} />
            </DropdownAction>
            <DropdownTitle>What operating systems do you support?</DropdownTitle>
          </DropdownContent>
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
const DropdownDescription = styled.div``;
const DropdownAction = styled.div``;
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
  flex-direction: row;
  padding: 1rem;
  width: 100%;
  margin: 0.5rem;
`;

const ImageContent = styled.div`
width: 50%;
`;


export default Questions;
