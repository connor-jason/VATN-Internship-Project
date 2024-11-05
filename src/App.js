import React from 'react';
import VehicleOdom from './components/VehicleOdom';
import NavSat from './components/NavSat';
import INSstatus from './components/INSstatus';
import SystemStatus from './components/SystemStatus';
import AtakStatus from './components/AtakStatus';

function App() {
  return (
    <div>
      <VehicleOdom />
      <NavSat />
      <INSstatus />
      <SystemStatus />
      <AtakStatus />
    </div>
  );
}

export default App;
