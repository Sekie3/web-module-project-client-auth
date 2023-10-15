import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <h1>Friends Database</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">FriendsList</Link>
        <Link to="/friends/add">AddFriend</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

export default Header;
