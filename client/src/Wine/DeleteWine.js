import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BiTrash } from "react-icons/bi";

const DeleteWine = ({ wineId }) => {
  console.log(wineId);
  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/deletewine", {
      method: "DELETE",
      body: JSON.stringify({
        id: wineId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <button
      style={{
        all: "unset",
        cursor: "pointer",
        fontSize: "20px",
        marginLeft: "5px",
      }}
      onClick={submitFunc}
    >
      <BiTrash />
    </button>
  );
};

export default DeleteWine;
