import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8000/auth/login', formData)
      .then((response) => {
        console.log('Login successful!');
        // Сохраните токен в localStorage или использовать его по своему усмотрению
      })
      .catch((error) => {
        console.log(error);
        console.error('Error logging in:', error);
      });
  };
  const backgroundStyle = {
    backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5bdcdf595b409bb8683023e7/1654224488370-WCTHH2NW5QG8MEBHMG9V/HGC_4430.jpg?format=2500w')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(224, 242, 241, 0.8)',
    padding: '40px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <div style={{ ...backgroundStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={formStyle}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Email:</label>
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px', borderRadius: '3px', width: '100%' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Password:</label>
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px', borderRadius: '3px', width: '100%' }} />
          </div>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '3px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Login
          </button>
        </form>
        <div style={{ marginTop: '20px' }}>
          <Link to="/register" style={{ color: '#4CAF50', textDecoration: 'none', fontSize: '16px' }}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
