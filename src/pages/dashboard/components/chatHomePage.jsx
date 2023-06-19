import React from 'react';
import Chat from "./chatInterface";
import UserList from "./users";
import "../styles/chatInterface.css";

function ChatApp() {
    return (
        <div className="converse-chat-app-home-container">
            <UserList />
            <Chat />
        </div>
    );
}

export default ChatApp;
