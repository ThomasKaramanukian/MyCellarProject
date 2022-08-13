import React from "react";
import { useState } from "react";

const WinePairing = () => {
  const [food, setFood] = useState(null);
  const [winePairing, setWinePairing] = useState(null);

  function handleChange(e) {
    setFood(e.target.value);
  }

  function getWinePairing() {
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=173d0fe0ee3c4421bfb55fa04a20adaf&food=${food}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWinePairing(data);
        console.log(data.pairingText);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="What are you eating?"
          onChange={handleChange}
        />
        <button onClick={getWinePairing}>Pairing</button>
      </div>
    </>
  );
};

export default WinePairing;
