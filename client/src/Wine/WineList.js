import React from "react";
import Wines from "./Wines";

const WineList = ({ wines, setWines }) => {
  console.log(wines);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {wines.map((wine) => (
          <Wines
            key={wine.id}
            text={wine.text}
            setWines={setWines}
            wines={wines}
          />
        ))}
      </ul>
    </div>
  );
};

export default WineList;
