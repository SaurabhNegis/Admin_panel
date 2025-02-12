import React from 'react';
import { Box, Grid2, Card, CardContent, Typography, Paper } from '@mui/material'; 

const Dashboard = () => {
  return (
    <Box >
      {/* Header Section */}
      <Typography variant="h4" className="mb-6">
        Dashboard
      </Typography>

      {/* Metric Cards Section */}
      <Grid2 container spacing={4}>
        {/* Total Users Card */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Users
              </Typography>
              <Typography variant="h4" className="font-bold">
                1,200
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Total Sales Card */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Sales
              </Typography>
              <Typography variant="h4" className="font-bold">
                $34,000
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Pending Orders Card */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Pending Orders
              </Typography>
              <Typography variant="h4" className="font-bold">
                24
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Sales Overview Section */}
      <Box mt={6}>
        <Paper className="p-6 shadow-lg">
          <Typography variant="h6" className="mb-4">
            Sales Overview
          </Typography>
          {/* Placeholder for a future chart */}
          <Box
            className="flex items-center justify-center bg-gray-200"
            sx={{ height: 300, borderRadius: 1 }}
          >
            <Typography variant="body1" color="textSecondary">
              Chart Goes Here
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
