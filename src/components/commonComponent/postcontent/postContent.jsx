import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, grey } from '@mui/material/colors';
import ImgCarousel from './imgCarousel';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';


export default function PostContent({ width, hasButtons }) {
  return (
    <Card sx={{ maxWidth: { width }, bgcolor: grey[100] }} style={{ border: "1px solid #eee" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <ImgCarousel width={width} />
      <CardContent>
        <Typography variant="body" style={{ fontWeight: 400 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequuntur vitae nam unde sed dicta maiores non deleniti repudiandae reiciendis officia tenetur odio voluptate, quibusdam perspiciatis suscipit fuga temporibus eius?
        </Typography>
      </CardContent>
      {hasButtons ? <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
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
      </CardActions> : null}
    </Card>
  );
}
