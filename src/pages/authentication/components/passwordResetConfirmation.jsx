import React, { useState } from 'react';
import "../styles/passwordResetConfirmation.css";

function PasswordResetConfirmation() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to verify that newPassword and confirmPassword match and meet password requirements
        // If validation passes, submit the new password to the server to update the user's account
    };

    return (
        <div className="password-reset-confirmation-main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="password-reset-confirmation-page">
            <h1 className="password-reset-confirmation-title">Password reset confirmation</h1>
            <form className="password-reset-confirmation-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Password" value={newPassword} onChange={handleNewPasswordChange} required/>
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                </div>
                <button className="password-reset-confirmation-button" type="submit">Change my password</button>
            </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default PasswordResetConfirmation;
