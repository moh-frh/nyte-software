import React from "react";

import styled from "styled-components";

const Terms = () => {
  return (
    <Container>
      <Rights>© 2021 Nyte Software. All rights reserved</Rights>

      <ContainerTerms>
        <TermsCondition>Terms & Conditions</TermsCondition>
        <TermsCondition>Privacy Policy</TermsCondition>
      </ContainerTerms>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #24263c;
  margin-top: 2rem;
  padding-top: 2rem;
`;

const ContainerTerms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Rights = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #c3caea;
`;
const TermsCondition = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #6b9fff;

  margin: 2rem
`;

export default Terms;
