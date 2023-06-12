import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px',
};

const center = {
  lat: 6.42494,
  lng: 3.44385,
};

const markerPosition = {
  lat: 6.42494,
  lng: 3.44385,
};

const GoogleMapComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
        <h1>Get direction</h1>
    <LoadScript googleMapsApiKey="AIzaSyAvruh-MYfxc0GoAH_izVhSHNhKB9dpy7o">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={markerPosition} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' }} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
