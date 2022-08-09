import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Profile = () => {
  let navigate = useNavigate();
  const MyWines = () => {
    navigate(`/wine`);
  };
  const AllWines = () => {
    navigate(`/allwines`);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Wrapper>
        <LogoutButton />
        <div>Hello {user.nickname}</div>
        <button onClick={MyWines}>My Wines</button>
        <button onClick={AllWines}>All Wines</button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default Profile;
