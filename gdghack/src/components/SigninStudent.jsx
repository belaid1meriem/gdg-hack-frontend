
import React, { useState } from "react";
function SigninStudent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        university: "",
        major: "",
        year: "",
        skills: "",
        workType: "",
        linkedIn: "",
        aboutMe: "",
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === "file" ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
      };
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-[#4C489E] mb-6">
        Student Sign-Up
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          />
        </div>

        {/* University */}
        <div>
          <label className="block text-gray-700 font-medium">University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder="Enter your university name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

        {/* Major */}
        <div>
          <label className="block text-gray-700 font-medium">Major</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            placeholder="Enter your major/field of study"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

        {/* Year of Study */}
        <div>
          <label className="block text-gray-700 font-medium">Year of Study</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          >
            <option value="">Select your year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700 font-medium">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="E.g., Video editing, coding, writing"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          />
        </div>

     

      

        {/* LinkedIn */}
        <div>
          <label className="block text-gray-700 font-medium">
            LinkedIn Profile (Optional)
          </label>
          <input
            type="url"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            placeholder="Paste your LinkedIn URL"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          />
        </div>

        {/* About Me */}
        <div>
          <label className="block text-gray-700 font-medium">About Me</label>
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
            placeholder="Briefly introduce yourself"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#4C489E] text-white py-2 rounded-lg hover:bg-[#372F78] transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SigninStudent