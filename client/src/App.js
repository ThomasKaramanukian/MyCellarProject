import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Profile from "./Profile";
import OwnedWines from "./Wine/OwnedWines";
import AllWines from "./Wine/AllWines";
import Review from "./Review/Review";
import OtherProfile from "./OtherProfile";
import AllProfiles from "./AllProfiles";
import WinePairing from "./WinePairing";
import MyWines from "./Wine/MyWines";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/wine" element={<OwnedWines />} />
          <Route exact path="/allwines" element={<AllWines />} />
          <Route exact path="/review/:wineId" element={<Review />} />
          <Route exact path="/userprofile/:_id" element={<OtherProfile />} />
          <Route exact path="/allprofiles" element={<AllProfiles />} />
          <Route exact path="/winepairing" element={<WinePairing />} />
          <Route exact path="/mywines" element={<MyWines />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
