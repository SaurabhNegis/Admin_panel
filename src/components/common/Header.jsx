import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Header = ({ onMenuClick, isCollapsed }) => {
  return (
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
        <IconButton color="inherit" aria-label="toggle sidebar" onClick={onMenuClick} edge="start" sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          TreeMultiSoft
        </Typography>

        {/* Rest of Header Icons */}
        <Box display="flex" ml="auto">
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
