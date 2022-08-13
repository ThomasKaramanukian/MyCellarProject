import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import LogoutButton from "../Logout";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiOutlineHeart } from "react-icons/ai";
import Popup from "reactjs-popup";

const AllWines = () => {
  const [allWines, setAllWines] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [open, setOpen] = useState(false);

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserIcon />
      <LogoutButton />
      <Container>
        <Wrapper>
          <div>
            {allWines.map((wine, index) => {
              console.log(wine);
              return (
                <Wines>
                  <ul style={{ textTransform: "capitalize" }}>
                    {wine.text.name}, {wine.text.year}. {wine.text.country},{" "}
                    {wine.text.region} - {wine.text.type} wine{" "}
                    <WishList>
                      <AiOutlineHeart />
                    </WishList>
                    <Icon to={`/profile`}>
                      <BiUser />
                    </Icon>
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
                        <PopInfo>
                          {wine.text.review}
                          <button>X</button>
                        </PopInfo>
                      </Popup>
                    </PopupContainer>
                  </ul>
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
  margin-top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Link)`
  float: right;
  margin-right: 5px;
  color: black;
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
  background-color: darkgreen;
  color: white;
  height: 300px;
  width: 500px;
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
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Wines = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: white;
  border-radius: 5px; ;
`;

export default AllWines;
