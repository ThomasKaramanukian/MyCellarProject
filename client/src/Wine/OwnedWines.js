import React from "react";
import "./Wine.css";
import WineInput from "./WineInput";
import WineList from "./WineList";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Wine = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [wines, setWines] = useState([]);
  const [status, setStatus] = useState("all");
  const [usersWine, setUsersWine] = useState([]);
  const [allWines, setAllWines] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const filterHandler = () => {
    switch (status) {
      case "opened":
        return usersWine.filter((wine) => wine.status.opened === true);
      case "cellared":
        return usersWine.filter((wine) => wine.status.opened === false);
      default:
        return usersWine;
    }
  };

  useEffect(() => {
    if (user) {
      fetch("/api/allwines")
        .then((res) => res.json())
        .then((data) => {
          const usersWine = data.data.filter(
            (wine) => wine.status.user === user.email
          );
          setHasLoaded(true);
          setAllWines(allWines);
          setUsersWine(usersWine);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  const filteredWines = filterHandler();
  console.log(filteredWines);

  return (
    <>
      <Wrapper>
        <WineInput wines={wines} setWines={setWines} setStatus={setStatus} />
      </Wrapper>
      <List>
        <WineList
          setWines={setWines}
          wines={wines}
          filteredWines={filteredWines}
          setUsersWine={setUsersWine}
          usersWine={usersWine}
        />
      </List>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  margin-left: 100px;
  height: 30vh;
`;

const List = styled.div`
  margin-top: 180px;
  margin-left: 100px;
`;

export default Wine;
