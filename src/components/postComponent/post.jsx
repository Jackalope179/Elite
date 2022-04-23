import React from 'react';
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";
const post = () => {
  return (
    <div className='container post-container'>
        <PostContent />
    </div>
  )
}

export default post