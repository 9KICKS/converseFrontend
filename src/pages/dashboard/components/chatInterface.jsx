import React from 'react';
import '../styles/chatInterface.css';

function Chat() {
    return (
        <div className="chat-container">
            <div className="chat-section">
                <div className="chat-messages">
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Send a text" />
                    <button className="send-button">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
