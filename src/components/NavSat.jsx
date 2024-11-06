import React, { useState, useEffect } from 'react';

const NavSat = () => {
  // Initialize state with data from localStorage or set to null if not available
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('gps');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  // Fetch data from server (this won't work without access to the backend), then store in state and local storage
  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/NavSat')
        .then((response) => {
          if (!response.ok) {
            // Throw an error for a non-200 response
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('gps', JSON.stringify(newData)); // Use localstorage for data persistence
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching NavSat data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 200); // 5 Hz

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Display latitude and longitude in degrees, minutes, and direction for easier reading
  const latitude = data.latitude;
  const longitude = data.longitude;

  const latDegrees = Math.abs(Math.floor(latitude));
  const latMinutes = Math.abs(((latitude % 1) * 60).toFixed(3));
  const latDirection = latitude >= 0 ? 'N' : 'S';

  const lonDegrees = Math.abs(Math.floor(longitude));
  const lonMinutes = Math.abs(((longitude % 1) * 60).toFixed(3));
  const lonDirection = longitude >= 0 ? 'E' : 'W';

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">NavSat</h2>
      {/* Display error if there is an error */}
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          <p className="font-semibold">
            Latitude: <span className="font-normal">{latDegrees}° {latMinutes}' {latDirection}</span>
          </p>
          <p className="font-semibold">
            Longitude: <span className="font-normal">{lonDegrees}° {lonMinutes}' {lonDirection}</span>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NavSat;
