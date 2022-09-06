import { AiOutlineHeart } from "react-icons/ai";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WishListButton = () => {
  let navigate = useNavigate();
  const Wish = () => {
    navigate(`/wishlist`);
  };

  return (
    <Button onClick={Wish}>
      <AiOutlineHeart />
    </Button>
  );
};

const Button = styled.button`
  color: white;
  position: absolute;
  background: none;
  outline: none;
  border: none;
  top: 50px;
  right: 105px;
  font-size: 30px;
  cursor: pointer;
`;

export default WishListButton;
