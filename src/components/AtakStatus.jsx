import React from 'react';

const AtakStatus = ({ data }) => {
  const statusColor = data.connected ? 'text-green-500' : 'text-red-500';
  const statusIcon = data.connected ? '✔' : '❌';

  return (
    <div className="border p-4 m-2 flex items-center">
      <h2 className="text-xl font-bold mb-2 flex-1">Atak Status</h2>
      <span className={`text-2xl ${statusColor}`}>{statusIcon}</span>
    </div>
  );
};

export default AtakStatus;
