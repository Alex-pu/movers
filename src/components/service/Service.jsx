import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';

const services = [
  {
    title: 'Home Removals',
    description: 'Take the stress out of moving! Our experienced team will pack, transport and unpack your furniture into the rooms of your choice. From 3 bedroom house removals to flat share moves - we have got you covered! ',
    image: '/assets/home-removals.png',
  },
  {
    title: 'Office Relocation',
    description: 'We appreciate that moving offices can result in a loss of productivity. This is why we work with our clients to plan and execute office relocations in an efficient and timely manner, so that you can get back up and running as quickly as possible.',
    image: '/assets/office-relocation.png',
  },
  {
    title: 'Packing Services',
    description: 'We offer a comprehensive packing service. This is ideal for movers who wish to eliminate the time and effort spent packing & preparing to move.We sell boxes in a variety of sizes, as well as the essentials for packing such as tape bubble wrap and mattress covers',
    image: '/assets/packing-services.png',
  },
  {
    title: 'Storage Solutions',
    description: 'Affordable storage options for your personal or business needs.',
    image: '/assets/storage-solutions.png',
  },
];

const Service = () => {
  return (

    <Box id='services' sx={{ flexGrow: 1, padding: '2rem' }}>
     <Typography 
        variant="h2"  // Large heading for "Services"
        sx={{
          fontWeight: 'normal',  // Not bold
          marginBottom: '10px', 
          textAlign: 'center',
        }}
      >
        Services
      </Typography>
      <Box display="flex" flexWrap="wrap" spacing={4}>
        {services.map((service, index) => (
          <Box width={{ xs: '100%', sm: '50%', md: '33.33%' }} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                sx={{
                  margin: '0.5rem',
                  backgroundColor: '#001f3f',
                  color: 'white',
                }}
              >
                Learn More
              </Button>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
