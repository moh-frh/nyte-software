import React from "react";

import styled from "styled-components";

const Terms = () => {
  return (
    <Container>
      <Rights>© 2021 Nyte Software. All rights reserved</Rights>

      <TermsCondition>Terms & Conditions Privacy Policy</TermsCondition>
    </Container>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border-top: 1px solid #24263C;
margin-top: 2rem;
padding-top: 2rem;
`;
const Rights = styled.div`
  width: 75%;
  color: #c3caea;
`;
const TermsCondition = styled.div`
  width: 25%;
  color: #6b9fff;
`;

export default Terms;
