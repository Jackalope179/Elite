import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, grey } from "@mui/material/colors";
import ImgCarousel from "./imgCarousel";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";

export default function PostContent({ width, hasButtons, data }) {
  const [liked, setLiked] = React.useState(data.liked);

  const handleLike = () => {
    setLiked(true);
  }

  const handleUnLike = () => {
    setLiked(false);
  }
  return (
    <Card
      sx={{ maxWidth: { width }, bgcolor: grey[100] }}
      style={{ border: "1px solid #eee" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.avatar}
          </Avatar>
        }
        title={data.name}
        subheader={data.time}
      />
      <ImgCarousel width={width} imgs={data.imgs}/>
      <CardContent>
        <Typography variant="body" style={{ fontWeight: 400 }}>
          {data.content}
        </Typography>
      </CardContent>
      {hasButtons ? (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={liked ? handleUnLike : handleLike}>
            {liked ? <FavoriteIcon style={{color: "red"}}/> : <FavoriteBorderIcon /> }
          </IconButton>
          <IconButton aria-label="add to favorites">
            <AttachMoneyIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
            <CommentIcon />
          </IconButton>
        </CardActions>
      ) : null}
    </Card>
  );
}
