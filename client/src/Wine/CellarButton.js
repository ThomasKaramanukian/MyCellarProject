import React from "react";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import styled from "styled-components";

const CellarButton = () => {
  let navigate = useNavigate();
  const MyWines = () => {
    navigate(`/mycellar`);
  };

  return (
    <Button>
      <BiUser onClick={MyWines} />
    </Button>
  );
};
