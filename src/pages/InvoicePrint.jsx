import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CssBaseline } from '@mui/material';

const InvoicePrint = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    // Retrieve invoice data from localStorage
    const storedData = localStorage.getItem('invoiceData');
    if (storedData) {
      setInvoiceData(JSON.parse(storedData));
    }
    
    // Automatically trigger print dialog
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  if (!invoiceData) {
    return <Typography>Loading invoice...</Typography>;
  }

  return (
    <>
      <CssBaseline />
      <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
              size: A4;
              width: 210mm;
              height: 297mm;
            }
            .invoice-container {
              width: 100%;
              max-width: 210mm;
              margin: auto;
              padding: 20mm;
              background: #fff;
            }
            .no-print {
              display: none;
            }
            @page {
              size: A4;
              margin: 20mm;
            }
          }
        `}
      </style>

      <Box className="invoice-container">
        {/* Invoice Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
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

        {/* Order Summary Table */}
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
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Subtotal: ${invoiceData.subtotal.toFixed(2)}</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Shipping: ${invoiceData.shipping.toFixed(2)}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total: ${invoiceData.total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default InvoicePrint;
