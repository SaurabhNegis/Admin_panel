// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Login from '../pages/loginSignupLogout/Login';
import Logout from '../pages/loginSignupLogout/Logout';
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
import SignUp from '../pages/loginSignupLogout/SignUp';
import Invoice from '../pages/otherPages/Invoice';
import RecoverPassword from '../pages/otherPages/RecoverPassword';
import LockScreen from '../pages/otherPages/LockScreen';
import BlankPage from '../pages/otherPages/BlankPage';
import NotFoundPage from '../pages/otherPages/404Page';
import DataTableAdd from '../pages/Tables/dataTableAdd';
import NotFound from '../pages/NotFound';
import InvoicePrint from '../pages/InvoicePrint';

const AppRoutes = () => (
  <Routes>
    {/* Route for Login Page - accessible without authentication */}
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/invoicePrint" element={<InvoicePrint />} />


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
      <Route path="dataTableAdd" element={<DataTableAdd />} />

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


        {/* other pages routes */}   
          {/* other pages routes */}
              <Route path="invoice" element={<Invoice />} />
          {/* other pages routes */}
              <Route path="recoverPassword" element={<RecoverPassword />} />
        {/* other pages routes */}
        <Route path="lockScreen" element={<LockScreen />} />
        {/* other pages routes */}
        <Route path="blankPage" element={<BlankPage />} />
        {/* other pages routes */}
        <Route path="notFoundPage" element={<NotFoundPage />} />

    </Route>

    {/* Uncomment this to handle unknown routes with a NotFound page */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
