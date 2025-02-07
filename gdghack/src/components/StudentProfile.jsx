import { useContext } from "react";
import React from 'react'
import Header from './Header'
import StudentHero from './StudentHero'
import StudentMenu from './StudentMenu'
import StudentAbout from './StudentAbout'
import { indicatorsContext } from "../contexts/indicatorContext";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";

function StudentProfile() {
  const { loading, setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  return (
    <div className='flex flex-col '>
        <Header/>
        <StudentHero/>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <StudentAbout/>
            <StudentMenu/>
        </div>
        { loading && <Loading/>}
        { errorMsg && <ErrorMsg msg={errorMsg} closeError={()=> setErrorMsg(null)} />}
    </div>
  )
}

export default StudentProfile