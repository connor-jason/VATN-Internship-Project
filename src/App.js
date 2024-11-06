import React, { useState, useEffect } from 'react';
import VehicleOdom from './components/VehicleOdom';
import NavSat from './components/NavSat';
import INSstatus from './components/INSstatus';
import SystemStatus from './components/SystemStatus';
import AtakStatus from './components/AtakStatus';

function App() {

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="py-4 relative">
        <div className="container mx-auto relative">

          {/* Title centered in the header */}
          <h1 className="text-2xl font-bold text-white text-center pt-2">
            Autonomous Vessel System Dashboard
          </h1>
        </div>

        {/* Atak Status centered below the header */}
        <div className="container mx-auto flex justify-center mt-2">
          <AtakStatus />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Grid layout for the main components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VehicleOdom />
          <INSstatus />
          <NavSat />
          <SystemStatus />
        </div>
      </div>
      {/* Footer Section */}
      <footer className="text-center p-4">
        <p>&copy; 2024 VATN Systems</p>
      </footer>
    </div>
  );
}

export default App;
