import React from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";
import styled from "styled-components";

const Homepage = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
};

export default Homepage;
