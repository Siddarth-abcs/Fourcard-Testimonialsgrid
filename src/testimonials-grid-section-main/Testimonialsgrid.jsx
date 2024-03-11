import React from 'react'
import '../App.css'

import Daniel from './images/image-daniel.jpg'
import Jonathan from './images/image-jonathan.jpg'
import Kira from './images/image-kira.jpg'
import Jeanette from './images/image-jeanette.jpg'
import Patrick from './images/image-patrick.jpg'

import Backgroud from './images/bg-pattern-quotation.svg'


export const Testimonialsgrid = () => {
  return (
      
    <div className='h-full Barlow lg:h-screen flex justify-center items-center bg-Light-grayish-blue'>
    <div className='my-8 grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 w-5/6 md:w-4/6 lg:w-5/6 m-auto'>
    {/* part1 */}
    <div className='bg-Moderateviolet text-White p-4 rounded-xl md:col-span-2 hero-pattern'>
      <div className='flex items-center mb-2'>
        <img src={Daniel} alt="" className='rounded-full mr-4 w-12' />
        <h2><span className='font-bold'>Daniel Clifford</span> <br /> Verified Graduate</h2>
      </div>
      <div>
        <h2 className='text-[1.15rem] font-bold my-2'>
        I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
        </h2>
        <p>
        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </div>
    </div>
    {/* part2 */}
    <div className='bg-Verydarkgrayish-blue text-White p-4 rounded-xl'>
    <div className='flex items-center mb-2'>
        <img src={Jonathan} alt="" className='rounded-full mr-4 w-12' />
        <h2><span className='font-bold'>Jonathan Walters</span> <br />Verified Graduate</h2>
      </div>
      <div>
        <h2 className='text-[1.15rem] font-bold my-2'>
        The team was very supportive and kept me motivated          
        </h2>
        <p>
        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”          
        </p>
      </div>
    </div>
    {/* part3 */}
    <div className='bg-White p-4 rounded-xl md:row-span-2'>
    <div className='flex items-center mb-2'>
        <img src={Kira} alt="" className='rounded-full mr-4 w-12' />
        <h2><span className='font-bold'>Kira Whittle</span> <br />Verified Graduate</h2>
      </div>
      <div>
        <h2 className='text-[1.15rem] font-bold my-2'>
        Such a life-changing experience. Highly recommended!          
        </h2>
        <p>
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”          
        </p>
      </div>
    </div>
    {/* part4 */}
    <div className='bg-White p-4 rounded-xl'>
    <div className='flex items-center mb-2'>
        <img src={Jeanette} alt="" className='rounded-full mr-4 w-12' />
        <h2><span className='font-bold'>Jeanette Harmon</span> <br />Verified Graduate</h2>
      </div>
      <div>
        <h2 className='text-[1.15rem] font-bold my-2'>
        An overall wonderful and rewarding experience          
        </h2>
        <p>
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”          
        </p>
      </div>
    </div>
    {/* part5 */}
    <div className='bg-Verydarkblackish-blue text-White p-4 rounded-xl md:col-span-2'>
    <div className='flex items-center mb-2'>
        <img src={Patrick} alt="" className='rounded-full mr-4 w-12' />
        <h2><span className='font-bold'>Patrick Abrams</span> <br />Verified Graduate</h2>
      </div>
      <div>
        <h2 className='text-[1.15rem] font-bold my-2'>
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.          
        </h2>
        <p>
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”          
        </p>
      </div>
    </div>
  </div>
    </div>
    
    )
}
