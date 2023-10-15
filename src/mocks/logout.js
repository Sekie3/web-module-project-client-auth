import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    console.log("Logout component rendered");
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('token');

    // Print the entire localStorage to the console
    console.log("LocalStorage before logout:", localStorage);

    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      
      localStorage.removeItem('token');
      navigate('/login');
    }).catch(error => {
      console.error('Error during logout', error);
     
      localStorage.removeItem('token');
       // Print the entire localStorage to the console
        console.log("LocalStorage after logout:", localStorage)
      navigate('/login');
    });
  }, [navigate]);

  return <p>Logging out...</p>;
}

export default Logout;
