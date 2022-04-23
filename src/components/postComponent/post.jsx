import React from "react";
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

const RecipeReviewCard = (data) => {
  return (
    <div className="container post-container my-4">
      <PostContent width={600} hasButtons={true} data={data}/>
    </div>
  );
};

export default RecipeReviewCard;
