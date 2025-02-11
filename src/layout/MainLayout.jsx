// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../common/Header";  // Import Header component
import Sidebar from "../common/Sidebar";  // Import Sidebar component

const drawerWidth = 240;

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className="app">
   <Header onMenuClick={handleDrawerToggle} />
        
        <div className="content">


    <Box sx={{ display: "flex" }}>
      {/* Header */}
   

      {/* Sidebar for larger screens */}
      <Drawer
  variant="permanent"
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { 
      width: drawerWidth, 
      boxSizing: "border-box",
      mt: 8 // <-- Fix: Offset to prevent overlap
    },
    display: { xs: "none", md: "block" },
  }}
>
  <Sidebar />
</Drawer>


      {/* Sidebar for mobile screens */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
        }}
      >
        <Sidebar />
      </Drawer>


      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          minHeight: "100vh",
          mt: 8, // Offset for the fixed AppBar
        }}
      >
        <Outlet />
      </Box>
    </Box>
    </div>

    </div>

  );
};

export default MainLayout;