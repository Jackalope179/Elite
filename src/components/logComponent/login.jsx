import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import "../../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="login">
                <form action="">
                    <Typography variant="h4">Login</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Login
                    </Button>
                    <Button className="register" variant="outlined">
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
};

export default Login;
