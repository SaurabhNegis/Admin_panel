import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import { Dashboard, Settings, Logout } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import TableChartIcon from "@mui/icons-material/TableChart";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import ErrorIcon from "@mui/icons-material/Error";
import FunctionsIcon from "@mui/icons-material/Functions";
import MapIcon from "@mui/icons-material/Map";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WebIcon from '@mui/icons-material/Web';
import LockIcon from '@mui/icons-material/Lock';
import PasswordIcon from '@mui/icons-material/Password';
// Global icon styles
const iconStyle = { color: "#C5C5CF" };

const Sidebars = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Sidebar collapsed={isCollapsed} style={{ height: "100vh", width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "10px", marginBottom: "50px" }}>
          {!isCollapsed && <Typography variant="h6">Admin Panel</Typography>}
          <IconButton onClick={handleToggle}>
            <MenuOutlinedIcon sx={iconStyle} />
          </IconButton>
        </Box>

        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ active }) => ({
              backgroundColor: active ? "#1976d2" : "transparent",
              color:"#232323",
              "&:hover": {
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }),
          }}
        >
          <MenuItem icon={<Dashboard sx={iconStyle} />} component={<Link to={"/"} />} active={location.pathname === "/"}>
            {!isCollapsed && "Dashboard"}
          </MenuItem>

          <MenuItem icon={<Settings sx={iconStyle} />} component={<Link to={"/settings"} />} active={location.pathname === "/settings"}>
            {!isCollapsed && "Settings"}
          </MenuItem>

          <MenuItem icon={<DynamicFormIcon sx={iconStyle} />} component={<Link to={"/formPage"} />} active={location.pathname === "/formPage"}>
            {!isCollapsed && "Form"}
          </MenuItem>

          <SubMenu icon={<TableChartIcon sx={iconStyle} />} label="Tables">
            <MenuItem icon={<TableChartIcon sx={iconStyle} />} component={<Link to={"/basicTables"} />} active={location.pathname === "/basicTables"}>
              Basic Table
            </MenuItem>

            <MenuItem icon={<PivotTableChartIcon sx={iconStyle} />} component={<Link to={"/dataTable"} />} active={location.pathname === "/dataTable"}>
              Data Table
            </MenuItem>
          </SubMenu>

          <SubMenu icon={<EditNoteIcon sx={iconStyle} />} label="UI Elements">
            <MenuItem icon={<TableChartIcon sx={iconStyle} />} component={<Link to={"/buttons"} />} active={location.pathname === "/buttons"}>
              Buttons
            </MenuItem>

            <MenuItem icon={<PivotTableChartIcon sx={iconStyle} />} component={<Link to={"/tabAndAccordions"} />} active={location.pathname === "/tabAndAccordions"}>
              Tab & Accordions
            </MenuItem>

            <MenuItem icon={<FunctionsIcon sx={iconStyle} />} component={<Link to={"/alerts"} />} active={location.pathname === "/alerts"}>
              Alerts
            </MenuItem>

            <MenuItem icon={<ErrorIcon sx={iconStyle} />} component={<Link to={"/modals"} />} active={location.pathname === "/modals"}>
              Modals
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<MapIcon sx={iconStyle} />} component={<Link to={"/maps"} />} active={location.pathname === "/maps"}>
            {!isCollapsed && "Map"}
          </MenuItem>

          <SubMenu icon={<TableChartIcon sx={iconStyle} />} label="Other Pages">
          <MenuItem icon={<ReceiptIcon sx={iconStyle} />} component={<Link to={"/invoice"} />} active={location.pathname === "/invoice"}>
              Invoice
            </MenuItem>
            <MenuItem icon={<ReceiptIcon sx={iconStyle} />} component={<Link to={"/notFoundPage"} />} active={location.pathname === "/notFoundPage"}>
              404 page
            </MenuItem>
            <MenuItem icon={<WebIcon sx={iconStyle} />} component={<Link to={"/blankPage"} />} active={location.pathname === "/blankPage"}>
            BlankPage
            </MenuItem>
            <MenuItem icon={<LockIcon sx={iconStyle} />} component={<Link to={"/lockScreen"} />} active={location.pathname === "/lockScreen"}>
            LockScreen
            </MenuItem>
            <MenuItem icon={<PasswordIcon sx={iconStyle} />} component={<Link to={"/recoverPassword"} />} active={location.pathname === "/recoverPassword"}>
            RecoverPassword
            </MenuItem>


          </SubMenu>

          <MenuItem icon={<Logout sx={iconStyle} />} component={<Link to={"/logout"} />} active={location.pathname === "/logout"}>
            {!isCollapsed && "Logout"}
          </MenuItem>

          <MenuItem icon={<HowToRegIcon sx={iconStyle} />} component={<Link to={"/signup"} />} active={location.pathname === "/signup"}>
            {!isCollapsed && "Sign Up"}
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
