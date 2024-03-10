import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
// import { Fourcard } from './four-card-feature-section-master/Fourcard';
import { Testimonialsgrid } from './testimonials-grid-section-main/Testimonialsgrid';


function App() {

  return (
      <Router>
        {/* <Fourcard/> */}
        <Testimonialsgrid/>
      </Router>
  )
}

export default App
