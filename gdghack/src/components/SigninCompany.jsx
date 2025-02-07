import React, { useState } from "react";
function SigninCompany() {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        password: "",
        phone: "",
        industry: "",
        location: "",
        description: "",
        website: "",
        linkedin: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      
      };
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
    <h1 className="text-3xl font-bold text-center text-[#4C489E] mb-6">
      Company Sign-Up
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Company Name */}
      <div>
        <label className="block text-gray-700 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
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

      {/* Industry */}
      <div>
        <label className="block text-gray-700 font-medium">Industry</label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="E.g., Technology, Education, Finance"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          required
        />
      </div>

   

      {/* Location */}
      <div>
        <label className="block text-gray-700 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City, Country"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-medium">Company Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe your company"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
          required
        ></textarea>
      </div>

      {/* Website */}
      <div>
        <label className="block text-gray-700 font-medium">Website (Optional)</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Enter your company website URL"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className="block text-gray-700 font-medium">LinkedIn (Optional)</label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Enter your LinkedIn profile URL"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
        />
      </div>


      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#F3965C] text-white py-2 rounded-lg hover:bg-[#D97C42] transition"
        >
          Sign Up as a Company
        </button>
      </div>
    </form>
  </div>
  )
}

export default SigninCompany