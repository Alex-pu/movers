import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Form  from './pages/form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/map'
import ContactPage from './pages/contact';
import Aboutpage from './pages/aboutPage';
import Footer from './components/footer/footer';
const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Wrap everything inside BrowserRouter */}
      <BrowserRouter>
        {/* Navbar is rendered on all routes */}
        <Navbar />
        <Routes>
          {/* Home component is rendered at the root path */}
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/selectPoints" element={<Map />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element ={<Aboutpage />} />



        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
