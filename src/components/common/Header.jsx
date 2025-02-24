import { useState } from "react";
import { Link } from "react-router-dom";

import { 
  AppBar, Toolbar, IconButton, Box, Menu, MenuItem, InputBase, Divider, ListItemIcon 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TuneIcon from "@mui/icons-material/Tune";

const Header = ({ onMenuClick, isCollapsed }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const handleProfileClick = (event) => {
    setUserProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setUserProfile(null);
  };

  // Open/Close Notification Menu
  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="no-print">
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: { md: `calc(100% - ${isCollapsed ? 80 : 240}px)` },
          marginLeft: { md: `${isCollapsed ? 80 : 240}px` },
          transition: "width 0.3s ease, margin-left 0.3s ease",
        }}
      >
        <Toolbar>
          {/* Sidebar Toggle Button */}
          <IconButton
            color="inherit"
            aria-label="toggle sidebar"
            onClick={onMenuClick}
            edge="start"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Search Box */}
          <Box sx={{ background: "white", borderRadius: "7px", display: "flex", alignItems: "center", pl: 1 }}>
            <InputBase sx={{ flex: 1 }} placeholder="Search" />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Header Icons */}
          <Box display="flex" ml="auto">
            {/* Notifications Icon with Dropdown */}
            <IconButton color="inherit" onClick={handleNotificationClick}>
              <NotificationsOutlinedIcon />
            </IconButton>

            {/* Notification Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleNotificationClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                mt: 1,
                "& .MuiPaper-root": {
                  borderRadius: 2,
                  minWidth: 250,
                  boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                },
              }}
            >
              <MenuItem onClick={handleNotificationClose}>🔔 New user signed up</MenuItem>
              <Divider />
              <MenuItem onClick={handleNotificationClose}>📩 You received a new message</MenuItem>
              <Divider />
              <MenuItem onClick={handleNotificationClose}>⚡ System update available</MenuItem>
            </Menu>

            {/* Settings Icon */}
            {/* <IconButton color="inherit" component={Link} to="/settings">
              <SettingsOutlinedIcon />
            </IconButton> */}

            {/* User Icon */}
            <IconButton color="inherit" onClick={handleProfileClick}>          
              <PersonOutlinedIcon />
            </IconButton>
            
            {/* User Profile Menu */}
            <Menu
              anchorEl={userProfile}
              open={Boolean(userProfile)}
              onClose={handleProfileClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                mt: 1,
                "& .MuiPaper-root": {
                  borderRadius: 2,
                  minWidth: 200,
                  boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                },
              }}
            >
              <MenuItem onClick={handleProfileClose}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleProfileClose} component={Link} to="/settings">
              <ListItemIcon>
                  <TuneIcon fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleProfileClose} component={Link} to="/logout">
              <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
