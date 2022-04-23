import { Avatar } from "@mui/material";
import React from "react";
import "../../style/SideBar.css";
import Suggestion from "./Suggestion";

const SideBar = () => {
    return (
        <div id="SideBar" className="container" style={{ paddingLeft: 80 }}>
            <div className="row">
                <div className="col-3">
                    <Avatar sx={{ bgcolor: "orange", marginTop: "6px" }}>
                        N
                    </Avatar>
                </div>
                <div className="col-9">
                    <div className="row" style={{ color: "#999999" }}>
                        anh.nguyen
                    </div>
                    <div className="row">Nguyễn Việt Anh</div>
                </div>
            </div>
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
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </div>
    );
};

export default SideBar;
