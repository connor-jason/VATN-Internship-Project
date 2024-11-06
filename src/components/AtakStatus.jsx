import React, { useState, useEffect } from 'react';

const AtakStatus = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('atak');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/AtakStatus')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('atak', JSON.stringify(newData));
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching AtakStatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 1000); // 1 Hz

    return () => clearInterval(interval);
  }, []);

  const statusColor = data.connected ? 'text-green-400' : 'text-red-400';
  const statusIcon = data.connected ? '✔️' : '❌';

  return (
      <div className="flex items-center">
        <span className="font-semibold mr-2">Atak Status:</span>
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
