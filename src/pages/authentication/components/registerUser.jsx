import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../styles/registerUser.css";

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'country') {
            setCountry(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/register', { email, username, password })
            .then((response) => {
                navigate("/login")
            })
            .catch((error) => {
                if (error.response && error.response.status === 400 && error.response.data.error) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('Registration failed. Try again.');
                }
            });
    };

    return (
        <div className="main-container">
            <nav className="converse-logo">CONVERSE</nav>
            <div className="register-page">
                <h1 className="register-title">Create an account</h1>
                <h3 className="login-prompt">Already have an account? <a className="login" href="/login">Login</a></h3>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <select id="country" name="country" value={country} onChange={handleChange} required>
                            <option value="">Select Country</option>
                            {countries.map((country) => (<option key={country.cca2} value={country.name.common}>{country.name.common}</option>))}
                        </select>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} autoComplete="off" required/>
                    </div>
                    <div className="input-group">
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange} autoComplete="off" required/>
                    </div>
                    {errorMessage && <text className="error-message">{errorMessage}</text>}
                    <button className="register-button" type="submit">Register</button>
                    <br />
                    <h5 className="terms-privacy">By continuing, you agree Converse{" "}
                        <a className="terms" href="/terms">Terms of Service</a> and{" "}
                        <a className="privacy" href="/privacy">Privacy Policy</a>.</h5>
                </form>
            </div>
            <h5 className="copyrights">Copyright © 2023 Converse by Group 5. All rights reserved.</h5>
        </div>
    );
}

export default Register;
