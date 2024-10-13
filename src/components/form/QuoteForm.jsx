import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    from: '',
    destination: '',
    truckSize: '',
    inventory: '',
    preferredDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box
        sx={{
          
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h1" align="center" color="#001f3f" gutterBottom>
          Get a Storage Quote
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* From (Apartment, Estate) */}
            <Grid item xs={12}>
              <TextField
                label="From (Apartment, Estate)"
                name="from"
                value={formData.from}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* Destination */}
            <Grid item xs={12}>
      <Link to="/selectPoints" style={{ textDecoration: 'none' }}>
        <TextField
          label="Destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#001f3f' },
              '&:hover fieldset': { borderColor: '#001f3f' }
            }
          }}
        />
      </Link>
    </Grid>

            {/* Preferred Size of Truck */}
            <Grid item xs={12}>
              <TextField
                label="Preferred Size of Truck"
                name="truckSize"
                value={formData.truckSize}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* Inventory */}
            <Grid item xs={12}>
              <TextField
                label="Inventory"
                name="inventory"
                value={formData.inventory}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>

            {/* Preferred Date */}
            <Grid item xs={12}>
              <TextField
                label="Preferred Date"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#001f3f' },
                    '&:hover fieldset': { borderColor: '#001f3f' }
                  }
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button type="submit" variant="contained"
              sx={{
                backgroundColor: '#001f3f',  // #001f3f background
                color: 'white',  // White text
                borderRadius: '0',  // Removes rounded corners
              }}>
              Get a Quote
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default QuoteForm;
