import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Profile from "./Profile";
import AllWines from "./Wine/AllWines";
import Review from "./Review/Review";
import OtherProfile from "./OtherProfile";
import AllProfiles from "./AllProfiles";
import WinePairing from "./WinePairing";
import WineInput from "./Wine/WineInput";
import OwnedWines from "./Wine/OwnedWines";
import SearchBar from "./SearchBar/SearchBar";
import WishList from "./WishList/WishList";
import WineDetails from "./Wine/WineDetails";
import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/addwine" element={<WineInput />} />
          <Route exact path="/mycellar" element={<OwnedWines />} />
          <Route exact path="/allwines" element={<AllWines />} />
          <Route exact path="/review/:wineId" element={<Review />} />
          <Route exact path="/userprofile/:_id" element={<OtherProfile />} />
          <Route exact path="/allprofiles" element={<AllProfiles />} />
          <Route exact path="/winepairing" element={<WinePairing />} />
          <Route exact path="/wishlist" element={<WishList />} />
          <Route exact path="/wine/:id" element={<WineDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
