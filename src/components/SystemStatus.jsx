import React from 'react';

const SystemStatus = ({ data }) => {
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
