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
      <UserIcon />
      <LogoutButton />
      <WishListButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
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

          <Review>{wineDetails.text.review}</Review>
        </Content>
      </div>
      {/* <Wish>
        <p style={{ marginRight: "10px" }}>Add to you wishlist!</p>
        <AddToWishList />
      </Wish> */}
      <VarietalInfo
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <WineInfo varietal={wineDetails.text.varietal} />
      </VarietalInfo>
    </>
  );
};

const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-top: 50px;
  margin-left: 20px;
  /* text-align: center; */
`;

const VarietalInfo = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 22px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  height: 100%;
  width: 60vh;
  line-height: 30px;
`;

const Wish = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 36px;
  margin-bottom: 30px;
  text-decoration: underline;
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
