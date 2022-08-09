import React from "react";
import "./Wine.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";
import { useAuth0, User } from "@auth0/auth0-react";
import LogoutButton from "../Logout";
import UserIcon from "./UserIcon";

const { v4: uuidv4 } = require("uuid");
const WineInput = ({ wines, setWines, setStatus }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [wineInput, setWineInput] = useState({
    name: "",
    year: "",
    country: "",
    region: "",
    type: "",
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
        opened: false,
        id: uuidv4(),
        user: user.email,
      };
      fetch("/api/addwine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newWine,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          setWineInput({
            name: "",
            year: "",
            country: "",
            region: "",
            type: "",
          });
          setWines([...wines, newWine]);
        });
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <UserIcon />
      <LogoutButton />
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
            className="year-input"
          />
          <Input
            onChange={(e) => {
              setWineInput({ ...wineInput, country: e.target.value });
            }}
            value={wineInput.country}
            type="text"
            placeholder="Country"
            className="country-input"
          />
          <Input
            onChange={(e) => {
              setWineInput({ ...wineInput, region: e.target.value });
            }}
            value={wineInput.region}
            type="text"
            placeholder="Region"
            className="region-input"
          />
          <Selector>
            <select
              className="filter-todo"
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
        </InputContainer>
        <button
          onClick={submitWineHandler}
          className="todo-button"
          type="submit"
        >
          <AiOutlinePlus />
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="opened">Opened</option>
            <option value="cellared">Cellared</option>
          </select>
        </div>
      </form>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 10px;
`;

const Selector = styled.span`
  margin-top: 10px;
`;

export default WineInput;
