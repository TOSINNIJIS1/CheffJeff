import React, { useState, useEffect } from 'react';
import Navigation from './components/NavBar/Navigation';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Arts/Details/Details'


import './App.css';
// import Maintenance from './Maintenance';

import { MyContextApi } from './useContext/context';
import firebase from 'firebase';
// import axios from 'axios';

let db = firebase.database()

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null)
  

  // EDIT ALL INFO HERE
  let [ value, setValue ] = useState({})

  useEffect(() => {
      db.ref('about').on('value', snapshot => {
          if (snapshot.val() != null)
          setValue({
              ...snapshot.val()
          })
      })

  }, [])

  const data = Object.keys(value).map((id) => value[id])

  return (
    <div>
      {/* <Maintenance /> */}
    <Router>
      <MyContextApi.Provider value={data}>

      <Navigation value={value} />

      <div className="app" >

          <Routes>
            <Route exact path="/" element={<Home setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path='/details/:id' element={<Details  />} />

          </Routes>
      </div>

      <Footer />
      </MyContextApi.Provider>

    </Router>
    </div>
  );
}

export default App;
