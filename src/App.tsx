import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/home-page';
import { AboutMe } from './components/about-me';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
