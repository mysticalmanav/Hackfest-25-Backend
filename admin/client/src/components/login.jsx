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
    console.log(`${import.meta.env.VITE_backendUrl}/api/login`);
    const response = await axios.post(`${import.meta.env.VITE_backendUrl}/api/login`, { username, password });
      if (response.status === 200) { 
        localStorage.setItem('username', username);
        localStorage.setItem('password',password)
        setIsVerified(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {!isVerified ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <button
            className="w-full bg-green-500 text-white py-2 mb-4 rounded hover:bg-green-600 transition"
            onClick={() => navigate('/teamlist')}
          >
            Go to Team List
          </button>
          <button
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
            onClick={() => navigate('/qr')}
          >
            Go to QR Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
