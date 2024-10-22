import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from 'components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

// Check if the user is authenticated by checking the token in localStorage
const isAuthenticated = () => !!localStorage.getItem('token');

// Higher-order component to protect private routes
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route path="/posts" element={<PrivateRoute><Posts /></PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
