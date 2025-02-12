import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { Dashboard, Settings, Logout } from '@mui/icons-material';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebars = () => {
  return (
    <Box>
      <Sidebar collapsed={false} backgroundColor="#1F2937">
        <Box>
          <Typography variant="h6" className="text-center py-4 text-white font-bold">
            Admin Panel
          </Typography>
          <IconButton>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        <Menu iconShape="square">
          <MenuItem icon={<Dashboard />} component={<Link to="/" />}> Dashboard </MenuItem>
          <MenuItem icon={<Settings />} component={<Link to="/settings" />}> Settings </MenuItem>
          <MenuItem icon={<Logout />} component={<Link to="/logout" />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
