// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const AllWines = () => {
//   const [allWines, setAllWines] = useState(null);
//   const [hasLoaded, setHasLoaded] = useState(false);

//   useEffect(() => {
//     fetch("/api/allwines")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setAllWines(data.data);
//         setHasLoaded(true);
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   console.log(allWines);
// };

// export default AllWines;
