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
  color: white;
  margin-top: 30px;
  height: 50px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #799056;
    transition: all 0.5s ease-in-out;
  }
`;

export default CellarButton;
