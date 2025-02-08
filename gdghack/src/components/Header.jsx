import React from 'react'
import { ImSearch } from "react-icons/im";
import pic from "../assets/userpic.jpg"
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const navigateToProfile = ()=>{
    console.log(localStorage.getItem("entrepriseID"))
    if(localStorage.getItem("entrepriseID")) {
      navigate("/company/"+localStorage.getItem("entrepriseID")+"/jobs");
    } 
    else {
      navigate("/student/"+localStorage.getItem("studentID")+"/projects");
    }
  }

  const navigateToRecherche = ()=>{
    if(localStorage.getItem("entrepriseID")) {
      navigate("/Searchcompany");
    } 
    else {
      navigate("/Searchstudent");
    }
  }

  return (
    <div className='flex items-center justify-between px-6 py-4'>
        <h1 className="text-3xl font-bold ">
            <span className="text-[#4C489E]">Student</span>
            <span className="text-[#F3965C]">Works</span>
        </h1>
        <div className='flex items-center justify-center gap-6 '>
         <ImSearch className='text-lg  cursor-pointer' onClick={navigateToRecherche} />
         <img src={pic} alt="user pic" className='w-12 h-12 rounded-full cursor-pointer' onClick={navigateToProfile}  />
        </div>
        
    </div>
  )
}

export default Header