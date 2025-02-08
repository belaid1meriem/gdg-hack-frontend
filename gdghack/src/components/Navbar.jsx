
import React from "react"
function Navbar() {
  return (
    <div className=' flex items-center  justify-between max-w-[2000px] mx-auto px-6 text-black'>
       <h1 className="text-3xl font-bold">
  <span className="text-[#4C489E]">Student</span>
  <span className="text-[#F3965C]">Works</span>
</h1>

        <ul className='flex  space-x-8 whitespace-nowrap'>
            <li className='p-6'><a href="#Hero">Home</a></li> 
            <li className='p-6'><a href="#Whyus">Why us</a></li>
            <li className='p-6'><a href="#Howitworks">How it works</a></li>
            <li className='p-6'><a href="#Contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar