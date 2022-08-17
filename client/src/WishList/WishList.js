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

const WishList = () => {
  const { currentUser } = useContext(UserContext);
  const [wishlistWines, setWishlistWines] = useState(null);

  if (!currentUser) {
    return <div></div>;
  }

  return (
    <>
      <UserIcon />
      <LogoutButton />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar />
      </div>
      <Title>
        <h2 style={{ textDecoration: "underline" }}>Your Favourites</h2>
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
    </>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  height: 40px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 80%;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  &:hover {
    background-color: transparent;
  }
`;

const Title = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
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
  background-color: #799056;
  color: white;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

export default WishList;
