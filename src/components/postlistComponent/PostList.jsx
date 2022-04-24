import React from "react";
import RecipeReviewCard from "../postComponent/post";
import PostData from "../../data/PostData";
const PostList = () => {
    return (
        <div className="container" id="scrollbar">
            {PostData.map((data) => {
                return (
                    <RecipeReviewCard
                        data={data}
                        hasButton={true}
                        key={data.id}
                    />
                );
            })}
        </div>
    );
};

export default PostList;
