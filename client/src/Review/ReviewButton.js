import React from "react";
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReviewButton = ({ wineId }) => {
  // let navigate = useNavigate();
  // const ProfilePage = () => {
  //   navigate(`/profile`);
  // };

  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div></div>;
  }
  console.log(wineId);
  return (
    <Info style={{ fontSize: "20px" }} to={`/review/${wineId}`}>
      <AiOutlinePlusCircle />
    </Info>
  );
};

const Info = styled(Link)`
  float: right;
  margin-right: 5px;
  color: black;
  &:hover {
    background-color: transparent;
  }
`;

export default ReviewButton;
