import React from "react";
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

const RecipeReviewCard = () => {
  return (
    <div className="container post-container my-4">
      <PostContent width={600} hasButtons={true} />
    </div>
  );
};

export default RecipeReviewCard;
