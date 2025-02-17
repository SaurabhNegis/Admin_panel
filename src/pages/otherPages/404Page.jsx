import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
        flexDirection: "column",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold", color: "#e57373" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={handleBackToHome} sx={{ mt: 2 }}>
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
