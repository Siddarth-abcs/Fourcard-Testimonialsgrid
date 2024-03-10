import React from 'react'
import '../App.css'

import Supervisor from './images/icon-supervisor.svg'
import   TeamBuilder from './images/icon-team-builder.svg'
import Karma from './images/icon-karma.svg'
import Calculator from './images/icon-calculator.svg'

export const Fourcard = () => {
  return (
    <div className='Poppins'>
        {/* part 1 Text */}
        <div className='text-center my-16'>
            <h1 className='text-2xl md:text-4xl my-6 md:my-8'>Reliable, efficient delivery <br />
            <span className='font-bold'>Powered by Technology</span>
            </h1>
            <p className='w-3/4 md:w-2/6 m-auto'>Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful</p>
        </div>

        {/* part 2 Boxes inside 4 part*/}
        <div className='m-auto w-5/6 flex flex-wrap justify-center'>
            {/* Supervisor */}
            <div className='h-60 md:h-64 md:w-[380px] mt-12 flex rounded-xl border-4 border-t-indigo-500 shadow-2xl md:translate-y-2/4 md:mr-8'>
            <div className='w-5/6 h-[80%] m-auto'>
            <h1 className='text-3xl font-bold'>Supervisor</h1>
                <p className='text-base my-4'>Monitors activity to identify project roadblocks</p>
                <img src={Supervisor} alt="" className='ml-auto' />
            </div>
            </div>
            {/* Team Builder */}
            <div className='h-60 md:h-64 md:w-[380px] mt-12 flex rounded-xl border-4 border-t-indigo-500 shadow-2xl'>
            <div className='w-5/6 h-[80%] m-auto'>
            <h1 className='text-3xl font-bold'>Team Builder</h1>
                <p className='text-base my-4'>Scans our talent network to create the optimal team for your project</p>
                <img src={TeamBuilder} alt="" className='ml-auto' />
            </div>
            </div>
            {/* Karma */}
            <div className='h-60 md:h-64 md:w-[380px] mt-12 flex rounded-xl border-4 border-t-indigo-500 shadow-2xl md:translate-y-2/4 md:ml-8'>
            <div className='w-5/6 h-[80%] m-auto'>
            <h1 className='text-3xl font-bold'>Karma</h1>
                <p className='text-base my-4'>Regularly evaluates our talent to ensure quality</p>
                <img src={Karma} alt="" className='ml-auto' />
            </div>
            </div>
            {/* Calculator */}
            <div className='h-60 md:h-64 md:w-[380px] mt-12 mb-16 flex rounded-xl border-4 border-t-indigo-500 shadow-2xl'>
            <div className='w-5/6 h-[80%] m-auto'>
            <h1 className='text-3xl font-bold'>Calculator</h1>
                <p className='text-base my-4'>Uses data from past projects to provide better delivery estimates</p>
                <img src={Calculator} alt="" className='ml-auto' />
            </div>
            </div>
        </div>
       

    </div>
  )
}
