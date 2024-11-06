import React, { useState, useEffect } from 'react';

const AtakStatus = () => {
  // Initialize state with data from localStorage or set to null if not available
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('atak');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  // Fetch data from server (this won't work without access to the backend), then store in state and local storage
  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/AtakStatus')
        .then((response) => {
          if (!response.ok) {
            // Throw an error for a non-200 response
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('atak', JSON.stringify(newData)); // Use localstorage for data persistence
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching AtakStatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 1000); // 1 Hz

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Display status icon and color based on connection status
  const statusColor = data.connected ? 'text-green-400' : 'text-red-400';
  const statusIcon = data.connected ? '✔️' : '❌';

  return (
    <div className="flex items-center">
      <span className="font-semibold mr-2">Atak Status:</span>
      {/* Display error if there is an error, else display the data */}
      {error ? (
        <span className="text-red-400">Error: {error}</span>
      ) : data ? (
        <span className={`text-2xl ${statusColor}`}>{statusIcon}</span>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AtakStatus;
