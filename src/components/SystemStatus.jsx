import React, { useState, useEffect } from 'react';

const SystemStatus = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('sysstat');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/SystemStatus')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('sysstat', JSON.stringify(newData));
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching SystemStatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 500); // 2 Hz

    return () => clearInterval(interval);
  }, []);

  const autonomyStates = {
    0: 'Idle',
    1: 'Active',
    2: 'Paused',
    3: 'Error',
    4: 'Completed',
  };

  const getStatus = (status) => ({
    color: status ? 'text-green-400' : 'text-red-400',
    icon: status ? '✔️' : '❌',
  });

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">System Status</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          <p className="font-semibold">
          Autonomy State:{' '}
          <span className="font-normal">
            {autonomyStates[data.autonomy_state]}
          </span>
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <p className="font-semibold">
              Mission Loaded:{' '}           
              <span className={getStatus(data.mission_loaded).color}>
                {getStatus(data.mission_loaded).icon}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Mission Start:{' '}
              <span className={getStatus(data.mission_start).color}>
                {getStatus(data.mission_start).icon}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Counting Down:{' '}
              <span className={getStatus(data.counting_down).color}>
                {getStatus(data.counting_down).icon}
              </span>
            </p>
          </div>
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
