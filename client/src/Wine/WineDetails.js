import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UserIcon from "./UserIcon";
import LogoutButton from "../Logout";
import WishListButton from "../WishList/WishListButton";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import AddToWishList from "../WishList/Heart";
import WineInfo from "./WineInfo";

const WineDetails = () => {
  const [wineDetails, setWineDetails] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  // console.log(wineDetails);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/wine/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setWineDetails(data.data);
        setHasLoaded(true);
        console.log(wineDetails.text.country);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!hasLoaded) {
    return <div></div>;
  }

  return (
    <>
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <UserIcon />
        <LogoutButton />
        <WishListButton />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <SearchBar /> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Content style={{ textTransform: "capitalize" }}>
            <Name>{wineDetails.text.name}</Name>
            <Country>
              <span>Country:</span>
              {wineDetails.text.country}
            </Country>
            <Region>
              <span>Region:</span>
              {wineDetails.text.region}
            </Region>
            <Year>
              <span>Year:</span>
              {wineDetails.text.year}
            </Year>
            <Type>
              <span>Type:</span>
              {wineDetails.text.type}
            </Type>
            <Varietal>
              <span>Varietal:</span>
              {wineDetails.text.varietal}
            </Varietal>

            <Review>
              <span
                style={{ marginRight: "20px", textDecoration: "underline" }}
              >
                Review:{" "}
              </span>
              {wineDetails.text.review}
            </Review>
          </Content>
        </div>
        <VarietalInfo
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WineInfo varietal={wineDetails.text.varietal} />
        </VarietalInfo>
      </div>
    </>
  );
};

const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61vh;
  margin-top: 50px;
  margin-left: 20px;
  font-size: 16px;
  line-height: 32px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  background: white;
  height: 100%;
  color: black;
  border: 3px solid black;
  outline: 3px solid white;
  /* text-align: center; */
`;

const VarietalInfo = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 10px;
  line-height: 22px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  flex-direction: column;
  height: 100%;
  width: 60vh;
  line-height: 30px;
  color: white;
`;

const Name = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
`;
const Country = styled.span`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 300px;
  text-align: justify;
`;
const Region = styled.span`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 300px;
  text-align: justify;
`;
const Year = styled.span`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 300px;
  text-align: justify;
`;
const Type = styled.span`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 300px;
  text-align: justify;
`;
const Varietal = styled.span`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 300px;
  text-align: justify;
`;

// const Review = styled.span`
//   display: flex;
//   font-size: 20px;
//   justify-content: space-between;
//   width: 300px;
//   text-align: justify;
// `;

export default WineDetails;
