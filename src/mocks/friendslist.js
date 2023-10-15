import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FriendsList() {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:9000/api/friends', {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setFriends(response.data);
    })
    .catch(error => {
      console.error('Error fetching friends', error);
    });
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
