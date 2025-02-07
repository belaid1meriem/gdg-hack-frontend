import React from 'react'
import laptop from '../assets/laptop.svg'
import money from '../assets/money.svg'
import profile from '../assets/profile.svg'

function HowItWorks() {
  return (
   
    <div className='w-full py-16 text-black' id='Howitworks'>
        <div className='h-24'>
        <h1 className='text-3xl font-bold text-[#4C489E]'>How it works?</h1>
        </div>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div>
<img className='w-[50px] mx-auto my-4' src={profile} alt='/'/>
           <h1 className='text-xl font-bold text-[#4C489E]' >Sign Up</h1> 
           <p  className="text-lg text-gray-700 leading-relaxed mt-4">Create your profile and tell us your skills</p>
        </div>
        <div>
         <img className='w-[50px] mx-auto my-4' src={laptop} alt='/'/>
           <h1 className='text-xl font-bold text-[#4C489E]'>Start Earning</h1> 
           <p  className="text-lg text-gray-700 leading-relaxed mt-4">Find gigs or internships that match your goals</p>
        </div>
        <div>
<img className='w-[50px] mx-auto my-4' src={money} alt='/'/>
           <h1 className='text-xl font-bold text-[#4C489E]'>Get Paid</h1> 
           <p  className="text-lg text-gray-700 leading-relaxed mt-4">Secure payments and grow your career</p>
        </div>
        </div>
    </div>
  )
}

export default HowItWorks