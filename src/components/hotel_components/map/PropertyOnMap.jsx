import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapWrapper } from './PropertyOnMap.style';

// Use your own Google Maps API key
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Define the coordinates for the location you want to show
const location = {
  lat: 37.7749, // Latitude of the location
  lng: -122.4194 // Longitude of the location (e.g., San Francisco)
};

// Define the map container styles
const mapContainerStyle = {
    width: '150px',
    height: '100px',
};

const center = {
  lat: location.lat,
  lng: location.lng,
};

const PropertyOnMap = () => {
  const handleButtonClick = () => {
    // Open Google Maps with the specified location
    const url = `https://www.google.com/maps/?q=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };



  
  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <button onClick={handleButtonClick} style={{ marginTop: '10px' }}>
        View on Google Maps
      </button>
    </MapWrapper>
  );
};

export default PropertyOnMap;