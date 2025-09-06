import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Sign/login.jsx';
import Hero from './Components/HomePage/HomePage.jsx';
import Dashboard from './Components/UserDashboard/Dashboard.jsx';
import Homepage from './Components/HomePage/HomePage.jsx';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Hero/>
    </div>
  )
}

export default App;
