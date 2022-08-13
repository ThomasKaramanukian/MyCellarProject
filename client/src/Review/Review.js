import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddReview = () => {
  const { wineId } = useParams();
  console.log(wineId);

  let navigate = useNavigate();
  const Cellar = () => {
    navigate(`/wine`);
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
      });
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => submitFunc(e)}>
        <StyledInput
          onChange={(e) => setValue(e.target.value)}
          placeholder="Leave a review..."
          maxLength={280}
          value={value}
        />
        <StyledButton onClick={Cellar} type="submit" value="Leave Review">
          Leave Review
        </StyledButton>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background: tan;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.textarea`
  margin-top: 20px;
  height: 300px;
  width: 500px;
  border: 5px solid darkred;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  color: black;
  font-family: sans-serif;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background-color: darkred;
  height: 50px;
  width: 200px;
  border-radius: 30px;
  color: white;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  border: 1px solid white;
  margin-left: 15px;
  display: flex;
  float: right;
  margin-right: 20px;
  justify-content: center;
`;

export default AddReview;
