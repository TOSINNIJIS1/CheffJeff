import React from 'react';
import Navigation from './components/NavBar/Navigation';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <div>
    <Router>
      <Navigation selectedImg={selectedImg} />
      
      <div className="app" >
        <Routes>
          <Route exact path="/" element={<Home selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
