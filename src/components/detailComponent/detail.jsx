import React from "react";
import PostContent from "../commonComponent/postcontent/postContent";
import RecipeReviewCard from "../postComponent/post";
import Donate from "./donate";
import Container from "@mui/material/Container";
import Navbar from "../commonComponent/Navbar";

const Detail = () => {
    return (
        <>
            <Navbar />
            <Container
                style={{
                    overflowY: "auto",
                    height: "calc(100vh - 60px)",
                    top: 60,
                    position: "relative",
                    paddingBottom: 50,
                }}
            >
                <RecipeReviewCard
                    data={{
                        id: 1,
                        name: "Hoang inc",
                        time: new Date().toISOString().slice(0, 10),
                        avatar: "H",
                        imgs: [
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtuh3hUXwLX9QI8hDO_tlRqYcdnDQibP2eA&usqp=CAU",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVSCtkXXJwnOB82cctXWw50nG7S7IaBUioFx2mEBtfzbtbCTUZeJGeotJidXP9BJ63VY&usqp=CAU",
                        ],
                        content: "lorem ipsum",
                        liked: false,
                        target: 10000000,
                        donatersCount: 10,
                    }}
                    hasButton={false}
                />
                <Donate />
            </Container>
        </>
    );
};

export default Detail;
