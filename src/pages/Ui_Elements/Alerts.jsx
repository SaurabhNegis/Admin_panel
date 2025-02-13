import React from "react";
import { Box, Alert, AlertTitle, Button, Stack } from "@mui/material";

const Alerts = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 500, mx: "auto", mt: 4 }}>
      <Stack spacing={2}>
        {/* Basic Alerts */}
        <Alert severity="error">This is an error alert — something went wrong!</Alert>
        <Alert severity="warning">This is a warning alert — be cautious!</Alert>
        <Alert severity="info">This is an info alert — check this out!</Alert>
        <Alert severity="success">This is a success alert — operation successful!</Alert>

        {/* Alerts with Titles */}
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an issue processing your request.
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Please double-check your input.
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Remember to save your work!
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your changes have been saved.
        </Alert>

        {/* Alerts with Actions */}
        <Alert 
          severity="warning"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          Warning alert with an action button.
        </Alert>

        <Alert 
          severity="info"
          action={
            <Button color="inherit" size="small">
              LEARN MORE
            </Button>
          }
        >
          Info alert with an action button.
        </Alert>

        {/* Dismissible Alert */}
        <Alert severity="success" onClose={() => {}}>
          This alert can be dismissed.
        </Alert>
      </Stack>
    </Box>
  );
};

export default Alerts;
