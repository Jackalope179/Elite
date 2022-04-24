import { Avatar, Radio } from "@mui/material";
import React from "react";
import "../../style/share.css";

const Share = (props) => {
  const RadioClickHandler = () => {
    props.setTag([
      ...props.tag,
      {
        id: props.tag.length,
        value: 1,
      },
    ]);
  };
  return (
    <div className="suggestion container my-3" style={{ padding: 0 }}>
      <div className="share-container">
        <div id="share-avatar">
          <Avatar
            sx={{ bgcolor: "orange" }}
            style={{ marginTop: 6, marginRight: 5, cursor: "pointer" }}
            className="suggestion-avatar"
          >
            N
          </Avatar>
        </div>
        <div id="share-name">
          <div className="row" style={{ marginLeft: 3, color: "#999999" }}>
            anh.nguyen
          </div>
          <div className="row" style={{ marginLeft: 3 }}>
            Nguyễn Việt Anh
          </div>
        </div>
        <div id="share-radio">
          <Radio
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            onClick={RadioClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
