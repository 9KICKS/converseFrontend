import React from 'react';
import "../styles/chatInterface.css";

function UserList() {
    return (
        <div className="converse-users-container">
            <nav className="converse-users-logo">CONVERSE</nav>
            <div className="search-input">
                <input className="search-users-bar" type="text" placeholder="Search users" />
            </div>
        </div>
    );
}

export default UserList;
