import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';  // Placeholder for your Dashboard
import Rocad from './rocad';  // Placeholder for your Rocad component
import Socar from './socar';  
import Roaao from './roaao';// Placeholder for your Socar component

function App() {
  return (
    <Router>
      <div className="flex h-screen">
       
        
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-blue-500 p-4 text-white">
            <h1 className="text-xl">Barangay Treasury Dashboard</h1>
          </header>
          
          {/* Content area */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/rocad" element={<Rocad />} />
              <Route path="/socar" element={<Socar />} />
              <Route path="/roaao" element={<Roaao />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
