import React, { useState } from 'react';
import VehicleOdom from './components/VehicleOdom';
import AtakStatus from './components/AtakStatus';
import NavSat from './components/NavSat';
import INSstatus from './components/INSstatus';
import SystemStatus from './components/SystemStatus';

function App() {
  // Initial data
  const initialVehicleOdom = {
    northing: 10.0,
    easting: 655432.21635,
    zone: [19, 'T'],
    depth: 15.0,
    heading: 59.5,
    pitch: 0.5,
    roll: 0.32,
  };

  const initialAtakStatus = {
    connected: true,
  };

  const initialNavSat = {
    latitude: 54.211324,
    longitude: 45.324341,
  };

  const initialINSstatus = {
    aligned: true,
    pos_valid: false,
    heading_valid: true,
    dvl_recv: true,
    dvl_used: false,
    lat_accuracy: 456.654,
    lon_accuracy: 854645.646,
  };

  const initialSystemStatus = {
    autonomy_state: 2,
    mission_loaded: true,
    mission_start: false,
    counting_down: false,
    awake: true,
  };

  // Use state hooks
  const [odom] = useState(initialVehicleOdom);
  const [atak] = useState(initialAtakStatus);
  const [gps] = useState(initialNavSat);
  const [ins] = useState(initialINSstatus);
  const [sysstat] = useState(initialSystemStatus);

  return (
    <div className="container mx-auto p-4 bg-darkGray">
      <h1 className="text-2xl font-bold mb-4">
        Vessel Autonomy System Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SystemStatus data={sysstat} />
        <NavSat data={gps} />
        <INSstatus data={ins} />
        <VehicleOdom data={odom} />
        <AtakStatus data={atak} />
      </div>
    </div>
  );
}

export default App;
