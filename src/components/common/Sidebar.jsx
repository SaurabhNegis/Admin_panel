import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box, Typography,useTheme,IconButton } from '@mui/material';
import { Dashboard, Settings, Logout } from '@mui/icons-material';
import { tokens } from "../../theme/theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";



const Sidebars = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box  sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
      <Sidebar collapsed={false} backgroundColor="#1F2937">
      <Box>

        <Typography variant="h6" className="text-center py-4 text-white font-bold">
          Admin Panel
        </Typography>
        <IconButton>
            <MenuOutlinedIcon/>
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
