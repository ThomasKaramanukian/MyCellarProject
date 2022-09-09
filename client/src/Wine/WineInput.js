import React from "react";
import "./Wine.css";
import { useState } from "react";
import styled from "styled-components";
import { useAuth0, User } from "@auth0/auth0-react";
import LogoutButton from "../Logout";
import UserIcon from "./UserIcon";
import CellarButton from "./CellarButton";
import WishListButton from "../WishList/WishListButton";
import Navbar from "../Menu/SideBar";

const { v4: uuidv4 } = require("uuid");
const WineInput = ({ wines, setWines, setStatus }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [wineInput, setWineInput] = useState({
    name: "",
    year: "",
    country: "",
    region: "",
    type: "",
    varietal: "",
    review: "",
    opened: false,
    isLiked: false,
  });
  const submitWineHandler = (e) => {
    e.preventDefault();
    if (
      wineInput.name === "" ||
      wineInput.year === "" ||
      wineInput.country === "" ||
      wineInput.region === "" ||
      wineInput.type === ""
    ) {
      window.alert("Missing information");
    } else {
      const newWine = {
        text: wineInput,
        id: uuidv4(),
        user: user.email,
      };
      fetch("/api/addwine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWine),
      })
        .then((res) => res.json())
        .then((response) => {
          setWineInput({
            name: "",
            year: "",
            country: "",
            region: "",
            type: "",
            review: "",
            varietal: "",
            opened: false,
            isLiked: false,
          });
          setWines([...wines, newWine]);
        });
    }
  };

  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <>
      <Navbar />
      <BigWrapper>
        <UserIcon />
        <WishListButton />
        <LogoutButton />
        <Wrapper>
          <Title>Store a Wine</Title>
          <form>
            <InputContainer>
              <Input
                value={wineInput.name}
                onChange={(e) => {
                  setWineInput({ ...wineInput, name: e.target.value });
                }}
                type="text"
                placeholder="Name of the wine"
                className="wine-input"
              />
              <Input
                value={wineInput.year}
                onChange={(e) => {
                  setWineInput({ ...wineInput, year: e.target.value });
                }}
                type="text"
                maxLength="4"
                minLength="4"
                pattern="\d{4}"
                placeholder="Year"
                className="wine-input"
              />
              <Input
                onChange={(e) => {
                  setWineInput({ ...wineInput, country: e.target.value });
                }}
                value={wineInput.country}
                type="text"
                placeholder="Country"
                className="wine-input"
              />
              <Input
                onChange={(e) => {
                  setWineInput({ ...wineInput, region: e.target.value });
                }}
                value={wineInput.region}
                type="text"
                placeholder="Region"
                className="wine-input"
              />
              <Input
                onChange={(e) => {
                  setWineInput({ ...wineInput, varietal: e.target.value });
                }}
                value={wineInput.varietal}
                type="text"
                placeholder="Varietal"
                className="wine-input"
              />
              <Flexbox>
                <Selector style={{ marginTop: "-10px" }}>
                  <select
                    className="filter-wines"
                    onChange={(e) => {
                      setWineInput({ ...wineInput, type: e.target.value });
                    }}
                  >
                    <option value="type" selected disabled>
                      Type
                    </option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="rose">Rose</option>
                    <option value="orange">Orange</option>
                    <option value="sparkling">Sparkling</option>
                  </select>
                </Selector>
                <button
                  className="add"
                  onClick={submitWineHandler}
                  type="submit"
                >
                  <h2 style={{ fontSize: "26px" }}>add</h2>
                </button>
              </Flexbox>
            </InputContainer>
          </form>
          <CellarButton />
        </Wrapper>
      </BigWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -200px;
`;

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100%;
  overflow: none;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  border: 2px solid black;
  outline: 2px solid white;
`;

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Selector = styled.span`
  border: 2px solid black;
  outline: 2px solid white;
  width: 170px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 15px;
  color: white;
`;

export default WineInput;
