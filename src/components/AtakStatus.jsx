import React, { useState, useEffect } from 'react';

const AtakStatus = () => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('atak');
    return saved ? JSON.parse(saved) : { connected: true };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = {
          connected: Math.random() > 0.1,
        };
        localStorage.setItem('atak', JSON.stringify(newData));
        return newData;
      });
    }, 1000); // 1000 ms
    return () => clearInterval(interval);
  }, []);

  const statusColor = data.connected ? 'text-green-400' : 'text-red-400';
  const statusIcon = data.connected ? '✔️' : '❌';

  return (
    <div className="flex items-center">
      <span className="font-semibold text-white mr-2">Atak Status:</span>
      <span className={`text-2xl ${statusColor}`}>{statusIcon}</span>
    </div>
  );
};

export default AtakStatus;
