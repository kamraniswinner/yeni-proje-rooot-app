import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.owner.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;