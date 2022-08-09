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
      <BiLogIn />
    </Button>
  );
};

const Button = styled.button`
  color: white;
  position: absolute;
  background: none;
  outline: none;
  border: none;
  top: 50px;
  right: 66px;
  font-size: 30px;
  cursor: pointer;
`;

export default LoginButton;
