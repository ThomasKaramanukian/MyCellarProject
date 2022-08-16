import React from "react";
import Wines from "./Wines";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import OwnedWines from "./OwnedWines";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const MyWines = ({
  wines,
  setWines,
  filteredWines,
  setUsersWine,
  usersWine,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [allWines, setAllWines] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      <div className="wine-container">
        <Title>
          <h3 style={{ textDecoration: "underline", paddingBottom: "10px" }}>
            My Cellar
          </h3>
        </Title>
        <div>
          <ul style={{ textTransform: "capitalize" }} className="wine-list">
            {filteredWines.map((wine) => (
              <Wines
                text={wine.text}
                setWines={setWines}
                wine={wine}
                wines={wines}
                setUsersWine={setUsersWine}
                usersWine={usersWine}
                wineId={wine.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export default MyWines;
