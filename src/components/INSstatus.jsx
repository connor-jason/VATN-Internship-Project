import React, { useState, useEffect } from 'react';

const INSstatus = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('ins');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://vatnsystems.com/INSstatus')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((newData) => {
          setData(newData);
          localStorage.setItem('ins', JSON.stringify(newData));
          setError(null);
        })
        .catch((err) => {
          console.error('Error fetching INSstatus data:', err);
          setError(err.message);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 1000); // 1 Hz

    return () => clearInterval(interval);
  }, []);

  const getStatus = (status) => ({
    color: status ? 'text-green-400' : 'text-red-400',
    icon: status ? '✔️' : '❌',
  });

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">INS Status</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="font-semibold">
                Aligned:{' '}
                <span className={getStatus(data.aligned).color}>
                  {getStatus(data.aligned).icon}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Position Valid:{' '}
                <span className={getStatus(data.pos_valid).color}>
                  {getStatus(data.pos_valid).icon}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Heading Valid:{' '}
                <span className={getStatus(data.heading_valid).color}>
                  {getStatus(data.heading_valid).icon}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                DVL Received:{' '}
                <span className={getStatus(data.dvl_recv).color}>
                  {getStatus(data.dvl_recv).icon}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                DVL Used:{' '}
                <span className={getStatus(data.dvl_used).color}>
                  {getStatus(data.dvl_used).icon}
                </span>
              </p>
            </div>
          </div>
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
