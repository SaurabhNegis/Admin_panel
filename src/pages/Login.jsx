// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          sx={{ display: { sm: "none" }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;