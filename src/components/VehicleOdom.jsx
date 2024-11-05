import React from 'react';

const VehicleOdom = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">Vehicle Odom</h2>
      <p>Northing: {data.northing}</p>
      <p>Easting: {data.easting}</p>
      <p>
        Zone: {data.zone[0]}
        {data.zone[1]}
      </p>
      <p>Depth: {data.depth}</p>
      <p>Heading: {data.heading}</p>
      <p>Pitch: {data.pitch}</p>
      <p>Roll: {data.roll}</p>
    </div>
  );
};

export default VehicleOdom;
