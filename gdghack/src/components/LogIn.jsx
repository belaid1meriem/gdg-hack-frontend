import React, { useState } from "react";
import Business from '../assets/Business.svg'
function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent page refresh
  
      const data = { email, password };
      console.log(data)
    }
  return (
    <div className="flex h-screen bg-green-900">
      {/* Left Section - Login Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome back </h1>
        <p className="text-gray-600 mb-8">Please enter your details.</p>

        {/* Login Form */}
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind input to state
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E] placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind input to state
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E] placeholder-gray-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#F3965C] text-white py-3 rounded-lg hover:bg-[#e2874e] transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-[#4C489E] font-semibold">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 bg-[#F5F5F5] hidden lg:flex justify-center items-center">
        <img
          src={Business}
          alt="/"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default LogIn