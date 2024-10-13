import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoSection = () => {
  return (
    <Box
      sx={{
          backgroundColor: '#001f3f', // Change background color to match
        padding: '20px',  // Adds space around the content
        color: 'white',  // Makes the text white for contrast
        textAlign: 'center',  // Centers the text horizontally
      }}
    >
      <Typography 
        variant="h4" 
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',  // Makes the heading text capitalized
          marginBottom: '10px',  // Adds space below the heading
        }}
      >
        Seamless removals and storage experience
      </Typography>
      <Typography variant="body1">
        With over 10 years of experience we offer an all-in-one removals, packing, and storage service that caters completely to the needs of our clients. Our aim is always to make the process of moving your belongings as effortless as possible.
      </Typography>
    </Box>
  );
};

export default InfoSection;
