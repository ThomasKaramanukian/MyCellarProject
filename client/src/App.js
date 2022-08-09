import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Wine from "./Wine/Wine";
import PostTest from "./postTest";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/wine" element={<Wine />} />
          <Route exact path="/test" element={<PostTest />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
