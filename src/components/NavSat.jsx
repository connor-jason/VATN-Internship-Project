import React, { useState, useEffect } from 'react';

const NavSat = () => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('gps');
    return saved
      ? JSON.parse(saved)
      : {
          latitude: 54.211324,
          longitude: 45.324341,
        };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = {
          latitude: prev.latitude + (Math.random() * 0.0001 - 0.00005),
          longitude: prev.longitude + (Math.random() * 0.0001 - 0.00005),
        };
        localStorage.setItem('gps', JSON.stringify(newData));
        return newData;
      });
    }, 200); // 200 ms
    return () => clearInterval(interval);
  }, []);

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
      <h2 className="text-xl font-bold mb-4">NavSat</h2>
      <p className="font-semibold">
        Latitude: <span className="font-normal">{latDegrees}° {latMinutes}' {latDirection}</span>
      </p>
      <p className="font-semibold">
        Longitude: <span className="font-normal">{lonDegrees}° {lonMinutes}' {lonDirection}</span>
      </p>
    </div>
  );
};

export default NavSat;
