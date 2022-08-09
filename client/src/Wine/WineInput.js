import React from "react";
import "./Wine.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const WineInput = ({ setWineInput, wines, setWines, wineInput, setStatus }) => {
  const [value, setValue] = useState("");
  const wineInputHandler = (e) => {
    setWineInput(e.target.value);
  };
  const submitWineHandler = (e) => {
    e.preventDefault();
    fetch("/api/addwine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: wineInput,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setValue("");
        setWineInput("");
        setWines([
          ...wines,
          { text: wineInput, opened: false, id: Math.random() * 1000 },
        ]);
      });
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <input
          value={wineInput}
          onChange={wineInputHandler}
          type="text"
          placeholder="Wine"
          className="todo-input"
        />
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

export default WineInput;
