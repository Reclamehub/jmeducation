import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import {Navbar } from '../Navbar/Navbar';
import './App.css';
import About from '../About/About';
import Course from '../Course/Course';
import JEE  from "./JEE"
import Neet  from "./Neet"
import Smart  from "./Smart"
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
<Router>
  <Navbar/>
  <Routes>
  <Route path="*" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/course" element={<Course />} />
  <Route path="/JEE" element={<JEE />} />
  <Route path="/Neet" element={<Neet />} />
  <Route path="/Smart" element={<Smart />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
<Footer/>
      </Router>
  
      </div>
  );
}

export default App;
