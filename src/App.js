import React from 'react';
import Navigation from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Navigation />
      
      <div className="app" >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
