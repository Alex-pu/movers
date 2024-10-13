import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const ActionCall = () => {
  return (
    <Box
    id='contact'
      sx={{
        padding: '2rem',
        backgroundColor: '#f7f7f7',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Need Help with Moving?
      </Typography>
      <Button
        variant="contained"
        color="#001f3f"
        sx={{ margin: '0.5rem' }}
        component={Link}
        to="/form"
      >
        Get a Quote
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{ margin: '0.5rem' }}
        component={Link}
        to='/contact'
         
      >
        Call Us Now
      </Button>
    </Box>
  );
};

export default ActionCall;
