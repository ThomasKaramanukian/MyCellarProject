import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import LogoutButton from "../Logout";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import WishListButton from "../WishList/WishListButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Wine.css";
import AddToWishList from "../WishList/Heart";
import { UserContext } from "../ProfileContext";

const AllWines = () => {
  const [allWines, setAllWines] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { currentUser } = useContext(UserContext);

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

  if (!hasLoaded || !currentUser) {
    return <div></div>;
  }

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
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
          <h1>All Wines</h1>
        </Title>
      </div>
      <Container>
        <Wrapper>
          <div>
            {allWines.map((wine, index) => {
              return (
                <Wines>
                  <AddToWishList wine={wine} />
                  <Link
                    className="dataItem"
                    to={`/wine/${wine.id}`}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      textTransform: "capitalize",
                      fontSize: "16px",
                    }}
                  >
                    {wine.text.name}, {wine.text.year}. {wine.text.country},{" "}
                    {wine.text.region}. {wine.text.varietal} - {wine.text.type}
                  </Link>
                  {wine.text.review ? (
                    <PopupContainer>
                      <Popup
                        trigger={
                          <Info>
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                            >
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
  background-color: black;
`;

const Title = styled.h1`
  margin-top: 110px;
  display: flex;
  justify-content: center;
  color: white;
  height: 110px;
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
  background-color: white;
  border: 5px solid black;
  outline: 5px solid white;
  color: black;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

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
  border: 1px solid black;
  outline: 2px solid white;
`;

export default AllWines;
