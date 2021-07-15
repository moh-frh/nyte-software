import React from "react";
import DashLogo from "../../assets/images/dash-logo-title.png";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Container>
      <img src={DashLogo} alt="example"/>
      <p>Dashboard</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;



  p {
    margin: 5px;
    color: #6b9fff;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
export default Dashboard;
