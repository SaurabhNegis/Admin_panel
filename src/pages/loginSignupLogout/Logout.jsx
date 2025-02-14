// src/pages/Logout.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user authentication data (e.g., remove token or session)
    localStorage.removeItem('authToken'); // Assuming you use localStorage for auth token
    sessionStorage.removeItem('authToken'); // If using sessionStorage

    // Redirect user to the login page after logout
    navigate('/login');
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Logging out...
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have been successfully logged out. Redirecting to login page...
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
        Go to Login
      </Button>
    </div>
  );
};

export default Logout;

