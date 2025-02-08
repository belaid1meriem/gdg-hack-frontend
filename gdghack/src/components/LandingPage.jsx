import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Whyus from './Whyus'
import HowItWorks from './HowItWorks'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HowItWorks/>
        <Whyus/>
      
        <Footer/>
    </div>
  )
}

export default LandingPage