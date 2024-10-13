import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import CheckCircleIcon
import { Snackbar } from '@mui/material'; // Import Snackbar for notifications

const MapComponent = ({ onSelectCoordinates }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Track the time of the last click
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleMapClick = (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastClickTime;

    // Check if the click was a double-tap (within 300 milliseconds)
    if (timeDifference < 300) {
      const [longitude, latitude] = event.lngLat;
      // Set the selected location
      setSelectedLocation({ longitude, latitude });
      
      // Pass the coordinates back to the parent form or destination field
      if (onSelectCoordinates) {
        onSelectCoordinates({ longitude, latitude });
      }

      // Show snackbar notification
      setSnackbarOpen(true);
    }

    // Update the last click time
    setLastClickTime(currentTime);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        initialViewState={{
          longitude: 36.8219,  // Longitude of Nairobi
          latitude: -1.2921,   // Latitude of Nairobi
          zoom: 10,
        }}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onClick={handleMapClick}
      >
        {selectedLocation && (
          <Marker 
            longitude={selectedLocation.longitude} 
            latitude={selectedLocation.latitude}
            anchor="bottom" // Anchoring the marker to the bottom
          >
            <CheckCircleIcon style={{ color: 'green', fontSize: 30 }} /> {/* Checkmark Icon */}
          </Marker>
        )}
      </Map>
      
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Location selected!"
        autoHideDuration={3000} // Auto-hide after 3 seconds
      />
    </div>
  );
};

export default MapComponent;
