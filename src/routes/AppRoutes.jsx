// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MainLayout from '../layout/MainLayout';

const AppRoutes = () => (

  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>


);

export default AppRoutes;
