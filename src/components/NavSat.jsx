import React from 'react';

const NavSat = ({ data }) => {
  const latitude = data.latitude;
  const longitude = data.longitude;

  const latDegrees = Math.abs(Math.floor(latitude));
  const latMinutes = Math.abs(((latitude % 1) * 60).toFixed(3));
  const latDirection = latitude >= 0 ? 'N' : 'S';

  const lonDegrees = Math.abs(Math.floor(longitude));
  const lonMinutes = Math.abs(((longitude % 1) * 60).toFixed(3));
  const lonDirection = longitude >= 0 ? 'E' : 'W';

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">NavSat</h2>
      <p>
        Latitude: {latDegrees}° {latMinutes}' {latDirection}
      </p>
      <p>
        Longitude: {lonDegrees}° {lonMinutes}' {lonDirection}
      </p>
    </div>
  );
};

export default NavSat;
