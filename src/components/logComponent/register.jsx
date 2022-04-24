import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import "../../style/login.css";
import "../../style/register.css";
import { useNavigate } from "react-router-dom";
import img from "./2358938.jpg";

const Register = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="login register">
                <img src={img} alt="" />
                <form action="">
                    <Typography variant="h4">Register</Typography>
                    <div className="register-name">
                        <TextField
                            required
                            id="outlined-basic"
                            label="Firstname"
                            variant="outlined"
                            name="username"
                        />
                        <TextField
                            required
                            id="outlined-basic"
                            label="Surname"
                            variant="outlined"
                            name="username"
                        />
                    </div>

                    <TextField
                        required
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        name="username"
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="New password"
                        type="password"
                        variant="outlined"
                        name="password"
                    />

                    <Typography variant="h5">Have an account?</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                    <Button className="registerbtn" variant="outlined">
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
};

export default Register;
