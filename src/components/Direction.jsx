import { useEffect, useState } from 'react';

function Direction() {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  console.log(userLocation)

  useEffect(() => {
    // Retrieve the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    // Create a new Google Maps instance
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 10,
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (map && userLocation) {
      // Add a marker for the user's location
      new window.google.maps.Marker({
        position: userLocation,
        map,
        title: 'Your Location',
      });

      // Add a marker for the destination location
      const destination = { lat: 37.7749, lng: -122.4194 };
      new window.google.maps.Marker({
        position: destination,
        map,
        title: 'Destination',
      });

      // Calculate the directions and distance
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map,
      });

      directionsService.route(
        {
          origin: userLocation,
          destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
            setDirections(result);
          } else {
            console.error(`Failed to calculate directions: ${status}`);
          }
        },
      );
    }
  }, [map, userLocation]);

  return (
    <div>
      <div id="map" style={{ height: '400px' }}></div>
      {directions && (
        <div>
          <p>Distance: {directions.routes[0].legs[0].distance.text}</p>
          <p>Duration: {directions.routes[0].legs[0].duration.text}</p>
        </div>
      )}
    </div>
  );
}

export default Direction