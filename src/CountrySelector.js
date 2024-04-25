import React, { useState, useEffect } from 'react';
import './styles/CountrySelector.css';

function CountrySelector() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [climateZone, setClimateZone] = useState('');
  const [zoneDescription, setZoneDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError('Error getting geolocation: ' + error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchClimateZone();
    }
  }, [latitude, longitude]);

  const fetchClimateZone = async () => {
    try {
      const response = await fetch(`http://climateapi.scottpinkelman.com/api/v1/location/${latitude}/${longitude}`);
      if (response.ok) {
        const data = await response.json();
        if (data.return_values && data.return_values.length > 0) {
          const { koppen_geiger_zone, zone_description } = data.return_values[0];
          console.log('Climate Zone:', koppen_geiger_zone);
          console.log('Zone Description:', zone_description);
          setClimateZone(koppen_geiger_zone);
          setZoneDescription(zone_description);
        } else {
          setError('Climate zone data not found in response.');
        }
      } else {
        setError('Failed to fetch climate zone. Status code: ' + response.status);
      }
    } catch (error) {
      setError('Error fetching climate zone: ' + error.message);
    }
  };

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>You are currently in the Koppen Climate Zone: {climateZone}</p>
          <p>Your Zone Description: {zoneDescription}</p>
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
