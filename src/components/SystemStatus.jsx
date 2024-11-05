import React from 'react';

const SystemStatus = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">System Status</h2>
      <p>Autonomy State: {data.autonomy_state}</p>
      <p>Mission Loaded: {data.mission_loaded ? 'Yes' : 'No'}</p>
      <p>Mission Start: {data.mission_start ? 'Yes' : 'No'}</p>
      <p>Counting Down: {data.counting_down ? 'Yes' : 'No'}</p>
      <p>Awake: {data.awake ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default SystemStatus;
