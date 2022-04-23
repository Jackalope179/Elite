import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import RecipeReviewCard from "./postComponent/post";
import Profile from "./profileComponent/profile";
import "../style/App.css";
const App = () => {
  return (
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
      {/* <Profile /> */}
    </>
  );
};

export default App;
