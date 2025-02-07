import React from 'react'
import { Outlet, useParams, NavLink } from 'react-router-dom'
import { useState } from "react";

function StudentMenu() {
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state
  
  const links = [
    { path: "projects", label: "Projects" },
    { path: "virtualexperience", label: "Virtual Experience" },
    { path: "rating", label: "Rating and Opinions" },
    { path: "serviceexchange", label: "Service Exchanging" },
  ];

  return (
    <div className="flex flex-col gap-4 col-span-2">
      <div >
        <ul className="flex justify-between border-b-[1px] px-3 py-2 max-lg:hidden ">
          {[
            { path: "projects", label: "Projects" },
            { path: "virtualexperience", label: "Virtual Experience" },
            { path: "rating", label: "Rating and Opinions" },
            { path: "serviceexchange", label: "Service Exchanging" },
          ].map(({ path, label }) => (
            <li key={path} className="text-md font-medium">
              <NavLink
                to={`/student/${id}/${path}`}
                className={({ isActive }) =>
                  isActive ? "text-[#4C489E] border-b-2 border-[#4C489E] pb-2 hover:text-[#2B3990]" : "text-gray-500 hover:text-[#2B3990]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <div className="relative lg:hidden">
          {/* Active Link Display */}
          <ul className="flex justify-between border-b-[1px] px-3 py-2">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={`/student/${id}/${path}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4C489E] border-b-2 border-[#4C489E] pb-2 hover:text-[#2B3990]"
                    : "hidden"
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-2 text-gray-500 border px-2 py-1 rounded"
            >
              ▼
            </button>
          </ul>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="absolute left-8 mt-2 w-48 bg-white border rounded shadow-md">
              {links.map(({ path, label }) => (
                <li key={path} className="p-2 hover:bg-gray-100">
                  <NavLink
                    to={`/student/${id}/${path}`}
                    className="block"
                    onClick={() => setMenuOpen(false)} // Close menu on click
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
    </div>
      </div>
      <Outlet />
    </div>
  )
}

export default StudentMenu