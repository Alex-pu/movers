import React from 'react';
import MapComponent from '../components/map/mapComponent';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Map = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <MapComponent />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'absolute',
          bottom: '20px', // Adjusts the vertical position
          left: '50%', // Centers the button horizontally
          transform: 'translateX(-50%)', // Offsets the button to be truly centered
          margin: '0.5rem',
        }}
        component={Link}
        to="/form"
      >
        Back
      </Button>
    </div>
  );
};

export default Map;
