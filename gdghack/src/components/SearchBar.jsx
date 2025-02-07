import React from 'react'

function SearchBar() {
  return (
    <div className="flex justify-center items-center ">
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-[600px] h-12 pl-4 pr-12 bg-white text-gray-700 rounded-full shadow-md ring-2 ring-pink-400 outline-none"
      />
      {/* Search Icon */}
      <button className="absolute top-1/2 right-3 transform  -translate-y-1/2 text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.65 9.35a7.3 7.3 0 11-14.6 0 7.3 7.3 0 0114.6 0z"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default SearchBar