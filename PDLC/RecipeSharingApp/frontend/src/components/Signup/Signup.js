// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import styles from './Signup.module.css';

function Signup() {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState(''); // Added email state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),  
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Error from server');
      }

      const data = await response.json();

      if (data.status === 'success') {
        navigate('/login');  
      } else {
        setError(data.message || 'Failed to signup');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong. Please try again later.');
    }
};


  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
