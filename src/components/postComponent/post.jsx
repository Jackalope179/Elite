import React from "react";
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

export default function RecipeReviewCard({ data, hasButton }) {
    return (
        <div className="container post-container my-4">
            <PostContent width={"100%"} hasButtons={hasButton} data={data} />
        </div>
    );
}
