import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ImgCarousel from "./imgCarousel";

export default function PostContent() {
  return (
    <Card
      sx={{ maxWidth: 705 }}
      style={{
        borderRadius: 0,
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <ImgCarousel />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          consequuntur vitae nam unde sed dicta maiores non deleniti repudiandae
          reiciendis officia tenetur odio voluptate, quibusdam perspiciatis
          suscipit fuga temporibus eius?
        </Typography>
      </CardContent>
    </Card>
  );
}
