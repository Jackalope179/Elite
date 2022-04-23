import React from "react";
import PostContent from "../commonComponent/postcontent/postContent";
import Donate from "./donate";
import Container from "@mui/material/Container";

const Detail = () => {
    return <Container>
        <PostContent width="100%" />
        <Donate />
    </Container>;
};

export default Detail;