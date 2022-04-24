import React from "react";
import "../../style/SideBar.css";
import Suggestion from "./Suggestion";

const SideBar = () => {
  const fakeData = [
    {
      account: "anh.nguyen",
      name: "Anh Nguyễn",
      color: "#ff004c",
    },
    {
      account: "hoang.nguyen",
      name: "Hoàng Nguyễn",
      color: "#00daff",
    },
    {
      account: "wj.bu.nguyen",
      name: "Hiển Nguyễn",
      color: "#a9e348",
    },
    {
      account: "tho.nguyen",
      name: "Nguyễn Thị Thọ",
      color: "#fa9a85",
    },
    {
      account: "hien.bui",
      color: "#ffb90f",
      name: "Bùi Lương Vinh Hiển",
    },
  ];
  return (
    <div id="SideBar" className="container" style={{ paddingLeft: 80 }}>
      <Suggestion account="anh.nguyen" name="Anh Nguyễn" color="orange" />
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
        {fakeData.map((data) => {
          return (
            <Suggestion
              account={data.account}
              name={data.name}
              color={data.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
