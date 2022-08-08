import React from "react";
import "./AddWine.css";
import WineInput from "./WineInput";
import WineList from "./WineList";
import { useState } from "react";

const AddWine = () => {
  const [wineInput, setWineInput] = useState("");
  const [wines, setWines] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My Wines</h1>
      </header>
      <WineInput
        wines={wines}
        setWines={setWines}
        wineInput={wineInput}
        setWineInput={setWineInput}
      />
      <WineList setWines={setWines} wines={wines} />
    </div>
  );
};

export default AddWine;
