import React from 'react';
import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem' }} />
        <Typography variant="body1">Phone: 0704813341</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
        <Typography variant="body1">Email: info@khama.com</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />
        <Typography variant="body1">Location: Ruiru, Kenya</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
