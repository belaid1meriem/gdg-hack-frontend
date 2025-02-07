import React from 'react'
import StudentInfo from './StudentInfo'
import StudentTeams from './StudentTeams'

function StudentAbout() {
  return (
    <div className='flex flex-col gap-8 pl-20'>
        <StudentInfo/>
        <StudentTeams/>
        <div>
            <h1 className='text-lg font-semibold '>About</h1>
            <p className='text-sm'>Kevin Krautgartner, born and raised in Germany, currently lives and works in Wuppertal.His design studies were based around digital photography, and this continues to provide the basis for his work today.Art can be found in both classical architecture as well as the natural world, and when viewed…</p>
        </div>
    </div>
  )
}

export default StudentAbout