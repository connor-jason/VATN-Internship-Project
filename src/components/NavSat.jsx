import React from 'react';

const NavSat = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">NavSat</h2>
      <p>Latitude: {data.latitude.toFixed(6)}</p>
      <p>Longitude: {data.longitude.toFixed(6)}</p>
    </div>
  );
};

export default NavSat;
