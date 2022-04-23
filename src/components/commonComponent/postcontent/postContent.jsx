import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ImgCarousel from './imgCarousel';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';

export default function PostContent({width, hasButtons}) {
  return (
    <Card sx={{ maxWidth: {width} }}>
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
        <Typography variant="body" style={{fontWeight: 400}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequuntur vitae nam unde sed dicta maiores non deleniti repudiandae reiciendis officia tenetur odio voluptate, quibusdam perspiciatis suscipit fuga temporibus eius?
        </Typography>
      </CardContent>
      {hasButtons ? <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <AttachMoneyIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions> : null}
      </Card>
  );
}
