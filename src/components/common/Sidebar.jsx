import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { Box, Typography, IconButton } from "@mui/material";
import { Dashboard, Settings, Logout } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import TableChartIcon from "@mui/icons-material/TableChart";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
const Sidebars = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation(); // Getting the current location for sidebar menuitem

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Sidebar
        collapsed={isCollapsed}
        style={{ height: "100vh", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
            marginBottom: "50px",
          }}
        >
          {!isCollapsed && <Typography variant="h6">Admin Panel</Typography>}
          <IconButton onClick={handleToggle}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active }) => {
              if (active) {
                return {
                  backgroundColor: "#1976d2",
                  color: "#fff", // Custom text color for active item
                  "&:hover": {
                    backgroundColor: "#1976d2", // Custom hover background color
                  },
                };
              }
              return {};
            },
          }}
        >
          {/* Dashboard MenuItem  navigation*/}
          <MenuItem
            icon={<Dashboard />}
            component={<Link to={"/"} />}
            active={location.pathname === "/"} // Check if the current route matches
          >
            {!isCollapsed && "Dashboard"}
          </MenuItem>

          {/* Settings MenuItem navigation */}
          <MenuItem
            icon={<Settings />}
            component={<Link to={"/settings"} />}
            active={location.pathname === "/settings"} // Check if the current route matches
          >
            {!isCollapsed && "Settings"}
          </MenuItem>

          {/* formPage MenuItem  navigation*/}
          <MenuItem
            icon={<DynamicFormIcon />}
            component={<Link to={"/formPage"} />}
            active={location.pathname === "/formPage"} // Check if the current route matches
          >
            {!isCollapsed && "Form"}
          </MenuItem>

          {/* Tabel navigation */}
          <SubMenu icon={<TableChartIcon />} label="Tables">
            {/*Basic Tabel */}

            <MenuItem
              icon={<TableChartIcon />}
              component={<Link to={"/basicTables"} />}
            active={location.pathname === "/basicTables"} // Check if the current route matches

            >
              basic Table
            </MenuItem>
            {/* Data table  */}

            <MenuItem
              icon={<PivotTableChartIcon />}
              component={<Link to={"/dataTable"} />}
            active={location.pathname === "/dataTable"} // Check if the current route matches

            >
              Data Table{" "}
            </MenuItem>
          </SubMenu>

          {/* UI Elements navigation */}
          <SubMenu icon={<TableChartIcon />} label="UI Elements">
            {/*Buttons */}
            <MenuItem
              icon={<TableChartIcon />}
              component={<Link to={"/buttons"} />}
            active={location.pathname === "/buttons"} // Check if the current route matches

            >
              Buttons
            </MenuItem>

            {/* Data table  */}

            {/* <MenuItem
              icon={<PivotTableChartIcon />}
              component={<Link to={"/dataTable"} />}
            >
              Data Table{" "}
            </MenuItem> */}
          </SubMenu>

          {/* Logout MenuItem  navigation*/}
          <MenuItem
            icon={<Logout />}
            component={<Link to={"/logout"} />}
            active={location.pathname === "/logout"} // Check if the current route matches
          >
            {!isCollapsed && "Logout"}
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
