import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaWineBottle, FaWineGlassAlt } from "react-icons/fa";
import styled from "styled-components";
import ReviewButton from "../Review/ReviewButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Popup from "reactjs-popup";

const Wines = ({ text, wine, wineId }) => {
  console.log(wine.text.opened);

  return (
    <>
      <List>
        <div className="todo">
          <li>
            {text.name}, {text.year}. {text.country}, {text.region}.{" "}
            {text.varietal} - {text.type} Wine
          </li>
          {wine.text.review ? (
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
                <PopInfo>{wine.text.review}</PopInfo>
              </Popup>
            </PopupContainer>
          ) : (
            <ReviewButton wineId={wineId} />
          )}
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            <FaWineBottle />
            {/* if (text.opened === false) {<FaWineBottle />} else{" "}
          {<FaWineGlassAlt />} */}
          </button>
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            <BiTrash
              style={{
                all: "unset",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          </button>
        </div>
      </List>
    </>
  );
};

const List = styled.div`
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  width: 110%;
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
  background-color: #202020;
  color: white;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

export default Wines;
