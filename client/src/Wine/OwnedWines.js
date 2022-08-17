import React from "react";
import "./Wine.css";
import UserIcon from "./UserIcon";
import LogoutButton from "../Logout";
import MyWines from "./MyWines";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import WishListButton from "../WishList/WishListButton";
import SearchBar from "../SearchBar/SearchBar";

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
        return usersWine.filter((wine) => wine.text.opened === true);
      case "cellared":
        return usersWine.filter((wine) => wine.text.opened === false);
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
            (wine) => wine.user === user.email
          );
          setHasLoaded(true);
          setAllWines(allWines);
          setUsersWine(usersWine);
          console.log(usersWine);
        })
        .catch((error) => console.log(error));
    }
  }, [user, usersWine]);

  if (!isAuthenticated) {
    return <div></div>;
  }

  const filteredWines = filterHandler();
  console.log(filteredWines);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <SearchBar />
      </div>
      <Title>
        <h2 style={{ textDecoration: "underline" }}>My Cellar</h2>
      </Title>
      <UserIcon />
      <LogoutButton />
      <WishListButton />
      <List>
        <MyWines
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

const List = styled.div`
  margin-top: 40px;
  margin-left: 100px;
`;

const Title = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
`;

export default Wine;
