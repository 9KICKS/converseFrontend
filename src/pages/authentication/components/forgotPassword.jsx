import React, { useState } from 'react';
import axios from "axios";
import "../styles/forgotPassword.css";
import {useNavigate} from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/reset', { email })
            .then((response) => {
                navigate("/forgot_password_response")
            })
            .catch((error) => {
                if (error.response && error.response.status === 400 && error.response.data.error) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('Password reset failed. Try again.');
                }
            });
    };

    return (
        <div className="forgot-password-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="forgot-password-page">
            <h1 className="forgot-password-title">Password reset</h1>
            <text>Forgotten your password? <br/>Enter your email address below, and we will send you instructions to reset your password.</text> <br/>
                <form className="forgot-password-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
                </div>
                {errorMessage && <text className="error-message">{errorMessage}</text>}
                <button className="forgot-password-button" type="submit">Submit</button>
            </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default ForgotPassword;
