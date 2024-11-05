import React from 'react';

const NavSat = ({ data }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">NavSat</h2>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
    </div>
  );
};

export default NavSat;
