import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ProtectedDashboard from './components/ProtectedDashboard';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
     
      </Routes>
        <Route
          path="/"
          element={
            <div>
              <Signup handleLogin={handleLogin} />
              {/* <Login handleLogin={handleLogin} /> */}
            </div>
          }
        />
        <Route
          path="/dashboard"
          // element={<ProtectedDashboard isAuthenticated={isAuthenticated} />}
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
