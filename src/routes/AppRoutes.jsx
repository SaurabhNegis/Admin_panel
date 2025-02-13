// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import FormPage from '../pages/FormPage';
// import NotFound from '../pages/NotFound';
import MainLayout from '../layout/MainLayout';
import BasicTables from '../pages/Tables/BasicTables';
import DataTable from '../pages/Tables/DataTable';
import Buttons from '../pages/UI_Elements/Buttons';
import TabAndAccordions from '../pages/Ui_Elements/TabAndAccordions';
import Alerts from '../pages/Ui_Elements/Alerts';
import Modals from '../pages/Ui_Elements/Modals';
import Maps from '../pages/Maps/Maps';

const AppRoutes = () => (
  <Routes>
    {/* Route for Login Page - accessible without authentication */}
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />

    {/* Protected routes wrapped inside MainLayout */}
    <Route path="/" element={<MainLayout />}>
      {/* Default route (Dashboard) when visiting "/" */}
      <Route index element={<Dashboard />} />
      
      {/* Route for Users page */}
      <Route path="users" element={<Users />} />

      {/* Route for Settings page */}
      <Route path="settings" element={<Settings />} />

      {/* Route for FormPage page */}  
      <Route path="formPage" element={<FormPage />} />

      {/* Route for tables page */}
      <Route path="basicTables" element={<BasicTables />} />
      <Route path="dataTable" element={<DataTable />} />

      {/* Route for tables page */}
      <Route path="buttons" element={<Buttons />} />
      

      {/* Route for tables page */}
      <Route path="tabAndAccordions" element={<TabAndAccordions />} />

      {/* Route for Alert page */}
      <Route path="alerts" element={<Alerts />} />

       {/* Route for modals page */}
       <Route path="modals" element={<Modals />} />

        {/* Route for Maps page */}
        <Route path="maps" element={<Maps />} />

    </Route>

    {/* Uncomment this to handle unknown routes with a NotFound page */}
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default AppRoutes;
