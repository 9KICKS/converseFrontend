import React from 'react';
import "../styles/passwordResetResponse.css";

function PasswordResetSent() {

    return (
        <div className="password-reset-sent-main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="password-reset-sent-page">
            <h1 className="password-reset-sent-title">Password reset sent</h1>
            <text>We have emailed you instructions for setting your password, if an account exists with the email you entered. You should receive them shortly.</text>
            <text>If you don’t receive an email, please make sure you’ve entered the address you registered with, and check your spam folder.</text>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default PasswordResetSent;
