import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WinePairing from "./WinePairing";
import SearchBar from "./SearchBar/SearchBar";
import { FaWineBottle } from "react-icons/fa";
import WishListButton from "./WishList/WishListButton";
import WishList from "./WishList/WishList";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";
import image3 from "./Assets/image3.jpg";
import image4 from "./Assets/social.jpg";

const Profile = () => {
  let navigate = useNavigate();
  const WineInput = () => {
    navigate(`/addwine`);
  };
  const AllWines = () => {
    navigate(`/allwines`);
  };
  const MyCellar = () => {
    navigate(`/mycellar`);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Wrapper style={{ backgroundImage: `url(${image4})` }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </div>
        <WishListButton />
        <LogoutButton />
        <Content>
          <img
            style={{
              height: "50px",
              borderRadius: "30px",
              border: "2px solid black",
            }}
            src={user.picture}
          />
          <div
            style={{
              marginTop: "5px",
              marginRight: "20px",
              marginLeft: "10px",
              fontSize: "32px",
            }}
          >
            {user.nickname}
          </div>
        </Content>
        <Buttons>
          <Add
            style={{ backgroundImage: `url(${image1})` }}
            onClick={WineInput}
          >
            <div style={{ paddingBottom: "150px" }}>Store a Wine</div>
          </Add>
          <Mine
            style={{ backgroundImage: `url(${image2})` }}
            onClick={MyCellar}
          >
            <div style={{ paddingBottom: "150px" }}>My Cellar</div>
          </Mine>
          <All style={{ backgroundImage: `url(${image3})` }} onClick={AllWines}>
            <div style={{ paddingBottom: "150px" }}>All Wines</div>
          </All>
        </Buttons>
        <Pairing>
          <WinePairing />
        </Pairing>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: white;
`;

const Pairing = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
  /* background-color: #202020; */
  color: white;
  border: none;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 20px;
  height: 300px;
  width: 200px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 0px 1px white inset;
    background-color: darkred;
    transition: all 0.5s ease-in-out;
  }
`;

const All = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
  /* background-color: #202020; */
  color: white;
  border: none;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 20px;
  height: 300px;
  width: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 0px 1px white inset;
    background-color: darkred;
    transition: all 0.5s ease-in-out;
  }
`;

const Mine = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
  /* background-color: #202020; */
  box-shadow: 0px 0px 0px 1px white inset;
  color: white;
  border: none;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 20px;
  height: 300px;
  width: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Profile;
