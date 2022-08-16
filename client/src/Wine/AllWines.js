import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import LogoutButton from "../Logout";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiOutlineHeart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Popup from "reactjs-popup";
import WishListButton from "../WishList/WishListButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Wine.css";
import AddToWishList from "../WishList/Heart";

const AllWines = () => {
  const [allWines, setAllWines] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch("/api/allwines")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllWines(data.data);
        setHasLoaded(true);
        console.log(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(allWines);

  if (!hasLoaded) {
    return <div></div>;
  }

  return (
    <>
      <UserIcon />
      <LogoutButton />
      <WishListButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </div>
      <Title>
        <h3 style={{ textDecoration: "underline", paddingBottom: "10px" }}>
          All Wines
        </h3>
      </Title>
      <Container>
        <Wrapper>
          <div>
            {allWines.map((wine, index) => {
              console.log(wine);
              return (
                <Wines>
                  <AddToWishList />
                  <Link
                    className="dataItem"
                    to={`/wine/${wine.id}`}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    {wine.text.name}, {wine.text.year}. {wine.text.country},{" "}
                    {wine.text.region} - {wine.text.type} wine
                  </Link>
                  {/* <Icon to={`/profile`}>
                    <BiUser />
                  </Icon> */}
                  {wine.text.review ? (
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
                        <PopInfo>{wine.text.review}</PopInfo>
                      </Popup>
                    </PopupContainer>
                  ) : (
                    <PopupContainer></PopupContainer>
                  )}
                </Wines>
              );
            })}
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
`;

const Icon = styled(Link)`
  float: right;
  margin-right: 5px;
  color: black;
  &:hover {
    background-color: transparent;
  }
`;

const Info = styled.span`
  float: right;
  margin-right: 5px;
  color: black;
`;

const PopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 300px;
  border-radius: 15px;
  background-color: #202020;
  color: white;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

const WishList = styled.span`
  float: right;
  margin-right: 5px;
  color: black;
  cursor: pointer;
`;

const Wrapper = styled.div`
  font-size: 1.2rem;
  color: black;
  padding-left: 15px;
  width: 80%;
  margin-bottom: 100px;
  border-radius: 5px;
`;

const Wines = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: white;
  border-radius: 5px; ;
`;

export default AllWines;
