import React, { useState } from 'react';
import axios from 'axios';
import "../styles/loginUser.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/converse/login', { email, password })
            .then((response) => {
                navigate("/converse-home")
            })
            .catch((error) => {
                if (error.response && error.response.status === 400 && error.response.data.error) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage("Login failed. Try again.");
                }
            });
    };

    return (
        <div className="main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="login-page">
                <h1 className="login-title">Login</h1>
                <h3 className="register-prompt">New to Converse? <a className="register" href="/">Create an account</a></h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} autoComplete="off" required/>
                    </div>
                    <a className="forgot-password" href="/forgot_password">Forgot your password?</a>
                    {errorMessage && <text className="error-message">{errorMessage}</text>}
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default Login;
