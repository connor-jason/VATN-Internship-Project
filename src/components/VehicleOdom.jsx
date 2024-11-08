import React, { useState, useEffect } from 'react';

const VehicleOdom = () => {
  // Initialize state with data from localStorage or set to null if not available
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('odom');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  // Fetch data from server (this won't work without access to the backend), then store in state and local storage
  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/VehicleOdom')
        .then((response) => {
          if (!response.ok) {
            // Throw an error for a non-200 response
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('odom', JSON.stringify(newData)); // Use localstorage for data persistence
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching VehicleOdom data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 200); // 5 Hz

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

    // Calculations for visual elements
    const headingRotation = data.heading;
    const pitchPercentage = ((data.pitch + 90) / 180) * 100;
    const rollPercentage = ((data.roll + 90) / 180) * 100;

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-4">Vehicle Odom</h2>
      {/* Display error if there is an error */}
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          {/* Zone, Northing, Easting */}
          <div className="mb-4">
            <p>
              <span className="font-semibold">Zone:</span> {data.zone[0]}
              {data.zone[1]}
            </p>
            <p>
              <span className="font-semibold">Northing:</span> {data.northing.toFixed(2)}
            </p>
            <p>
              <span className="font-semibold">Easting:</span> {data.easting.toFixed(2)}
            </p>
          </div>

          {/* Heading Visualization */}
          <div className="flex items-center mb-4">
            {/* Heading Arrow */}
            <div
              className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center"
              style={{ transform: `rotate(${headingRotation}deg)` }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-400"
              >
                <path d="M12 2L15 8H9L12 2Z" />
                <path d="M12 22V8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="ml-4">
              <span className="font-semibold">Heading:</span> {data.heading.toFixed(1)}°
            </p>
          </div>

          {/* Pitch Indicator */}
          <div className="mb-4">
            <p>
              <span className="font-semibold">Pitch:</span> {data.pitch.toFixed(1)}°
            </p>
            <div className="w-full bg-gray-600 h-2 rounded">
              <div
                className="bg-green-400 h-2 rounded"
                style={{ width: `${pitchPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Roll Indicator */}
          <div className="mb-4">
            <p>
              <span className="font-semibold">Roll:</span> {data.roll.toFixed(1)}°
            </p>
            <div className="w-full bg-gray-600 h-2 rounded">
              <div
                className="bg-blue-400 h-2 rounded"
                style={{ width: `${rollPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Depth Display */}
          <div>
            <p>
              <span className="font-semibold">Depth:</span> {data.depth.toFixed(1)} m
            </p>
            <div className="w-full bg-gray-600 h-2 rounded">
              <div
                className="bg-indigo-400 h-2 rounded"
                style={{ width: `${(data.depth / 100) * 100}%` }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VehicleOdom;