import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '1rem',
        backgroundColor: '#001f3f', // Adjust the background color as needed
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Khama Movers. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Developed by Alex
      </Typography>
    </Box>
  );
};

export default Footer;
