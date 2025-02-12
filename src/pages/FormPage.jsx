import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email";
    tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters";
    tempErrors.message = formData.message ? "" : "Message is required";
    
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", password: "", message: "" }); // Reset form
    }
  };

  return (
    <Box >
            {/* Header Section */}
            <Typography variant="h4"   sx={{
          marginBottom: 5, 
          borderBottom: '2px solid', 
          borderColor: 'primary.main', 
          paddingBottom: 1
        }}
      >
              Form
            </Typography>
      <Box sx={{  boxShadow: 3, borderRadius: 2 }}>
         
        <Typography  variant="h5" gutterBottom sx={{ display: 'flex',paddingLeft:"10px", alignItems: 'center', background:"#1976d2" ,height:"70px" , color:"white"}}>
          Form elements
        </Typography>
        <Box sx={{  p: 3 }}>

        <form onSubmit={handleSubmit} >
          <Typography variant="subtitle1">Name</Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          <Typography variant="subtitle1">Email</Typography>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <Typography variant="subtitle1">Password</Typography>
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            margin="normal"
          />
          <Typography variant="subtitle1">Message</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
        </Box>
        </Box>
    </Box>
  );
};

export default FormPage;
