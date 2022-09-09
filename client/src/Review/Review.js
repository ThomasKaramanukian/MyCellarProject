import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../Assets/social.jpg";
import LogoutButton from "../Logout";
import UserIcon from "../Wine/UserIcon";
import WishList from "../WishList/WishList";
import WishListButton from "../WishList/WishListButton";
import Navbar from "../Menu/SideBar";

const AddReview = () => {
  const { wineId } = useParams();
  console.log(wineId);

  let navigate = useNavigate();
  const Cellar = () => {
    navigate(`/addwine`);
  };

  const [value, setValue] = useState("");
  console.log(value);
  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/addreview", {
      method: "POST",
      body: JSON.stringify({
        review: value,
        id: wineId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setValue(response);
        console.log(response);
        navigate(`/mycellar`);
      });
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <WishListButton />
        <LogoutButton />
        <UserIcon />
        <Review>
          <Title>Review</Title>
          <form onSubmit={(e) => submitFunc(e)}>
            <StyledInput
              onChange={(e) => setValue(e.target.value)}
              placeholder="Leave a review..."
              maxLength={350}
              value={value}
            />
            <StyledButton type="submit" value="Leave Review">
              Leave Review
            </StyledButton>
          </form>
        </Review>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 110vh;
  margin-top: -150px;
`;

const Review = styled.div`
  display: grid;
`;

const StyledInput = styled.textarea`
  margin-bottom: 20px;
  display: flex;
  height: 300px;
  width: 500px;
  outline: 3px solid white;
  border: 3px solid black;

  padding: 20px;
  line-height: 30px;
  font-size: 20px;
  color: black;
  font-family: sans-serif;
  resize: none;
  margin-right: 20px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  height: 110px;
  font-size: 46px;
  margin-bottom: -15px;
`;

const StyledButton = styled.button`
  position: absolute;
  margin-top: 375px;
  align-items: center;
  background-color: black;
  outline: 1px solid white;
  justify-content: center;
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
  order: 2;
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.1);
  }
`;

export default AddReview;
