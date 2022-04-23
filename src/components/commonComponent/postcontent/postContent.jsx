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
        <Card sx={{ maxWidth: 774, margin: "auto" }}>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quo consequuntur vitae nam unde sed dicta maiores non
                    deleniti repudiandae reiciendis officia tenetur odio
                    voluptate, quibusdam perspiciatis suscipit fuga temporibus
                    eius?
                </Typography>
            </CardContent>
        </Card>
    );
}
