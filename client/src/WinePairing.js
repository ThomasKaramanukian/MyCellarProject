import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaWineBottle } from "react-icons/fa";

const WinePairing = () => {
  const [food, setFood] = useState("");
  const [winePairing, setWinePairing] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  function handleChange(e) {
    setFood(e.target.value);
  }

  const getWinePairing = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=173d0fe0ee3c4421bfb55fa04a20adaf&food=${food}`
    );
    const winePairing = await response.json();
    setWinePairing(winePairing.pairingText);
    setHasLoaded(true);

    console.log(winePairing);
  };

  useEffect(() => {
    if (winePairing) {
      getWinePairing();
    }
  }, []);

  console.log(winePairing);
  return (
    <>
      <TextArea>
        <input
          style={{
            border: "none",
            fontSize: "18px",
            marginTop: "10px",
            marginLeft: "10px",
            width: "470px",
          }}
          type="text"
          placeholder="What's on the menu?"
          onChange={handleChange}
        />
        <Button onClick={getWinePairing}>
          <div>Pair it!</div>
        </Button>
        {hasLoaded ? (
          <Pairing>
            <p>{winePairing}</p>
          </Pairing>
        ) : (
          <Pairing></Pairing>
        )}
      </TextArea>
    </>
  );
};

const TextArea = styled.div`
  height: 220px;
  width: 600px;
  border: 3px solid black;
  outline: 3px solid white;

  background-color: white;
  padding: 5px;
`;

const Pairing = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 22px;
  font-size: 14px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  text-align: center;
  &:hover {
    border: 1px solid white;
    outline: 1px solid black;
  }
`;

export default WinePairing;
