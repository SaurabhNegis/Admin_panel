// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import { ColorModeContext,  useMode } from './theme/theme';
function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>   
    </ColorModeContext.Provider>

  );
}

export default App;