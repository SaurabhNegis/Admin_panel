// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/theme';
import PrintStyles from './PrintStyles';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <PrintStyles/> */}
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>   

  );
}

export default App;