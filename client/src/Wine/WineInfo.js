import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaWineBottle } from "react-icons/fa";

const WineInfo = () => {
  const [varietal, setVarietal] = useState("");
  const [varietalDetails, setVarietalDetails] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  function handleChange(e) {
    setVarietal(e.target.value);
  }

  const getVarietalInfo = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/food/wine/description?apiKey=173d0fe0ee3c4421bfb55fa04a20adaf&wine=${varietal}`
    );
    const varietalInfo = await response.json();
    setVarietalDetails(varietalInfo);
    setHasLoaded(true);

    console.log(varietalDetails);
  };

  useEffect(() => {
    if (varietalDetails) {
      getVarietalInfo();
    }
  }, []);

  console.log(varietalDetails);
  return (
    <>
      <TextArea>
        <input
          style={{
            border: "none",
            fontSize: "18px",
            marginTop: "10px",
            marginLeft: "10px",
            width: "390px",
          }}
          type="text"
          placeholder="Type in a varietal..."
          onChange={handleChange}
        />
        <Button onClick={getVarietalInfo}>
          <div>Discover</div>
        </Button>
        {hasLoaded ? (
          <Pairing>
            <p>{varietalDetails.wineDescription}</p>
          </Pairing>
        ) : (
          <Pairing></Pairing>
        )}
      </TextArea>
    </>
  );
};

const TextArea = styled.div`
  height: 150px;
  width: 61vh;
  border: 3px solid black;
  outline: 3px solid white;
  background-color: white;
`;

const Pairing = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 22px;
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
  margin-top: 5px;
  margin-right: 2px;
  &:hover {
    border: 1px solid white;
    outline: 1px solid black;
  }
`;

export default WineInfo;
