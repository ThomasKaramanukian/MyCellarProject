import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Profile from "./Profile";
import AddWine from "./Wine/AddWine";
import PostTest from "./postTest";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/addwine" element={<AddWine />} />
          <Route exact path="/test" element={<PostTest />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
