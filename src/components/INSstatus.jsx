import React from 'react';

const INSstatus = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">INS Status</h2>
      <p>Aligned: {data.aligned ? 'Yes' : 'No'}</p>
      <p>Position Valid: {data.pos_valid ? 'Yes' : 'No'}</p>
      <p>Heading Valid: {data.heading_valid ? 'Yes' : 'No'}</p>
      <p>DVL Received: {data.dvl_recv ? 'Yes' : 'No'}</p>
      <p>DVL Used: {data.dvl_used ? 'Yes' : 'No'}</p>
      <p>Latitude Accuracy: {data.lat_accuracy}</p>
      <p>Longitude Accuracy: {data.lon_accuracy}</p>
    </div>
  );
};

export default INSstatus;
