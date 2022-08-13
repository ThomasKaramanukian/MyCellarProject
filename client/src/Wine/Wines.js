import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaWineBottle } from "react-icons/fa";
import styled from "styled-components";
import ReviewButton from "../Review/ReviewButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Wines = ({ text, wine, wineId }) => {
  // const [wineReview, setWineReview] = useState(null);
  // let { wineId } = useParams();
  // useEffect(() => {
  //   fetch(`api/addreview/${wineId}`)
  //     .then((res) => {
  //       console.log(wineId);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setWineReview(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  console.log(text);
  return (
    <List>
      <div className="todo">
        <li>
          {text.name}, {text.year}. {text.country}, {text.region} - {text.type}{" "}
          Wine
        </li>
        <ReviewButton wineId={wineId} />
        <button>
          <FaWineBottle />
        </button>
        <button>
          <BiTrash />
        </button>
      </div>
    </List>
  );
};

const List = styled.div`
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  font-size: 16px;
`;

export default Wines;
