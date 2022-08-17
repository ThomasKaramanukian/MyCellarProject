import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SearchBar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [allWines, setAllWines] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchEntered, setSearchEntered] = useState("");

  useEffect(() => {
    fetch("/api/allwines")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllWines(data.data);
        setHasLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setSearchEntered(searchWord);
    console.log(searchWord);
    const newFilter = allWines.filter((value) => {
      const name = value.text.name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      const region = value.text.region
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      const country = value.text.country
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      const type = value.text.type
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      const varietal = value.text.varietal
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      return name || region || type || country || varietal;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  if (!hasLoaded) {
    return <div></div>;
  }

  const clearInput = () => {
    setFilteredData([]);
    setSearchEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search..."
          value={searchEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((wine, index) => {
            return (
              <Link className="dataItem" to={`/wine/${wine.id}`}>
                <p style={{ textTransform: "capitalize" }}>
                  {wine.text.name}, {wine.text.year}. {wine.text.country},{" "}
                  {wine.text.region}. {wine.text.varietal} - {wine.text.type}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
