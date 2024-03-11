import { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Fourcard } from './four-card-feature-section-master/Fourcard';
import { Testimonialsgrid } from './testimonials-grid-section-main/Testimonialsgrid';


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar />}/>
        <Route  path="/Fourcard" element={<Fourcard />}/>
        <Route  path="/Testimonialsgrid" element={<Testimonialsgrid />}/>

      </Routes>
      </BrowserRouter>
  )
}

export default App
