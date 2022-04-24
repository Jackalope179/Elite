import React from "react";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export default function Comment({ content }) {
  return (
    <div className="message-container my-2 container">
      <div className="row">
        <div className="col-1">
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {content.avatar}
          </Avatar>
        </div>
        <div className="col-11" style={{ textAlign: "left" }}>
          <Typography variant="body">
            <b>{content.name}</b>{" "}
          </Typography>
          <br />
          <Typography variant="body">{content.text}</Typography>
        </div>
      </div>
    </div>
  );
}
