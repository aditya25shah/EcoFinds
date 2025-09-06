import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Sign/login.jsx';
import Dashboard from './Components/UserDashboard/Dashboard.jsx';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;
