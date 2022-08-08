import React from "react";
import "./AddWine.css";
import { AiOutlinePlus } from "react-icons/ai";

const WineInput = ({ setWineInput, wines, setWines, wineInput }) => {
  const wineInputHandler = (e) => {
    console.log(e.target.value);
    setWineInput(e.target.value);
  };
  const submitWineHandler = (e) => {
    e.preventDefault();
    console.log(wineInput);
    setWines([
      ...wines,
      { text: wineInput, opened: false, id: Math.random() * 1000 },
    ]);
    setWineInput("");
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
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Opened</option>
            <option value="all">Cellared</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default WineInput;
