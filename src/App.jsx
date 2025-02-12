// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/theme';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>   

  );
}

export default App;