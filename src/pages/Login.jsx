// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography, CircularProgress } from '@mui/material';

// Mock login function (replace this with actual API logic)
const mockLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve({ token: 'mock-token' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await mockLogin(username, password); // Replace with actual API call
      // Save the authentication token (e.g., in localStorage)
      localStorage.setItem('authToken', response.token);
      
      // Redirect to the dashboard after successful login
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel Login
      </Typography>
      
      <form onSubmit={handleLogin}>
        {/* Username */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        {/* Password */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        {/* Error Message */}
        {error && <Typography color="error" variant="body2" gutterBottom>{error}</Typography>}

        {/* Login Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
