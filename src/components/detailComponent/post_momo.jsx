import React, { useState } from "react";
import $ from 'jquery';
import Navbar from "../commonComponent/Navbar";
import Container from "@mui/material/Container";
import RecipeReviewCard from "../postComponent/post";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useNavigate, useSearchParams } from "react-router-dom";


const PostMomo = () => {
    let navigate = useNavigate();
    let [urlParams, setUrlParams] = useSearchParams();
    let message = urlParams.get("message");
    const backHome = (e) => {
        navigate("/");
    }
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
            <br />
            <Card
            sx={{ maxWidth: "100%", bgcolor: "rgb(245, 245, 245)" }}
            style={{ paddingLeft: "16px", border: "1px solid #eee" }}
            >
                <h3 >{message === "Success" ? "Transaction Successed." : "Transaction failed." }</h3>
                <Button variant="outlined" onClick={backHome} >Back to homepage</Button>
            </Card>
        </Container>
    </>
    );
};

export default PostMomo;