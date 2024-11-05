import React from 'react';

const VehicleOdom = ({ data }) => {
  // Calculate rotation for heading arrow
  const headingRotation = data.heading;

  // Scale pitch and roll values for bar widths (assuming max of ±90 degrees)
  const pitchPercentage = ((data.pitch + 90) / 180) * 100;
  const rollPercentage = ((data.roll + 90) / 180) * 100;

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold mb-2">Vehicle Odom</h2>
      <div className="flex items-center">
        {/* Heading Arrow */}
        <div
          className="w-12 h-12 border rounded-full flex items-center justify-center"
          style={{ transform: `rotate(${headingRotation}deg)` }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-blue-500"
          >
            <path d="M12 2L15 8H9L12 2Z" />
            <path d="M12 22V8" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <p className="ml-4">Heading: {data.heading.toFixed(1)}°</p>
      </div>

      {/* Pitch Indicator */}
      <div className="mt-2">
        <p>Pitch: {data.pitch.toFixed(1)}°</p>
        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-green-500 h-2"
            style={{ width: `${pitchPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Roll Indicator */}
      <div className="mt-2">
        <p>Roll: {data.roll.toFixed(1)}°</p>
        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-blue-500 h-2"
            style={{ width: `${rollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Depth Display */}
      <div className="mt-2">
        <p>Depth: {data.depth.toFixed(1)} m</p>
        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-indigo-500 h-2"
            style={{ width: `${(data.depth / 100) * 100}%` }} // Assuming max depth of 100m
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VehicleOdom;
