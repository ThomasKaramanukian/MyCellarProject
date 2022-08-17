import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import "./Heart.css";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../ProfileContext";

const AddToWishList = ({ wine }) => {
  const { user } = useAuth0();
  const { currentUser } = useContext(UserContext);
  const [isLiked, setIsLiked] = useState(() => {
    return currentUser.wishlist.some((likedWine) => {
      return likedWine.id === wine.id;
    });
  });

  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/addtowishlist", {
      method: "PATCH",
      body: JSON.stringify({
        id: wine.id,
        ...wine.text,
        email: user.email,
        isLiked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setIsLiked(!isLiked);
      });
  };

  return (
    <FiHeart
      className="heart"
      onClick={submitFunc}
      style={isLiked ? { fill: "red", color: "red" } : { fill: "none" }}
    />
  );
};

export default AddToWishList;
