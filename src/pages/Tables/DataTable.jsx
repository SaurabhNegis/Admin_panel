import React, { useState } from "react";
import { Box, Typography, TextField, Toolbar, InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Columns definition for the DataGrid
const columns = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "position", headerName: "Position", flex: 1, minWidth: 150 },
  { field: "office", headerName: "Office", flex: 1, minWidth: 150 },
  { field: "age", headerName: "Age", type: "number", flex: 0.5, minWidth: 100 },
  { field: "startDate", headerName: "Start Date", flex: 1, minWidth: 150 },
  { field: "salary", headerName: "Salary", flex: 1, minWidth: 150 },
];

// Sample data rows for the DataGrid
const rows = [
  { id: 1, name: "John Doe", position: "Software Engineer", office: "New York", age: 30, startDate: "2019-04-25", salary: "$120,000" },
  { id: 2, name: "Jane Smith", position: "Product Manager", office: "San Francisco", age: 35, startDate: "2017-08-10", salary: "$150,000" },
  { id: 3, name: "Mike Johnson", position: "UI/UX Designer", office: "London", age: 28, startDate: "2020-01-15", salary: "$95,000" },
  { id: 4, name: "Emily Davis", position: "Data Analyst", office: "Chicago", age: 32, startDate: "2018-06-20", salary: "$110,000" },
  { id: 5, name: "Robert Brown", position: "HR Manager", office: "Los Angeles", age: 40, startDate: "2015-03-10", salary: "$130,000" },
  { id: 6, name: "Alice Green", position: "Marketing Lead", office: "Toronto", age: 29, startDate: "2021-07-01", salary: "$105,000" },
  { id: 7, name: "David White", position: "DevOps Engineer", office: "Berlin", age: 36, startDate: "2016-11-05", salary: "$140,000" },
  { id: 8, name: "Chris Walker", position: "IT Support", office: "Dublin", age: 27, startDate: "2022-02-01", salary: "$90,000" },
  { id: 9, name: "Laura Adams", position: "Finance Manager", office: "Madrid", age: 45, startDate: "2010-11-30", salary: "$160,000" },
];

const DataTable = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Filter rows based on search text
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <Box sx={{ height: "auto", width: "100%", boxShadow: 3, borderRadius: 2, bgcolor: "white", p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Employee DataTable
      </Typography>

      {/* Search Bar */}
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField
          variant="outlined"
          label="Search"
          value={searchText}
          onChange={handleSearch}
          fullWidth
          sx={{ maxWidth: 300,
           }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"></InputAdornment>
            ),
          }}
        />
      </Toolbar>

      {/* DataGrid */}
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5, 10, 15]}
        initialState={{ pagination: { paginationModel: { pageSize: 8 } } }}
        disableRowSelectionOnClick
        sx={{ fontSize: 14, marginTop: 2 }}
      />
    </Box>
  );
};

export default DataTable;
