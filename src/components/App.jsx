import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import RecipeReviewCard from "./postComponent/post";
import Profile from "./profileComponent/profile";
import { Route, Routes } from "react-router-dom";
import "../style/App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/profile" exact element={<Profile />} />
      <Route
        path="/newfeeds"
        exact
        element={
          <>
            <Navbar id="navbar_" />
            <div className="container" id="body" style={{ overflow: "hidden" }}>
              <div className="container" id="scrollbar">
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
              </div>
              <SideBar />
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
