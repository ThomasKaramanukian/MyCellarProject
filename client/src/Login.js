import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => {
        loginWithRedirect();
      }}
    >
      <Enter>
        <h1>Discover</h1>
      </Enter>
    </Button>
  );
};

const Button = styled.button`
  color: white;
  position: absolute;
  background: none;
  outline: none;
  border: none;
  margin-top: 50px;
  margin-left: 130px;
  font-size: 30px;
  cursor: pointer;
`;

const Enter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 300px;
  background-color: white;
  border: 3px solid black;
  outline: 3px solid white;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 350ms;
  }
`;

export default LoginButton;
