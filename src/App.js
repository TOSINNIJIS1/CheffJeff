import React from 'react';
import Navigation from './components/NavBar/Navigation';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Arts/Details/Details'


import './App.css';
import Maintenance from './Maintenance';

function App() {
  const [selectedImg, setSelectedImg] = React.useState(null);


  return (
    <div>
      {/* <Maintenance /> */}
    <Router>
      <Navigation />

      <div className="app" >
        <Routes>
          <Route exact path="/" element={<Home selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path='/details/:id' element={<Details  />} />

        </Routes>
      </div>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
