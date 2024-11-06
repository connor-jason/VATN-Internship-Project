import React, { useState, useEffect } from 'react';

const SystemStatus = () => {
  // Initialize state with data from localStorage or set to null if not available
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('sysstat');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  // Fetch data from server (this won't work without access to the backend), then store in state and local storage
  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/SystemStatus')
        .then((response) => {
          if (!response.ok) {
            // Throw an error for a non-200 response
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('sysstat', JSON.stringify(newData)); // Use localstorage for data persistence
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching SystemStatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 500); // 2 Hz

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Autonomy States that may or may not exist (need to read VATN documentation)
  const autonomyStates = {
    0: 'Idle',
    1: 'Active',
    2: 'Paused',
    3: 'Error',
    4: 'Completed',
  };

  // Display status icon and color based on connection status
  const getStatus = (status) => ({
    color: status ? 'text-green-400' : 'text-red-400',
    icon: status ? '✔️' : '❌',
  });

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">System Status</h2>
      {/* Display error if there is an error */}
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
        {/* Display system status data */}
          <p className="font-semibold">
          Autonomy State:{' '}
          <span className="font-normal">
            {autonomyStates[data.autonomy_state]}
          </span>
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {/* Mission Loaded */}
          <div>
            <p className="font-semibold">
              Mission Loaded:{' '}           
              <span className={getStatus(data.mission_loaded).color}>
                {getStatus(data.mission_loaded).icon}
              </span>
            </p>
          </div>
          {/* Mission Start */}
          <div>
            <p className="font-semibold">
              Mission Start:{' '}
              <span className={getStatus(data.mission_start).color}>
                {getStatus(data.mission_start).icon}
              </span>
            </p>
          </div>
          {/* Counting Down */}
          <div>
            <p className="font-semibold">
              Counting Down:{' '}
              <span className={getStatus(data.counting_down).color}>
                {getStatus(data.counting_down).icon}
              </span>
            </p>
          </div>
          {/* Awake */}
          <div>
            <p className="font-semibold">
              Awake:{' '}
              <span className={getStatus(data.awake).color}>
                {getStatus(data.awake).icon}
              </span>
            </p>
          </div>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SystemStatus;
