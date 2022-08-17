import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaWineBottle } from "react-icons/fa";
import { FiCornerDownLeft, FiUnderline } from "react-icons/fi";
import Wines from "./Wines";

const OpenWine = ({
  wineId,
  wine,
  setWines,
  wines,
  usersWine,
  setUsersWine,
}) => {
  console.log(wineId);
  const [value, setValue] = useState(false);
  console.log(value);
  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/openwine", {
      method: "PATCH",
      body: JSON.stringify({
        opened: value,
        id: wineId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(usersWine);
        let index = usersWine.findIndex((wine) => {
          return wine.id === wineId;
        });
        console.log(index);
        let copy = [...usersWine];
        copy[index] = {
          ...copy[index],
          text: { ...copy[index].text, opened: true },
        };
        console.log(copy);
        setUsersWine(copy);
        setValue(true);
        console.log(response);
      });
  };
  return (
    <FaWineBottle
      onClick={submitFunc}
      style={{
        all: "unset",
        cursor: "pointer",
        fontSize: "20px",
        marginLeft: "5px",
      }}
    />
  );
};

export default OpenWine;
