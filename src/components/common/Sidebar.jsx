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

const Sidebars = ({ isCollapsed, setIsCollapsed }) => {  
  // Function to toggle the collapsed state based on the parent's `isCollapsed` value
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);  // Toggle collapsed state by updating the parent state
  };

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      {/* Sidebar component from react-pro-sidebar with a fixed full viewport height */}
      <Sidebar collapsed={isCollapsed} style={{ height: '100vh' }}>
        {/* Header section of the sidebar containing the title and a toggle button */}
        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: '20px' }}>
          {/* Typography component to display the sidebar title, only shown when expanded */}
          {!isCollapsed && (
            <Typography variant="h6">
              Admin Panel
            </Typography>
          )}
          {/* IconButton component wrapping the MenuOutlinedIcon for toggle functionality */}
          <IconButton onClick={handleToggle}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        {/* Menu container to hold the individual menu items */}
        <Menu iconShape="square">
          {/* MenuItem for Dashboard with an icon and a link to the home page */}
          <MenuItem icon={<Dashboard />} component={<Link to={"/"} />}>
            {!isCollapsed && 'Dashboard'}
          </MenuItem>
          {/* MenuItem for Settings with an icon and a link to the settings page */}
          <MenuItem icon={<Settings />} component={<Link to={"/settings"} />}>
            {!isCollapsed && 'Settings'}
          </MenuItem>
          {/* MenuItem for Logout with an icon and a link to the logout page */}
          <MenuItem icon={<Logout />} component={<Link to={"/logout"} />}>
            {!isCollapsed && 'Logout'}
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
