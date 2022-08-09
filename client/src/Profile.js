import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const MyWines = () => {
    navigate(`/wine`);
  };
  // const MyPage = () => {
  //   navigate(`/allwine`);
  // };
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <LogoutButton />
      <div>Hello {user.nickname}</div>
      <button onClick={MyWines}>My Wines</button>
      <button>All Wines</button>
    </>
  );
};

export default Profile;
