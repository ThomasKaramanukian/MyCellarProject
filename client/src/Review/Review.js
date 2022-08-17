import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../Assets/jesse-belleque.jpg";
import LogoutButton from "../Logout";
import UserIcon from "../Wine/UserIcon";

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
    <Wrapper style={{ backgroundImage: `url(${image})` }}>
      <LogoutButton />
      <UserIcon />
      <Review>
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
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  height: 100vh;
`;

const Review = styled.div`
  display: grid;
`;

const StyledInput = styled.textarea`
  margin-bottom: 20px;
  display: flex;
  height: 300px;
  width: 500px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  line-height: 30px;
  font-size: 20px;
  color: black;
  font-family: sans-serif;
  resize: none;
  margin-right: 20px;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  margin-top: 375px;
  align-items: center;
  background-color: black;
  justify-content: center;
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
  order: 2;
  &:hover {
    background-color: #799056;
    transition: all 0.4s ease-in-out;
  }
`;

export default AddReview;
