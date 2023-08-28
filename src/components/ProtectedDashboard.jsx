import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedDashboard = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  return (
    <div className="dashboard">
      <h2>Welcome to the Protected Dashboard!</h2>
      {/* Protected dashboard content goes here */}
    </div>
  );
};

export default ProtectedDashboard;
