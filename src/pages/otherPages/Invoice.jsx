import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  GlobalStyles,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';

const Invoices = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleSend = () => {
    // Replace this alert with your email sending logic
    alert('Invoice sent!');
  };

  return (
    <>
      {/* Global print styles */}
      <GlobalStyles
        styles={{
          '@media print': {
            'html, body': {
              backgroundColor: '#fff',
              color: '#000',
              // Ensure backgrounds and colors are printed accurately
              WebkitPrintColorAdjust: 'exact',
            },
            // Remove shadows and margins that might interfere with printing
            '.MuiBox-root': {
              boxShadow: 'none !important',
            },
            // Hide elements that you don't want printed (if any)
            '.no-print': {
              display: 'none',
            },
          },
        }}
      />
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: '900px',
          mx: 'auto',
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Header with Logo and Invoice Title */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <img
            src="https://via.placeholder.com/150x50?text=Logo"
            alt="Logo"
            style={{ maxWidth: '150px' }}
          />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Invoice
          </Typography>
        </Box>

        {/* Billing, Shipping, and Payment Information */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Billed To */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Billed To:
            </Typography>
            <Typography>John Smith</Typography>
            <Typography>1234 Main</Typography>
            <Typography>Apt. 4B</Typography>
            <Typography>Springfield, ST 54321</Typography>
          </Box>
          {/* Shipped To */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Shipped To:
            </Typography>
            <Typography>Kenny Rigdon</Typography>
            <Typography>1234 Main</Typography>
            <Typography>Apt. 4B</Typography>
            <Typography>Springfield, ST 54321</Typography>
          </Box>
          {/* Payment Method and Order Date */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Payment Method:
            </Typography>
            <Typography>Visa ending **** 4242</Typography>
            <Typography>jsmith@email.com</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Order Date:
            </Typography>
            <Typography>October 7, 2016</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Order Summary */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Order Summary
        </Typography>
      {/* Order Summary Table */}
<TableContainer component={Paper} sx={{ mb: 2 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>Item</TableCell>
        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>BS-200</TableCell>
        <TableCell align="right">$10.99</TableCell>
        <TableCell align="right">1</TableCell>
        <TableCell align="right">$10.99</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>BS-400</TableCell>
        <TableCell align="right">$20.00</TableCell>
        <TableCell align="right">3</TableCell>
        <TableCell align="right">$60.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>BS-1000</TableCell>
        <TableCell align="right">$600.00</TableCell>
        <TableCell align="right">1</TableCell>
        <TableCell align="right">$600.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

{/* Summary Section Below Table */}
<Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', maxWidth: '300px', ml: 'auto' }}>
  <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
    Subtotal: <span>$670.99</span>
  </Typography>
  <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
    Shipping: <span>$15.00</span>
  </Typography>
  <Divider sx={{ my: 1 }} />
  <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
    Total: <span>$685.99</span>
  </Typography>
</Box>


        {/* Action Buttons for Print and Send */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<SendIcon />}
            onClick={handleSend}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Invoices;
