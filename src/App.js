import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {Navbar } from './Components/Navbar/Navbar';
import './App.css';
import About from './Components/About/About';
import Course from './Components/Course/Course';
import JEE  from "./Components/CourseType/JEE"
import Neet  from "./Components/CourseType/Neet"
import Smart  from "./Components/CourseType/Smart"
import Contact from './Components/Contact/Contact';

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
  
      </Router>
      </div>
  );
}

export default App;
