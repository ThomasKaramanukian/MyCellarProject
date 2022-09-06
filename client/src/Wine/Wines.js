import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaWineBottle, FaWineGlassAlt } from "react-icons/fa";
import styled from "styled-components";
import ReviewButton from "../Review/ReviewButton";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import OpenWine from "./OpenWine";
import DeleteWine from "./DeleteWine";

const Wines = ({
  text,
  wine,
  wineId,
  setWines,
  wines,
  usersWine,
  setUsersWine,
}) => {
  console.log(wineId);

  return (
    <>
      <List className="todo">
        <Link
          to={`/wine/${wine.id}`}
          style={{
            all: "unset",
            cursor: "pointer",
          }}
        >
          <div>
            {text.name}, {text.year}. {text.country}, {text.region}.{" "}
            {text.varietal} - {text.type}
          </div>
        </Link>
        <Wrapper2>
          {wine.text.review ? (
            <PopupContainer>
              <Popup
                trigger={
                  <Info>
                    <button
                      style={{
                        all: "unset",
                        cursor: "pointer",
                        fontSize: "20px",
                      }}
                    >
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
              marginLeft: "2px",
            }}
          >
            {wine.text.opened === false ? (
              <OpenWine
                wines={wines}
                setWines={setWines}
                wine={wine}
                wineId={wineId}
                usersWine={usersWine}
                setUsersWine={setUsersWine}
              />
            ) : (
              <FaWineGlassAlt
                style={{ marginLeft: "2px", marginRight: "4px" }}
              />
            )}
          </button>
          <DeleteWine wineId={wineId} />
        </Wrapper2>
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  background: white;

  font-size: 16px;
  width: 110%;
  border: 2px solid black;
  outline: 2px solid white;
`;

const Info = styled.span`
  float: right;
  margin-right: 5px;
  color: black;
`;

const Wrapper2 = styled.div`
  display: flex;
`;

const PopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 300px;
  border-radius: 15px;
  background-color: #799056;
  color: white;
  height: 300px;
  width: 500px;
  padding: 30px;
  line-height: 30px;
  font-size: 18px;
`;

const PopupContainer = styled.span``;

export default Wines;
