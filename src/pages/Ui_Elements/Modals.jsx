import React, { useState } from "react";
import { Box, Modal, Button, Typography, Backdrop, Fade } from "@mui/material";

const Modals = () => {
  const [open, setOpen] = useState({ standard: false, large: false, small: false, custom: false });

  const handleOpen = (type) => setOpen((prev) => ({ ...prev, [type]: true }));
  const handleClose = (type) => setOpen((prev) => ({ ...prev, [type]: false }));

  return (
    <Box sx={{ width: "100%",  textAlign: "center", mt: 4, display: "flex", flexDirection: "column",alignItems:"center", justifyContent:"center" , gap: 10 }}>
      {/* Standard Modal */}
      <Button variant="contained" onClick={() => handleOpen("standard")}>
        Open Standard Modal
      </Button>
      <Modal
        open={open.standard}
        onClose={() => handleClose("standard")}
        aria-labelledby="standard-modal-title"
        aria-describedby="standard-modal-description"
      >
        <Box sx={modalStyle(400)}>
          <Typography variant="h6">Standard Modal</Typography>
          <Typography sx={{ mt: 2 }}>This is a default-sized modal.</Typography>
          <Button onClick={() => handleClose("standard")} sx={{ mt: 2 }} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>

      {/* Large Modal */}
      <Button variant="contained" color="secondary" onClick={() => handleOpen("large")}>
        Open Large Modal
      </Button>
      <Modal
        open={open.large}
        onClose={() => handleClose("large")}
        aria-labelledby="large-modal-title"
        aria-describedby="large-modal-description"
      >
        <Box sx={modalStyle(600)}>
          <Typography variant="h6">Large Modal</Typography>
          <Typography sx={{ mt: 2 }}>This modal has a wider size.</Typography>
          <Button onClick={() => handleClose("large")} sx={{ mt: 2 }} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>

      {/* Small Modal */}
      <Button variant="contained" color="success" onClick={() => handleOpen("small")}>
        Open Small Modal
      </Button>
      <Modal
        open={open.small}
        onClose={() => handleClose("small")}
        aria-labelledby="small-modal-title"
        aria-describedby="small-modal-description"
      >
        <Box sx={modalStyle(300)}>
          <Typography variant="h6">Small Modal</Typography>
          <Typography sx={{ mt: 2 }}>This is a compact-sized modal.</Typography>
          <Button onClick={() => handleClose("small")} sx={{ mt: 2 }} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>

      {/* Custom Width Modal */}
      <Button variant="contained" color="warning" onClick={() => handleOpen("custom")}>
        Open Custom Width Modal
      </Button>
      <Modal
        open={open.custom}
        onClose={() => handleClose("custom")}
        aria-labelledby="custom-modal-title"
        aria-describedby="custom-modal-description"
      >
        <Box sx={modalStyle(500)}>
          <Typography variant="h6">Custom Width Modal</Typography>
          <Typography sx={{ mt: 2 }}>This modal has a specific custom width.</Typography>
          <Button onClick={() => handleClose("custom")} sx={{ mt: 2 }} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

// Common modal style function
const modalStyle = (width) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: width,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
});

export default Modals;
