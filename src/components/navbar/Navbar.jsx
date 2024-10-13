import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      {/* Sticky Navbar */}
      <AppBar
        position="sticky"
        sx={{
          height: '80px', 
          backgroundColor: '#001f3f', // Change background color to match
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
    {/* Logo */}
    <img src="/logo.png" alt="Logo" style={{ height: '110px', marginRight: '5px' }} />

    {/* Title */}
    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
      <span style={{ color: '00bbff' }}>K</span>HAMA
    </Typography>
  </Box>
          {/* Burger Menu Icon for Mobile */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links for Larger Screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={Link} to='/' sx={{ fontSize: '1.1rem' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/#services" sx={{ fontSize: '1.1rem' }}>
              About
            </Button>
            <Button color="inherit" href="#services" sx={{ fontSize: '1.1rem' }}>
              Services
            </Button>
            <Button color="inherit" href="#contact" sx={{ fontSize: '1.1rem' }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/#services">
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
