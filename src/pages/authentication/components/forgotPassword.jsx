import React, { useState } from 'react';
import "../styles/forgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle the password reset request here
        setMessage('Password reset instructions have been sent to your email.');
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
                {message && <text className="message">{message}</text>}
                <button className="forgot-password-button" type="submit">Submit</button>
            </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default ForgotPassword;
