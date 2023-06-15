import React from 'react';
import "../styles/termsAndConditions.css";

function TermsOfService() {
    return (
        <div className="terms-container">
            <h1 className="t-and-c">Terms and Conditions</h1>
            <p>
                Welcome to Converse. By using our chat app, you agree to the following terms and conditions:
            </p>
            <p>
                1. You must be at least 8 years old to use Converse or have parental consent to create an account.
            </p>
            <p>
                2. You are solely responsible for the content you share and must comply with all applicable laws and regulations.
            </p>
            <p>
                3. Any misuse of Converse, including harassment, spamming, or impersonation, is strictly prohibited.
            </p>
            <p>
                4. We reserve the right to suspend or terminate accounts that violate our terms of service or engage in harmful activities.
            </p>
            <p>
                By using Converse, you agree to abide by these terms of service. For more details, please refer to the full terms of service document.
            </p>
            <h1 className="t-and-c">Entire Agreement</h1>
            <p>The Terms of Use, our Terms & Conditions for Sale, our Privacy Policy, and Copyright Policy constitute the sole and entire agreement between you and Group 5,
                regarding Converse and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding Converse.
            </p>
            <button className="t-and-c-button" onClick={() => window.location.href="/"}>Accept</button>
        </div>
    );
};

export default TermsOfService;
