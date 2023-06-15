import React, { useState } from 'react';
import axios from 'axios';
import "../styles/loginUser.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8000/api/login', { email, password })
            .then((response) => {

            })
            .catch((error) => {
                if (error.response && error.response.status === 400 && error.response.data.error) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setSuccessMessage("Login successful.");
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
                        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} required/>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default Login;
