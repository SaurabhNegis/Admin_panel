// src/pages/Settings.jsx

import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Box, Typography } from '@mui/material';

const Settings = () => {
  const [siteName, setSiteName] = useState('My Admin Panel');
  const [siteDescription, setSiteDescription] = useState('Manage all your data and configurations');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const handleSave = () => {
    // Handle save settings logic here
    console.log('Settings saved');
    // You could also make API calls to save the settings
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Site Name */}
        <TextField
          label="Site Name"
          variant="outlined"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />
        
        {/* Site Description */}
        <TextField
          label="Site Description"
          variant="outlined"
          multiline
          rows={4}
          value={siteDescription}
          onChange={(e) => setSiteDescription(e.target.value)}
        />
        
        {/* Dark Mode */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
              color="primary"
            />
          }
          label="Enable Dark Mode"
        />
        
        {/* Notifications */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isNotificationsEnabled}
              onChange={(e) => setIsNotificationsEnabled(e.target.checked)}
              color="primary"
            />
          }
          label="Enable Notifications"
        />
        
        {/* Save Button */}
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Settings
        </Button>
      </Box>
    </div>
  );
};

export default Settings;

