/ src/components/Sidebar.jsx
import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ drawerWidth }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
    { text: 'Logout', icon: <Logout />, path: '/logout' },
  ];

  return (
    <Box className="bg-gray-800 text-white h-full">
      <Typography variant="h6" className="text-center py-4 font-bold">
        Admin Panel
      </Typography>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path} className="hover:bg-gray-700">
              <ListItemIcon className="text-white">{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;