// src/pages/Users.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Mock data to simulate an API response
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  { id: 3, name: 'Mark Johnson', email: 'mark.johnson@example.com', role: 'User' },
  { id: 4, name: 'Emma Brown', email: 'emma.brown@example.com', role: 'Admin' },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set mock users data
    setUsers(mockUsers);
  }, []);

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <div>
      <h1>User Management</h1>
      <Button variant="contained" color="primary" onClick={() => navigate('/users/create')}>
        Add New User
      </Button>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user.id)} variant="outlined">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;