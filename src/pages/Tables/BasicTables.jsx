import React from "react";
import {
  Box,
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const tableData = [
  { no: 1, firstName: "John", lastName: "Doe", username: "johndoe" },
  { no: 2, firstName: "Jane", lastName: "Smith", username: "janesmith" },
  { no: 3, firstName: "Emily", lastName: "Johnson", username: "emilyj" },
];

const BasicTables = () => {
  return (
    <Box>
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 5,
          borderBottom: "2px solid",
          borderColor: "primary.main",
          paddingBottom: 1,
        }}
      >
        Basic Table
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
          gap: 2,
          marginBottom: 4,
        }}
      >
        {/* Bordered Table */}
        <Box sx={{ flex: 1,  borderRadius: 2 }}>
  <Typography
    variant="h5"
    gutterBottom
    sx={{
      display: "flex",
      paddingLeft: "10px",
      alignItems: "center",
      background: "#1976d2",
      height: "70px",
      color: "white",
      borderRadius: "6px 6px 0 0",
    }}
  >
    Border Table
  </Typography>
  <TableContainer component={Paper}>
    <Table sx={{ border: "1px solid #ddd" }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold", border: "1px solid #ddd" }}>No.</TableCell>
          <TableCell sx={{ fontWeight: "bold", border: "1px solid #ddd" }}>First Name</TableCell>
          <TableCell sx={{ fontWeight: "bold", border: "1px solid #ddd" }}>Last Name</TableCell>
          <TableCell sx={{ fontWeight: "bold", border: "1px solid #ddd" }}>Username</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            key={row.no}
            sx={{ borderBottom: "1px solid #ddd" }}
          >
            <TableCell sx={{ border: "1px solid #ddd" }}>{row.no}</TableCell>
            <TableCell sx={{ border: "1px solid #ddd" }}>{row.firstName}</TableCell>
            <TableCell sx={{ border: "1px solid #ddd" }}>{row.lastName}</TableCell>
            <TableCell sx={{ border: "1px solid #ddd" }}>{row.username}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>


        {/* Hover Table */}
        <Box sx={{ flex: 1, borderRadius: 2 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              display: "flex",
              paddingLeft: "10px",
              alignItems: "center",
              background: "#1976d2",
              height: "70px",
              color: "white",
              borderRadius: "6px 6px 0 0",
            }}
          >
            Hover Table
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.no} hover>
                    <TableCell>{row.no}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* Responsive Table */}
      <Box sx={{  borderRadius: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            display: "flex",
            paddingLeft: "10px",
            alignItems: "center",
            background: "#1976d2",
            height: "70px",
            color: "white",
            borderRadius: "6px 6px 0 0",
          }}
        >
          Responsive Table
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.no}>
                  <TableCell>{row.no}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.username}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BasicTables;
