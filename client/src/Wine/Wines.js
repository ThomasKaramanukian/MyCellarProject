import React from "react";
import { BiTrash } from "react-icons/bi";
import { FaWineBottle } from "react-icons/fa";

const Wines = ({ text, wine, wines, setWines }) => {
  const deleteWineHandler = () => {
    setWines(wines.filter((el) => el.id !== wine.id));
    fetch("/api/deletewine", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {});
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
      <li className={`todo-item ${wine.opened ? "opened" : ""}`}>
        {text.name}
      </li>
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
