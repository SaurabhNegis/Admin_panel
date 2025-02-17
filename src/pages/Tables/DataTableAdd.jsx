import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const DataTable = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", position: "Software Engineer", office: "New York", age: 30, startDate: "2019-04-25", salary: "$120,000" },
    { id: 2, name: "Jane Smith", position: "Product Manager", office: "San Francisco", age: 35, startDate: "2017-08-10", salary: "$150,000" },
  ]);

  const [newData, setNewData] = useState({
    name: "",
    position: "",
    office: "",
    age: "",
    startDate: "",
    salary: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNewData({ name: "", position: "", office: "", age: "", startDate: "", salary: "" });
    setOpen(false);
  };

  const handleAddData = () => {
    if (newData.name && newData.position && newData.office && newData.age && newData.startDate && newData.salary) {
      setRows([...rows, { id: rows.length + 1, ...newData }]);
      handleClose();
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "position", headerName: "Position", flex: 1, minWidth: 150 },
    { field: "office", headerName: "Office", flex: 1, minWidth: 150 },
    { field: "age", headerName: "Age", type: "number", flex: 0.5, minWidth: 100 },
    { field: "startDate", headerName: "Start Date", flex: 1, minWidth: 100 },
    { field: "salary", headerName: "Salary", flex: 1, minWidth: 120 },
  ];

  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Add New Data
      </Button>

      {/* Scrollable Container for DataGrid */}
      <Box
        sx={{
          mt: 2,
          backgroundColor: "white",
          height: 400,
          width: "100%",
          overflowX: "auto", // Enable horizontal scrolling only for the table
        }}
      >
        <Box sx={{ minWidth: 750 }}> {/* Ensure the DataGrid is wider than the screen on mobile */}
          <DataGrid rows={rows} columns={columns} pageSize={5} autoHeight />
        </Box>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Add New Employee</Typography>
          <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
          <TextField fullWidth label="Position" variant="outlined" sx={{ mb: 2 }} value={newData.position} onChange={(e) => setNewData({ ...newData, position: e.target.value })} />
          <TextField fullWidth label="Office" variant="outlined" sx={{ mb: 2 }} value={newData.office} onChange={(e) => setNewData({ ...newData, office: e.target.value })} />
          <TextField fullWidth label="Age" type="number" variant="outlined" sx={{ mb: 2 }} value={newData.age} onChange={(e) => setNewData({ ...newData, age: e.target.value })} />
          <TextField fullWidth label="Start Date" type="date" variant="outlined" sx={{ mb: 2 }} value={newData.startDate} onChange={(e) => setNewData({ ...newData, startDate: e.target.value })} />
          <TextField fullWidth label="Salary" variant="outlined" sx={{ mb: 2 }} value={newData.salary} onChange={(e) => setNewData({ ...newData, salary: e.target.value })} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" onClick={handleAddData}>Add</Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DataTable;
