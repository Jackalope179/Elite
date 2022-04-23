import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import RecipeReviewCard from "./postComponent/post";
import Profile from "./profileComponent/Profile";
import { Route, Routes } from "react-router-dom";
import "../style/App.css";
const App = () => {
    return (
        <Routes>
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/newfeeds" exact element={<></>} />
        </Routes>
    );
};

export default App;
