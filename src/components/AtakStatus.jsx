import React from 'react';

const AtakStatus = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">Atak Status</h2>
      <p>Connected: {data.connected ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default AtakStatus;
