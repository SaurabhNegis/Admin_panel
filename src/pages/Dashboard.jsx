import React from "react";
import { Box, Card, CardContent, Typography,useMediaQuery } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const stats = [
  {
    title: "Total Subscription",
    value: "2,568",
    percentage: "48% From Last 24 Hours",
  },
  {
    title: "Order Status",
    value: "3,685",
    percentage: "15% Orders in Last 10 months",
  },
  {
    title: "Unique Visitors",
    value: "25,487",
    percentage: "65% From Last 24 Hours",
  },
  {
    title: "Monthly Earnings",
    value: "$2,779.7",
    percentage: "31% From Last 1 month",
  },
];

const data = [
  { id: 0, value: 40, label: "Category A" },
  { id: 1, value: 30, label: "Category B" },
  { id: 2, value: 20, label: "Category C" },
  { id: 3, value: 10, label: "Category D" },
];
const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect mobile screens

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
       <Typography variant="h4" gutterBottom sx={{
     marginBottom: 5, 
     borderBottom: '2px solid', 
     borderColor: 'primary.main', 
     paddingBottom: 1
   }}>
         Dashboard
       </Typography>

      {/* Replaced Grid with Box (CSS Grid) for better performance */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              p: 0,
              alignItems: "center",
              boxShadow: 3,
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Title Section with Background Color */}
            <Typography
              backgroundColor="primary.main"
              variant="h6"
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              height={50}
              fontWeight={600}
              sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}
            >
              {stat.title}
            </Typography>

            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                {stat.percentage}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>



      <Box>
        <Typography variant="h4"  sx={{marginTop:"48px"}} gutterBottom>
          Sales Distribution
        </Typography>
        <Box sx={{
          width: "100%",
          maxWidth: isMobile ? "100vw" : "400px", // Full width on mobile
          overflowX: isMobile ? "auto" : "visible", // Scroll only on mobile
          display: "flex",
          justifyContent: "center",
        }}
>

        <PieChart
          series={[{ data, innerRadius: 20, outerRadius: 100 }]}
          width={500}
          height={300}
        />
        </Box>
      </Box>
    </Box>

    
  );
};

export default Dashboard;
