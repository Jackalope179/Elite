import React from "react";
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

const post = () => {
  return (
    <div className='container post-container my-4'>
      <PostContent width={600} hasButtons={true}/>
    </div>
  );
};

export default post;
