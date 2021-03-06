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
import Collapse from "@mui/material/Collapse";
import Comment from "../../commonComponent/Comment";
import { useNavigate } from "react-router-dom";
import Share_dialog from "../Share_dialog";

const Comments = [
  {
    avatar: "H",
    name: "Hoang Nguyen",
    text: "Thật là một hoạt động bổ ích",
  },
  {
    avatar: "A",
    name: "Anh Nguyen",
    text: "Quá tuyệt vời",
  },
];

export default function PostContent({ width, hasButtons, data }) {
  let navigate = useNavigate();
  const [liked, setLiked] = React.useState(data.liked);
  const [isChecked, setIsChecked] = React.useState(false);

  const handleLike = () => {
    setLiked(true);
    data.liked = true;
  };

  const handleUnLike = () => {
    setLiked(false);
    data.liked = false;
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

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
      <ImgCarousel width={width} imgs={data.imgs} />
      <CardContent>
        <Typography variant="body" style={{ fontWeight: 400 }}>
          {data.content}
        </Typography>
      </CardContent>
      {hasButtons ? (
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={liked ? handleUnLike : handleLike}
          >
            {liked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              navigate("/donate");
            }}
          >
            <AttachMoneyIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() => setIsChecked((prev) => !prev)}
          >
            <CommentIcon />
          </IconButton>
        </CardActions>
      ) : null}
      <Collapse in={isChecked}>
        <CardContent>
          {Comments.map((comment) => {
            return <Comment content={comment} />;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
