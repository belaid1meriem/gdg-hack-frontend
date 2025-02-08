import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div
  className="w-full mx-auto py-8 px-2 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#4C489E]"
  id="Footer"
>
  {/* Logo and About */}
  <div className="space-y-4">
    <h1 className="text-3xl font-bold text-[#F3965C]">StudentWorks</h1>
    <p className="leading-relaxed max-w-md">
      StudentWorks bridges the gap between education and the professional world, empowering students to learn, earn, and grow. Achieve financial independence while building real-world skills for the future.
    </p>
  </div>

  {/* Quick Links */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-[#F3965C]">Quick Links</h2>
    <ul className="space-y-2">
      <li>
        <a href="#Whyus" className="hover:text-white transition">
          Why Us
        </a>
      </li>
      <li>
        <a href="#Howitworks" className="hover:text-white transition">
          How It Works
        </a>
      </li>
      <li>
        <a href="#Contact" className="hover:text-white transition">
          Contact Us
        </a>
      </li>
      <li>
        <a href="#Terms" className="hover:text-white transition">
          Terms & Conditions
        </a>
      </li>
    </ul>
  </div>

  {/* Social Media and Contact */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-[#F3965C]">Contact Us</h2>
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl hover:text-white transition" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl hover:text-white transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-white transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl hover:text-white transition" />
      </a>
    </div>

    
    <p className="text-sm">
      Email:{" "}
      <a href="mailto:support@studentworks.com" className="hover:underline">
        support@studentworks.com
      </a>
    </p>
    <p className="text-sm">Phone: +123 456 789</p>
  </div>
</div>
  
  )
}

export default Footer