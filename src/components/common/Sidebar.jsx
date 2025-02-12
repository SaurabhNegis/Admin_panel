import React from 'react';
// Import Sidebar components from react-pro-sidebar
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// Import Link component for navigation from react-router-dom
import { Link } from 'react-router-dom';
// Import Material-UI components for layout and typography
import { Box, Typography, IconButton } from '@mui/material';
// Import Material-UI icons for menu items
import { Dashboard, Settings, Logout } from '@mui/icons-material';
// Import a specific icon for the sidebar toggle button
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebars = () => {
  return (
    // Use a Box component as the outer container with hidden overflow and full width
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      {/* Sidebar component from react-pro-sidebar with a fixed full viewport height */}
      <Sidebar collapsed={false} style={{ height: '100vh' }}>
        {/* Header section of the sidebar containing the title and a toggle button */}
        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: '20px' }}>
          {/* Typography component to display the sidebar title */}
          <Typography variant="h6" >
            Admin Panel
          </Typography>
          {/* IconButton component wrapping the MenuOutlinedIcon for  toggle functionality */}
          <IconButton>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        {/* Menu container to hold the individual menu items */}
        <Menu iconShape="square">
          {/* MenuItem for Dashboard with an icon and a link to the home page */}
          <MenuItem icon={<Dashboard />} component={<Link to={"/"}/>}>
            Dashboard
          </MenuItem>
          {/* MenuItem for Settings with an icon and a link to the settings page */}
          <MenuItem icon={<Settings />} component={<Link to={"/settings"} />}>
            Settings
          </MenuItem>
          {/* MenuItem for Logout with an icon and a link to the logout page */}
          <MenuItem icon={<Logout />} component={<Link to={"/logout"} />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
