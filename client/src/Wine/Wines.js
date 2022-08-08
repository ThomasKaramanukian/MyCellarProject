import React from "react";
import { AiTwotoneDollar } from "react-icons/ai";
import { BiWine } from "react-icons/bi";
import { FaWineBottle } from "react-icons/fa";

const Wines = ({ text, wine, wines, setWines }) => {
  const openWineHandler = () => {
    setWines(wines.filter((el) => el.id !== wine.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <FaWineBottle />
      </button>
      <button onClick={openWineHandler} className="trash-btn">
        <BiWine />
      </button>
    </div>
  );
};

export default Wines;
