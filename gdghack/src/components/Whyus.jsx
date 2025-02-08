import React from 'react'
import Business from '../assets/Business.svg'

function Whyus() {
  return (
    <div className="w-full bg-white py-32 px-4" id="Whyus">
    <div className="flex flex-col justify-center items-center text-center space-y-4">
      {/* Animated Heading */}
      <h1
        className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#4C489E] animate-fade-in-down"
      >
        Why Us?
      </h1>
  
      {/* Animated Paragraph */}
      <p
        className="text-lg text-gray-700 leading-relaxed mt-4 max-w-2xl animate-fade-in-up"
      >
        StudentWorks empowers students to earn money and build career-ready skills at the same time. 
        We offer flexible work opportunities, from short-term gigs to internships, designed to fit your busy life. 
        With secure payments, portfolio-building opportunities, and a focus on your growth, we make it easy to turn 
        your talents into success while gaining financial independence.
      </p>
    </div>
  </div>
  
    
  )
}

export default Whyus