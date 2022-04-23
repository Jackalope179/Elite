import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import PostList from "./postlistComponent/PostList";
import Profile from "./profileComponent/profile";
import { Route, Routes } from "react-router-dom";
import "../style/App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/profile" exact element={<Profile />} />
      <Route
        path="/"
        exact
        element={
          <>
            <Navbar id="navbar_" />
            <div className="container" id="body" style={{ overflow: "hidden" }}>
              <PostList />
              <SideBar />
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
