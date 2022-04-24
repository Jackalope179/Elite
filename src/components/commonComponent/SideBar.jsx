import React from "react";
import "../../style/SideBar.css";
import Suggestion from "./Suggestion";

const SideBar = () => {
  const fakeData = [1, 2, 3, 4, 5];
  return (
    <div id="SideBar" className="container" style={{ paddingLeft: 80 }}>
      <Suggestion />
      <div
        className="row"
        style={{
          marginLeft: 0,
          marginTop: 30,
          color: "#959595",
          fontWeight: "bold",
        }}
      >
        Suggestion for you
      </div>
      <div id="sideBar-suggestion">
        {fakeData.map(() => {
          return <Suggestion />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
