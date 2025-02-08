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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center w-full max-w-4xl">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#4C489E] mb-12">Join us as a student or a company</h1>
  
      {/* Options */}
      <div className="flex flex-col lg:flex-row gap-16 justify-center mb-16">
        {options.map(({ id, text, icon }) => (
          <div
            key={id}
            onClick={() => setSelected(id)}
            className={`flex flex-col items-start p-8 border rounded-lg cursor-pointer w-80 h-48 transition-all ${
              selected === id ? "border-black bg-gray-100" : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              {icon}
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  selected === id ? "border-[#F3965C]" : "border-gray-400"
                }`}
              >
                {selected === id && <div className="w-3 h-3 bg-[#F3965C] rounded-full"></div>}
              </div>
            </div>
            <p className="mt-6 text-xl">{text}</p>
          </div>
        ))}
      </div>
  
      {/* Button */}
      <button
        onClick={handleSignIn}
        className="bg-[#ED9AC2] w-[220px] rounded-md font-medium py-4 text-white text-lg hover:bg-[#E082B5] transition"
      >
        Sign Up
      </button>
    </div>
  </div>
  
  
  )
}

export default ChooseRole