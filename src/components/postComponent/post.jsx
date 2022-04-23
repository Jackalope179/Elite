import React from 'react';
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

const post = () => {
  return (
    <div className='container post-container'>
      <PostContent width={600} hasButtons={true}/>
    </div>
  )
}

export default post