import React from 'react';
import "../styles/passwordResetComplete.css";

function PasswordResetComplete() {
    return (
        <div className="password-reset-complete-main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="password-reset-complete-page">
                <h1 className="password-reset-complete-title">Password reset complete</h1>
                <text>Your password has been set. You may go ahead and log in now.</text>
                <button className="password-reset-complete-button" type="submit" onClick={() => window.location.href="/login"}>Login</button>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default PasswordResetComplete;
