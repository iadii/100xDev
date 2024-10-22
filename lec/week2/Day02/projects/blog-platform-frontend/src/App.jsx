import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from 'components/Login.jsx';
import Signup from './components/Signup';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
