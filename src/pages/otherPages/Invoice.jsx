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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

const Invoices = () => {
  const navigate = useNavigate();

  // Invoice Data
  const invoiceData = {
    customer: {
      name: "John Smith",
      address: "1234 Main, Apt. 4B, Springfield, ST 54321",
    },
    shippedTo: {
      name: "Kenny Rigdon",
      address: "1234 Main, Apt. 4B, Springfield, ST 54321",
    },
    orderDate: "October 7, 2016",
    payment: {
      method: "Visa ending **** 4242",
      email: "jsmith@email.com",
    },
    items: [
      { name: "BS-200", price: 10.99, quantity: 1 },
      { name: "BS-400", price: 20.0, quantity: 3 },
      { name: "BS-1000", price: 600.0, quantity: 1 },
    ],
    shipping: 15.0,
  };

  // Calculate totals
  const subtotal = invoiceData.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + invoiceData.shipping;

  // Save invoice data before navigating to print page
  const handlePrint = () => {
    localStorage.setItem('invoiceData', JSON.stringify({ ...invoiceData, subtotal, total }));
    navigate('/invoicePrint');
  };

  return (
    <Box sx={{ p: 4, maxWidth: '900px', mx: 'auto', borderRadius: 2, boxShadow: 3 }}>
      {/* Invoice Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" style={{ maxWidth: '150px' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Invoice</Typography>
      </Box>

      {/* Billing & Shipping Information */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Billed To:</Typography>
          <Typography>{invoiceData.customer.name}</Typography>
          <Typography>{invoiceData.customer.address}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Shipped To:</Typography>
          <Typography>{invoiceData.shippedTo.name}</Typography>
          <Typography>{invoiceData.shippedTo.address}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Order Date:</Typography>
          <Typography>{invoiceData.orderDate}</Typography>
        </Box>
      </Box>

      {/* Payment Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Payment Method:</Typography>
        <Typography>{invoiceData.payment.method}</Typography>
        <Typography>{invoiceData.payment.email}</Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Order Summary */}
      <Typography variant="h6" sx={{ mb: 2 }}>Order Summary</Typography>
      <TableContainer component={Paper} sx={{ mb: 2, background: 'transparent', boxShadow: 'none' }}>
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
            {invoiceData.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Total Summary */}
      <Box sx={{ textAlign: 'right', maxWidth: '300px', ml: 'auto' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Shipping: ${invoiceData.shipping.toFixed(2)}</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</Typography>
      </Box>

      {/* Print Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="contained" color="primary" startIcon={<PrintIcon />} onClick={handlePrint}>
          Print
        </Button>
      </Box>
    </Box>
  );
};

export default Invoices;
