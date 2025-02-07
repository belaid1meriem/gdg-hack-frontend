import { RiPhoneFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
import React from "react";

function StudentInfo({studentInfo}) {

  return (
    <div className='flex flex-col gap-4 ' >
      <h1 className='text-xl font-semibold '> {studentInfo.name || 'Bouchra Bachferrag'} </h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2  items-center">
          <RiPhoneFill/>
          <h3 className='font-semibold text-sm'> {studentInfo.phone} </h3>
        </div>
        <div className="flex gap-2  items-center">
          <IoMdMail/>
          <h3 className='font-semibold text-sm'> {studentInfo.email} </h3>
        </div>
        <div className="flex gap-2  items-center">
          <FaBuilding/>
          <h3 className='font-semibold text-sm'> {studentInfo.university} </h3>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo



