import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOut } from "react-icons/bi";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      <BiLogOut />
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

export default LogoutButton;
