import React from "react";
import "../styles/privacyPolicy.css";

function PrivacyPolicy() {
    return (
        <div className="privacy container">
            <h1 className="privacy-policy-title">Privacy Policy</h1>
            <p>
                At Converse, we prioritize the privacy and security of our users. This privacy policy
                explains how we collect, use, and protect your personal information when you use our chat app.
            </p>
            <p>
                1. We collect only the necessary information required for account creation and communication purposes.
            </p>
            <p>
                2. Your personal information is securely stored and will not be shared with third parties without your consent.
            </p>
            <p>
                3. We implement appropriate security measures to protect your data from unauthorized access or disclosure.
            </p>
            <p>
                4. We may collect anonymized usage data to improve our services and provide a better user experience.
            </p>
            <p>
                By using Converse, you acknowledge and agree to the terms of this privacy policy. For more details,
                please refer to the full privacy policy document.
            </p>
            <h3 className="privacy-policy-title">Contact Information</h3>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: officialjoshua9@gmail.com.</p>
            <button className="privacy-button" onClick={() => window.location.href="/"}>Continue</button>
        </div>
    );
};

export default PrivacyPolicy;
