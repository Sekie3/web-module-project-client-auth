import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './mocks/Login';
import FriendsList from './mocks/friendslist'
import AddFriends from './mocks/addfriends';
import Header from './mocks/header';
import Logout from './mocks/logout';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Client Auth Project</h2>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
      </Routes>
    </div>
  );
}

export default App; 
