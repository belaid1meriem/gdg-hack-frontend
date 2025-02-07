import React from 'react'
import Header from './Header'
import StudentHero from './StudentHero'
import StudentMenu from './StudentMenu'
import StudentAbout from './StudentAbout'

function StudentProfile() {
  return (
    <div className='flex flex-col '>
        <Header/>
        <StudentHero/>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <StudentAbout/>
            <StudentMenu/>
        </div>
        
    </div>
  )
}

export default StudentProfile