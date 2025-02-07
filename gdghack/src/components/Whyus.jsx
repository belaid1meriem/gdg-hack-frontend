import React from 'react'
import Business from '../assets/Business.svg'

function Whyus() {
  return (
    <div className='w-full bg-white py-16 px-4 ' id='Whyus'>
         
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[400px] mx-auto my-4' src={Business} alt='/'/>
    
    <div className=' flex flex-col justify-center'>
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#4C489E]">Why us?</h1>
    <p  className="text-lg text-gray-700 leading-relaxed mt-4">StudentWorks empowers students to earn money and build career-ready skills at the same time. We offer flexible work opportunities, from short-term gigs to internships, designed to fit your busy life. With secure payments, portfolio-building opportunities, and a focus on your growth, we make it easy to turn your talents into success while gaining financial independence.</p>
    </div>
    </div>
    </div>
  )
}

export default Whyus