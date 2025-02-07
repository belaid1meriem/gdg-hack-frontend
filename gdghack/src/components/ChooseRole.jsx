import React from 'react'
import { useState } from "react";
import { FaUserGraduate, FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const options = [
    { id: "student", text: "I'm a student, looking for an opportunity.", icon: <FaUserGraduate /> },
    { id: "company", text: "I'm a company, hiring talent", icon: <FaBuilding /> }
  ];

function ChooseRole() {
  const navigate = useNavigate(); 
    const [selected, setSelected] = useState("student");
    const handleSignIn = () => {
      if (selected === "student") {
        navigate("/Signupstudent"); // Navigate to the student sign-in page
      } else if (selected === "company") {
        navigate("/Signupcompany"); // Navigate to the company sign-in page
      }
    };
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4C489E]">Join us as a student or a company</h1>   
      <div className="flex gap-4 p-6 justify-center">
      {options.map(({ id, text, icon }) => (
        <div
          key={id}
          onClick={() => setSelected(id)}
          className={`flex flex-col items-start p-4 border rounded-lg cursor-pointer w-64 shadow-sm transition-all ${
            selected === id ? "border-black bg-gray-100" : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className={`w-2 h-2 border rounded-full flex items-center justify-center ${selected === id ? "border-[#F3965C]" : "border-gray-400"}`}>
              {selected === id && <div className="w-2 h-2 bg-[#F3965C] rounded-full"></div>}
            </div>
          </div>
          <p className="mt-2 text-lg">{text}</p>
        </div>
      ))}
    </div>
    <button onClick={handleSignIn} className="bg-[#ED9AC2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white  ">Sign Up</button>
    </div>
  )
}

export default ChooseRole