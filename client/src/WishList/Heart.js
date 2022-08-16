import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import "./Heart.css";

const AddToWishList = () => {
  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/addtowishlist", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {});
  };

  return <FiHeart className="heart" onClick={submitFunc} />;
};

export default AddToWishList;
