
import React, { useState } from "react";
function SigninStudent() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        university: "",
        major: "",
        year_studying: "",
        skills: [],
        bio: "",
        status: true,
      });
    

      const [skillInput, setSkillInput] = useState(""); 

      const addSkill = () => {
        if (skillInput.trim() !== "") {
          setFormData({
            ...formData,
            skills: [...formData.skills, skillInput.trim()], // Add the new skill to the array
          });
          setSkillInput(""); // Clear the input field
        }
      };
    
      const removeSkill = (index) => {
        setFormData({
          ...formData,
          skills: formData.skills.filter((_, i) => i !== index), // Remove the skill by index
        });
      };
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === "file" ? files[0] : value,
        });
      };

   
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch("http://127.0.0.1:7000/student/register/student/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            
            },
            body: JSON.stringify(formData),
          });
      
          const result = await response.json();
          localStorage.setItem("token", result.access);
            localStorage.setItem("user", JSON.stringify(result));
          if (response.ok) {
            alert("Company created successfully!");
            setFormData({
              fullname: "",
              email: "",
              password: "",
              phone: "",
              university: "",
              major: "",
              year_studying: "",
              skills: [],
              bio: "",
              status: true,
            });
          } else {
            alert(`Error: ${result.message}`);
          }
        } catch (error) {
          console.error("Error creating company:", error);
          alert("An error occurred. Please try again.");
        }
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
            name="fullname"
            value={formData.fullname}
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
            name="year_studying"
            value={formData. year_studying}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            required
          >
            <option value="">Select your year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
            <option value="5th">5th Year</option>
          </select>
        </div>

        
          {/* Skills */}
          <div>
          <label className="block text-gray-700 font-medium">Skills</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Enter a skill"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
            />
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-[#4C489E] text-white rounded-lg hover:bg-[#372F78] transition"
            >
              Add
            </button>
          </div>
          <ul className="mt-2">
            {formData.skills.map((skill, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-gray-700">{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

     

      

       
        {/* About Me */}
        <div>
          <label className="block text-gray-700 font-medium">About Me</label>
          <textarea
            name="bio"
            value={formData.bio}
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