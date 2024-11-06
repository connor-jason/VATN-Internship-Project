import React, { useState, useEffect } from 'react';

const INSstatus = () => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('ins');
    return saved
      ? JSON.parse(saved)
      : {
          aligned: true,
          pos_valid: false,
          heading_valid: true,
          dvl_recv: true,
          dvl_used: false,
          lat_accuracy: 456.654,
          lon_accuracy: 854645.646,
        };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = {
          ...prev,
          aligned: Math.random() > 0.1,
          pos_valid: Math.random() > 0.1,
          heading_valid: Math.random() > 0.1,
          dvl_recv: Math.random() > 0.1,
          dvl_used: Math.random() > 0.5,
          lat_accuracy: prev.lat_accuracy + Math.random() * 10 - 5,
          lon_accuracy: prev.lon_accuracy + Math.random() * 10 - 5,
        };
        localStorage.setItem('ins', JSON.stringify(newData));
        return newData;
      });
    }, 1000); // 1000 ms
    return () => clearInterval(interval);
  }, []);

  const getStatus = (status) => ({
    color: status ? 'text-green-500' : 'text-red-500',
    icon: status ? '✔' : '❌',
  });

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">INS Status</h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p>
            Aligned:{' '}
            <span className={getStatus(data.aligned).color}>
              {getStatus(data.aligned).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            Position Valid:{' '}
            <span className={getStatus(data.pos_valid).color}>
              {getStatus(data.pos_valid).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            Heading Valid:{' '}
            <span className={getStatus(data.heading_valid).color}>
              {getStatus(data.heading_valid).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            DVL Received:{' '}
            <span className={getStatus(data.dvl_recv).color}>
              {getStatus(data.dvl_recv).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            DVL Used:{' '}
            <span className={getStatus(data.dvl_used).color}>
              {getStatus(data.dvl_used).icon}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p>Latitude Accuracy: {data.lat_accuracy.toFixed(3)}</p>
        <p>Longitude Accuracy: {data.lon_accuracy.toFixed(3)}</p>
      </div>
    </div>
  );
};

export default INSstatus;
