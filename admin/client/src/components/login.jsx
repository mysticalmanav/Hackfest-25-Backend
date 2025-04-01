import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_backendUrl}/api/login`, { username, password });
      if (response.status === 200) {
        setIsVerified(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      {!isVerified ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate('/teamlist')}>Go to Team List</button>
          <button onClick={() => navigate('/qr')}>Go to QR Page</button>
        </div>
      )}
    </div>
  );
};

export default Login;
