import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import "../../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const changeFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="login">
                <form action="">
                    <Typography variant="h4">Login</Typography>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        name="username"
                        onChange={changeFormData}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                        onChange={changeFormData}
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            if (
                                formData.username === "anh" &&
                                formData.password === "123"
                            )
                                navigate("/");
                            else alert("cut");
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
