import React from 'react';
import './App.css';
import { Home } from './components/home-page';
import { AboutMe } from './components/about-me';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Skills } from './components/skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
