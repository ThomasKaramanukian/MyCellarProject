import React from "react";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import styled from "styled-components";

const UserIcon = () => {
  let navigate = useNavigate();
  const ProfilePage = () => {
    navigate(`/profile`);
  };

  return (
    <Button>
      <BiUser onClick={ProfilePage} />
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
  right: 146px;
  font-size: 30px;
  cursor: pointer;
`;

export default UserIcon;
