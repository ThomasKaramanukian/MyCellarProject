import React from "react";
import "./Wine.css";
import WineInput from "./WineInput";
import WineList from "./WineList";
import { useState, useEffect } from "react";

const Wine = () => {
  // const [wineInput, setWineInput] = useState("");
  const [wines, setWines] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredWines, setFilteredWines] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [wines, status]);

  const filterHandler = () => {
    switch (status) {
      case "opened":
        setFilteredWines(wines.filter((wine) => wine.opened === true));
        break;
      case "cellared":
        setFilteredWines(wines.filter((wine) => wine.opened === false));
        break;
      default:
        setFilteredWines(wines);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Wines</h1>
      </header>
      <WineInput
        wines={wines}
        setWines={setWines}
        // wineInput={wineInput}
        // setWineInput={setWineInput}
        setStatus={setStatus}
      />
      <WineList
        setWines={setWines}
        wines={wines}
        filteredWines={filteredWines}
      />
    </div>
  );
};

export default Wine;
