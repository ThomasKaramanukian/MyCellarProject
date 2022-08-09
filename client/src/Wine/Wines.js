import React from "react";
import { BiTrash } from "react-icons/bi";
import { FaWineBottle } from "react-icons/fa";

const Wines = ({ text, wine, wines, setWines }) => {
  const deleteWineHandler = () => {
    setWines(wines.filter((el) => el.id !== wine.id));
  };
  const openedWineHandler = () => {
    setWines(
      wines.map((item) => {
        if (item.id === wine.id) {
          return {
            ...item,
            opened: !item.opened,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${wine.opened ? "opened" : ""}`}>{text}</li>
      <button onClick={openedWineHandler} className="complete-btn">
        <FaWineBottle />
      </button>
      <button onClick={deleteWineHandler} className="trash-btn">
        <i className="fas fa-trash">
          <BiTrash />
        </i>
      </button>
    </div>
  );
};

export default Wines;
