import React, { useState, useEffect } from 'react';

const INSstatus = () => {
  // Initialize state with data from localStorage or set to null if not available
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('ins');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  // Fetch data from server (this won't work without access to the backend), then store in state and local storage
  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/INSstatus')
        .then((response) => {
          if (!response.ok) {
            // Throw an error for a non-200 response
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('ins', JSON.stringify(newData)); // Use localstorage for data persistence
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching INSstatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 1000); // 1 Hz

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Display status icon and color based on connection status
  const getStatus = (status) => ({
    color: status ? 'text-green-400' : 'text-red-400',
    icon: status ? '✔️' : '❌',
  });

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">INS Status</h2>
      {/* Display error if there is an error, else display the data */}
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
        {/* Display INS status data */}
          <div className="grid grid-cols-2 gap-2">
            {/* Alignment */}
            <div>
              <p className="font-semibold">
                Aligned:{' '}
                <span className={getStatus(data.aligned).color}>
                  {getStatus(data.aligned).icon}
                </span>
              </p>
            </div>
            {/* Position Valid */}
            <div>
              <p className="font-semibold">
                Position Valid:{' '}
                <span className={getStatus(data.pos_valid).color}>
                  {getStatus(data.pos_valid).icon}
                </span>
              </p>
            </div>
            {/* Heading Valid */}
            <div>
              <p className="font-semibold">
                Heading Valid:{' '}
                <span className={getStatus(data.heading_valid).color}>
                  {getStatus(data.heading_valid).icon}
                </span>
              </p>
            </div>
            {/* DVL Received */}
            <div>
              <p className="font-semibold">
                DVL Received:{' '}
                <span className={getStatus(data.dvl_recv).color}>
                  {getStatus(data.dvl_recv).icon}
                </span>
              </p>
            </div>
            {/* DVL Used */}
            <div>
              <p className="font-semibold">
                DVL Used:{' '}
                <span className={getStatus(data.dvl_used).color}>
                  {getStatus(data.dvl_used).icon}
                </span>
              </p>
            </div>
          </div>
          {/* Latitude and Longitude */}
          <div className="mt-4">
            <p className="font-semibold">Latitude Accuracy: <span className="font-normal">{data.lat_accuracy.toFixed(3)}</span></p>
            <p className="font-semibold">Longitude Accuracy: <span className="font-normal">{data.lon_accuracy.toFixed(3)}</span></p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default INSstatus;
