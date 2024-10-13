import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: 'url(/assets/hero.png)', // Replace with your own image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
     <Typography 
  variant="h3" 
  component="h1" 
  gutterBottom
  sx={{ 
    fontWeight: 'bold',  // Make the text thick
    backgroundColor: 'rgba(0, 31, 63, 0.5)',  // 50% transparent ##001f3f
    padding: '10px',  // Add padding around the text
  }}
>
  PACKAGING. MOVING. STORAGE
</Typography>
   <Box sx={{ display: 'flex', gap: '0.5rem' }}> {/* Add space between buttons */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#001f3f',  // Blue background
          color: 'white',  // White text
          borderRadius: '0',  // Removes rounded corners
        }}
        component={Link}
        to="/form"
      >
        Get a Quote
      </Button>
      
      <Button
        variant="outlined"
        sx={{
          borderColor: '#001f3f',  // Border with the blue color
          color: '#001f3f',  // Blue text color
          borderRadius: '0',  // Removes rounded corners
        }}
      >
        Call: 0704813341
      </Button>
    </Box>
    </Box>
  );
};

export default Hero;
