import React, { useState } from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import "../styles/passwordResetConfirmation.css";

function PasswordResetConfirmation() {
    const { userId, token } = useParams();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/change/password' , {
            password: newPassword,
            userId: userId,
            token: token
        })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.message);
                } else {
                    console.error('Error:', response.data.message);
                }
            })
            .then((response) => {
                navigate("/change/password/complete")
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="password-reset-confirmation-main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="password-reset-confirmation-page">
            <h1 className="password-reset-confirmation-title">Password reset confirmation</h1>
            <form className="password-reset-confirmation-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Password" value={newPassword} onChange={handleNewPasswordChange} autoComplete="off" required/>
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} autoComplete="off" required/>
                </div>
                <button className="password-reset-confirmation-button" type="submit">Change my password</button>
            </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default PasswordResetConfirmation;
