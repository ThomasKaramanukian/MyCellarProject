import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AllProfiles = () => {
  const [allProfiles, setAllProfiles] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/allprofiles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllProfiles(data.data);
        setHasLoaded(true);
        console.log(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(allProfiles);

  if (!hasLoaded) {
    return <div>Loading...</div>;
  }

  return <div>Okay</div>;
};

export default AllProfiles;
