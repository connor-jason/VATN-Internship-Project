import React from 'react';

const INSstatus = ({ data }) => {
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
