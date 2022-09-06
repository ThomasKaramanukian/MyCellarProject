import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WinePairing from "./WinePairing";
import SearchBarHome from "./SearchBarHome/SearchBarHome";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import WishListButton from "./WishList/WishListButton";
import image1 from "./Assets/bg1.2.jpg";
import image2 from "./Assets/BG-part4.jpg";
import image3 from "./Assets/Bg3.2.jpg";
import image4 from "./Assets/bg1.0.jpg";
import Arrow from "./Arrow/Arrow";
import { slide as Menu } from "react-burger-menu";

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
      <Wrapper1
        style={{
          backgroundImage: `url(${image4})`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <Title>my cellar</Title>
        <WishListButton />
        <LogoutButton />
        <SearchBarWrapper>
          <SearchBarHome />
        </SearchBarWrapper>
        <Pairing>
          <WinePairing />
        </Pairing>
        <ArrowDiv>
          <Arrow />
        </ArrowDiv>
      </Wrapper1>
      <BG1
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <StoreWine>
          <Zoom duration={1000} right>
            <Add onClick={WineInput}>
              <h2>store a wine</h2>
            </Add>
          </Zoom>
        </StoreWine>
      </BG1>
      <BG2
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        <MyWines>
          <Zoom duration={1000} left>
            <Mine onClick={MyCellar}>
              <h2>my cellar</h2>
            </Mine>
          </Zoom>
        </MyWines>
      </BG2>
      <BG3
        style={{
          backgroundImage: `url(${image3})`,
        }}
      >
        <Wines>
          <Zoom duration={1000} right>
            <All onClick={AllWines}>
              <h2>all wines</h2>
            </All>
          </Zoom>
        </Wines>
      </BG3>
    </>
  );
};

const Wrapper1 = styled.div`
  min-height: 100vh;
  background-color: black;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const BG1 = styled.div`
  height: 70vh;
  background-color: black;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const BG2 = styled.div`
  height: 70vh;
  background-color: black;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const BG3 = styled.div`
  height: 70vh;
  background-color: black;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const StoreWine = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyWines = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wines = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pairing = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ArrowDiv = styled.div``;

const Title = styled.h1`
  color: white;
  font-size: 80px;
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const Add = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
  background-color: white;
  border: 3px solid black;
  font-size: 32px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    outline: 3px solid white;
  }
`;

const All = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
  background-color: white;
  border: 3px solid black;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    outline: 3px solid white;
  }
`;

const Mine = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
  background-color: white;
  border: 3px solid black;
  border-radius: 50%;
  font-size: 32px;
  height: 250px;
  width: 250px;
  margin-bottom: 180px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    outline: 3px solid white;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default Profile;
