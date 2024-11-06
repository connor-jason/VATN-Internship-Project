import React, { useState, useEffect } from 'react';

const SystemStatus = () => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('sysstat');
    return saved
      ? JSON.parse(saved)
      : {
          autonomy_state: 2,
          mission_loaded: true,
          mission_start: false,
          counting_down: false,
          awake: true,
        };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = {
          ...prev,
          autonomy_state: (prev.autonomy_state + 1) % 5,
          mission_loaded: Math.random() > 0.05,
          mission_start: Math.random() > 0.5,
          counting_down: Math.random() > 0.7,
          awake: Math.random() > 0.05,
        };
        localStorage.setItem('sysstat', JSON.stringify(newData));
        return newData;
      });
    }, 500); // 500 ms
    return () => clearInterval(interval);
  }, []);

  const getStatus = (status) => ({
    color: status ? 'text-green-500' : 'text-red-500',
    icon: status ? '✔' : '❌',
  });

  const autonomyStates = {
    0: 'Idle',
    1: 'Active',
    2: 'Paused',
    3: 'Error',
    4: 'Completed',
  };

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">System Status</h2>
      <p>
        Autonomy State:{' '}
        <span className="font-semibold">
          {autonomyStates[data.autonomy_state]}
        </span>
      </p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div>
          <p>
            Mission Loaded:{' '}
            <span className={getStatus(data.mission_loaded).color}>
              {getStatus(data.mission_loaded).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            Mission Start:{' '}
            <span className={getStatus(data.mission_start).color}>
              {getStatus(data.mission_start).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            Counting Down:{' '}
            <span className={getStatus(data.counting_down).color}>
              {getStatus(data.counting_down).icon}
            </span>
          </p>
        </div>
        <div>
          <p>
            Awake:{' '}
            <span className={getStatus(data.awake).color}>
              {getStatus(data.awake).icon}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
