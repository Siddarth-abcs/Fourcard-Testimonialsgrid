import React from 'react'
import { Link, Router } from 'react-router-dom'
import { Testimonialsgrid } from '../testimonials-grid-section-main/Testimonialsgrid'
import { Fourcard } from '../four-card-feature-section-master/Fourcard'

export const Navbar = () => {
  return (
      <header>
        <div className='h-screen w-6/6 bg-yellow-600 flex'>
        <div className='m-auto'>
        <Link className='font-bold p-10 bg-white m-12 hover:bg-Blue rounded-xl text-2xl' to="/Fourcard">Fourcard</Link> 
        <Link className='font-bold p-10 bg-white m-12 hover:bg-Blue rounded-xl text-2xl' to="/Testimonialsgrid">Testimonialsgrid</Link>  
        </div>
        </div> 
      </header>
  )
}
