import React from 'react';

const AtakStatus = ({ data }) => {
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
