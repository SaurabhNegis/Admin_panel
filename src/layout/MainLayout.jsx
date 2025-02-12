import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/common/Header";  
import Sidebar from "../components/common/Sidebar";  

// Define the width of the sidebar when expanded and collapsed
const drawerWidth = 240;
const collapsedWidth = 80; // Collapsed width for sidebar

const MainLayout = () => {
  // State to control the mobile drawer (open/close)
  const [mobileOpen, setMobileOpen] = useState(false);
  // State to track whether the sidebar is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Access the theme object from Material-UI
  const theme = useTheme();
  // Check if the screen size is below the "md" breakpoint (mobile screen)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Function to toggle the mobile sidebar visibility
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  // Function to toggle between collapsed and expanded sidebar
  const handleSidebarToggle = () => setIsCollapsed(!isCollapsed);

  return (
    // Box component - Main layout container
    <Box sx={{ zIndex: "1000", display: "flex", position: "relative", width: "100%", minHeight: "100vh" }}>
      
      {/* Header Component */}
      <Header 
        onMenuClick={isMobile ? handleDrawerToggle : handleSidebarToggle} 
        isCollapsed={isCollapsed} 
        sx={{ zIndex: 1100 }} // Ensure header doesn't cover sidebar
      />

      {/* Permanent Sidebar for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" }, // Hide on mobile
          width: isCollapsed ? collapsedWidth : drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isCollapsed ? collapsedWidth : drawerWidth,
            boxSizing: "border-box",
            position: "fixed",
            height: "100vh",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          },
        }}
      >
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </Drawer>

      {/* Mobile Drawer (Fix zIndex Issue) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Keeps drawer mounted for better performance
        sx={{
          display: { xs: "block", md: "none" }, // Show only on mobile
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            zIndex: 1301, // Ensure sidebar is ABOVE the header
            position: "fixed",
          },
        }}
      >
        <Sidebar isCollapsed={false} />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 7, // Offset for fixed AppBar
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          p: 3,
        //   ml: { md: `${isCollapsed ? collapsedWidth : drawerWidth}px`, xs: 0 }, // Adjust margin based on collapse state
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
