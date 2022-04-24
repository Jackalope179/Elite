import React from 'react';
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export default function Message({content}) {
  return (
    <div className='message-container my-2'>
      <Avatar sx={{ bgcolor: red[500], position: "relative", top: 10, left: 10 }} aria-label="recipe">
        {content.avatar}
      </Avatar>
      <Typography variant="body" sx={{position: "relative", top: -23, left: -8}}><b>{content.name}</b> {content.text}</Typography>
    </div>
  )
}
