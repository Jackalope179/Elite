import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import RecipeReviewCard from "./postComponent/post";
import "../style/App.css";
const App = () => {
  return (
    <div>
      <Navbar id="navbar_" />
      <div className="container" id="body">
        <SideBar />
        <div className="container" style={{ marginRight: 5 }}>
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </div>
      </div>
    </div>
  );
};

export default App;
