import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ marginLeft: '0.5rem' }}>
          About Us
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
      Khama is an established removals and storage company serving Nairobi and its metropolitan. Our team have years of experience in the transportation and delivery of goods therefore we can guarantee to provide safe and secure bespoke transportation solutions for individuals and businesses alike.

We have quickly established a reputation for outstanding customer service and we pride ourselves on continuing to provide a reliable and specialised service whilst extending our database of satisfied customers.      </Typography>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
        Why Choose Us?
      </Typography>

      <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
        We pride ourselves on our excellent customer service and professional approach. Our team is trained and experienced to handle all types of moves, ensuring that your belongings are safe and secure. Choose us for a hassle-free moving experience.
      </Typography>
    </Box>
  );
};

export default About;
