import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"; // Import MenuOutlinedIcon

const Header = ({ onMenuClick, isCollapsed }) => {
  return (
    //   AppBar - Navigation bar component ,it serves as a container for elements of navigation
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
        {/* Sidebar Toggle Button (MenuOutlinedIcon) */}
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={onMenuClick}
          edge="start"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/*  MenuOutlinedIcon for collapsing/expanding the sidebar */}
        <IconButton
          color="inherit"
          aria-label="toggle sidebar collapse"
          onClick={onMenuClick}
          sx={{ display: { xs: "none", md: "none" } }}
        >
          <MenuOutlinedIcon />
        </IconButton>

        {/*  header search box component */}
        <Box sx={{ background: "white", borderRadius: "7px" }}>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Rest of Header(bar) Icons */}
        <Box display="flex" ml="auto">
          {/*  Header Notification icon */}
          <IconButton 
          color="inherit"
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          {/*  Header Setting icon */}
          <IconButton
          color="inherit"
          >
            <SettingsOutlinedIcon />
          </IconButton>
          {/*  Header user icon */}
          <IconButton
          color="inherit"
          >
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
          
    </div>
  );
};

export default Header;
