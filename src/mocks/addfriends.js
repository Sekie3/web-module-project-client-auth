import React, { useState } from 'react';
import axios from 'axios';

function AddFriends() {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  const [friendData, setFriendData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setFriendData({
      ...friendData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:9000/api/friends', friendData, {
        headers: {
          Authorization: token
        }
      });
      console.log("Friend added:", response.data);
      setFriendData({ name: '', age: '', email: '' });
    } catch (error) {
      console.error('Error adding friend', error);
    }
  };

  return (
    <div className="add-friend-form">
      <h3>Add a New Friend</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={friendData.name} onChange={handleChange} placeholder="Name" required />
        <input type="number" name="age" value={friendData.age} onChange={handleChange} placeholder="Age" required />
        <input type="email" name="email" value={friendData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriends;
