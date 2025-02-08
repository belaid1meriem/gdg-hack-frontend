import React, { useState } from "react";
function SigninCompany() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        industry: "",
        location: "",
        description: "",
        web_site: "",
        role: "enterprise",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch("http://127.0.0.1:7000/student/register/enterprise/", {
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
              name: "",
              email: "",
              password: "",
              phone: "",
              industry: "",
              location: "",
              description: "",
              web_site: "",
                role: "enterprise",
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
     <h1 className="text-4xl font-bold text-center text-[#4C489E] mb-10">
  Get Started <span className="text-[#F3965C]">Now!</span>
</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Company Name */}
      <div>
        <label className="block text-gray-700 font-medium">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
          name="web_site"
          value={formData.web_site}
          onChange={handleChange}
          placeholder="Enter your company website URL"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E]"
        />
      </div>

     


      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#F3965C] text-white py-2 font-bold rounded-lg hover:bg-[#D97C42] transition"
        >
          Sign Up 
        </button>
      </div>
    </form>
  </div>
  )
}

export default SigninCompany