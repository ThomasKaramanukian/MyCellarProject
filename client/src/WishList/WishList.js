import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../ProfileContext";
import UserIcon from "../Wine/UserIcon";
import LogoutButton from "../Logout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Popup from "reactjs-popup";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../app.css";
import Navbar from "../Menu/SideBar";
import WishListButton from "./WishListButton";

const WishList = () => {
  const { currentUser } = useContext(UserContext);
  const [wishlistWines, setWishlistWines] = useState(null);

  if (!currentUser) {
    return <div></div>;
  }

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", backgroundColor: "black" }}>
        <UserIcon />
        <WishListButton />
        <LogoutButton />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </div>
        <Title>
          <h1>Your Favourites</h1>
        </Title>
        {currentUser ? (
          <Wrapper>
            {currentUser.wishlist.map((wine, index) => {
              console.log(wine.name);
              return (
                <Content style={{ textTransform: "capitalize" }}>
                  <Link
                    to={`/wine/${wine.id}`}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                    }}
                  >
                    {wine.name}, {wine.year}. {wine.country}, {wine.region}.{" "}
                    {wine.varietal} - {wine.type}
                  </Link>
                  {wine.review ? (
                    <PopupContainer>
                      <Popup
                        trigger={
                          <Info>
                            <button style={{ all: "unset", cursor: "pointer" }}>
                              <AiOutlineInfoCircle />
                            </button>
                          </Info>
                        }
                        position="center"
                      >
                        <PopInfo>{wine.review}</PopInfo>
                      </Popup>
                    </PopupContainer>
                  ) : (
                    <PopupContainer></PopupContainer>
                  )}
                </Content>
              );
            })}
          </Wrapper>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

const Content = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  outline: 2px solid white;
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 80%;
  padding-left: 5px;
  padding-right: 5px;
  color: black;

  padding: 10px;
`;

const Title = styled.h1`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 28px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
`;

const Info = styled.span`
  float: right;
  margin-right: 5px;
  color: black;
  font-size: 20px;
`;

const PopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 300px;
  border-radius: 15px;
  background-color: white;
  border: 5px solid black;
  outline: 5px solid white;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

export default WishList;
