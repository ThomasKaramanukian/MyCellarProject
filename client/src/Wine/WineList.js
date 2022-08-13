import React from "react";
import Wines from "./Wines";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const WineList = ({
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
        <h3 style={{ textDecoration: "underline", paddingBottom: "10px" }}>
          Your Cellar
        </h3>
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

export default WineList;
