import React from "react";
import LoginButton from "./Login";
import Profile from "./Profile";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import image1 from "./Assets/jadon-barnes.jpg";
import image2 from "./Assets/mockaroon.jpg";

const Homepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let navigate = useNavigate();
  console.log(user, isAuthenticated);
  if (isAuthenticated) {
    navigate(`/profile`);
  }

  return (
    <>
      <LoginButton />
      <Wrapper1 style={{ backgroundImage: `url(${image1})` }}>
        <h1 style={{ color: "white" }}>My Cellar</h1>
      </Wrapper1>
      <Wrapper2 style={{ backgroundImage: `url(${image2})` }}></Wrapper2>
    </>
  );
};

const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

export default Homepage;
