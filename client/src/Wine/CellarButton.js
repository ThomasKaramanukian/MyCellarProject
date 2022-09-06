import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CellarButton = () => {
  let navigate = useNavigate();
  const MyCellar = () => {
    navigate(`/mycellar`);
  };

  return (
    <Button>
      <button style={{ all: "unset" }} onClick={MyCellar}>
        view your cellar
      </button>
    </Button>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  outline: 2px solid white;
  color: white;
  margin-top: 20px;
  height: 50px;
  text-align: center;
  font-family: "Abril Fatface", cursive;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;

export default CellarButton;
