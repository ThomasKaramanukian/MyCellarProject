import React from "react";
import Wines from "./Wines";

const WineList = ({ wines, setWines, filteredWines }) => {
  console.log(wines);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredWines.map((wine) => (
          <Wines
            key={wine.id}
            text={wine.text}
            setWines={setWines}
            wine={wine}
            wines={wines}
          />
        ))}
      </ul>
    </div>
  );
};

export default WineList;
