import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import {toast, Toaster} from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    // Check if the user is already logged in
    const teamData = localStorage.getItem('teamData');
    if (teamData) {
      navigate('/dashboard');
    }
  }
  , [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!uniqueId || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_backendUrl}/api/login`, {
        uniqueId,
        password
      });

      if (response.data.success) {
        // Store the entire team data in localStorage
        localStorage.setItem('teamData', JSON.stringify(response.data.team));
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
        <Toaster />
        <div className="max-w-md w-full space-y-8 bg-zinc-800 p-8 rounded-xl shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl pressfont font-extrabold text-orange-100">
              HackFest 2k25
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Sign in to your team dashboard
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-100 h-5 w-5" />
                <input
                  type="text"
                  required
                  value={uniqueId}
                  onChange={(e) => setUniqueId(e.target.value)}
                  className="appearance-none relative block w-full px-12 py-3 border border-zinc-700 bg-zinc-900 placeholder-gray-500 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-transparent"
                  placeholder="Team Unique ID"
                  disabled={loading}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-100 h-5 w-5" />
                <input
                  type={showPassword ? "password" : "text"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-12 py-3 border border-zinc-700 bg-zinc-900 placeholder-gray-500 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-transparent"
                  placeholder="Password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-100 hover:text-orange-200 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;