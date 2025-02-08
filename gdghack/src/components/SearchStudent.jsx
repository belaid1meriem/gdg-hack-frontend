import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import SearchBarStudent from "./SearchBarStudent";
import { useNavigate } from "react-router-dom";
function SearchStudent() {
  const navigate = useNavigate();
   const [showFilters, setShowFilters] = useState(false);
      const [activeFilter, setActiveFilter] = useState(null);
      const [customFilters, setCustomFilters] = useState({
          type: "",
          location: "",
          payment: "",
      });
  
      const toggleFilters = () => {
          setShowFilters((prev) => !prev);
      };
  
      const toggleFilter = (filter) => {
          setActiveFilter((prev) => (prev === filter ? null : filter));
      };
  
      const handleCustomInputChange = (filter, value) => {
          setCustomFilters((prev) => ({ ...prev, [filter]: value }));
      };
  
      const handleOptionSelect = async (filter, value) => {
          try {
              let url = "";
              switch (filter) {
                  case "type":
                      url = `http://127.0.0.1:7000/student/jobs/search-by-type/?job_type=${value}`;
                      break;
                  case "location":
                      url = `http://127.0.0.1:7000/student/jobs/search-by-location/?location=${value}`;
                      break;
                  case "payment":
                      url = `http://127.0.0.1:7000/student/jobs/search-by-salary/?min_salary${value}`;
                      break;
                  default:
                      break;
              }
  
              if (url) {
                  const response = await fetch(url);
                  const data = await response.json();
                  console.log("Search Results:", data); 
                  navigate("/Searchresultsstudent", { state: { results: data } });
              }
          } catch (error) {
              console.error("Error fetching search results:", error);
          }
      };
  
      const handleSearchIconClick = async (filter) => {
          const value = customFilters[filter];
          if (!value) return;
  
          await handleOptionSelect(filter, value);
      };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
    <div className="flex flex-col items-center h-64 justify-center max-w-[2000px] mx-auto px-6 text-black text-center">
        <h1 className="text-6xl font-bold text-[#4C489E]">Gain experience and earn money</h1>
        <h1 className="text-6xl font-bold text-[#4C489E]">fast and easy!</h1>
    </div>

    {/* Search and Filters Section */}
    <div className="flex items-center space-x-4 mb-8">
        {/* Search Bar */}
        <SearchBarStudent/>
        {/* Filters Button */}
        <button
            className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition"
            onClick={toggleFilters}
        >
            Filters
        </button>
    </div>

    {/* Horizontal Filters */}
    {showFilters && (
        <div className="flex space-x-6 justify-center w-full max-w-4xl">
            {/* Type */}
            <div className="relative">
                <button
                    onClick={() => toggleFilter("type")}
                    className="flex items-center text-gray-700 hover:text-yellow-500"
                >
                    Type
                    {activeFilter === "type" ? (
                        <ChevronUp className="ml-2 w-5 h-5" />
                    ) : (
                        <ChevronDown className="ml-2 w-5 h-5" />
                    )}
                </button>
                {activeFilter === "type" && (
                    <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                        <ul className="py-2 text-sm text-gray-700">
                            {["Task", "internship"].map((type) => (
                                <li
                                    key={type}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleOptionSelect("type", type)}
                                >
                                    {type}
                                </li>
                            ))}
                        </ul>
                      
                    </div>
                )}
            </div>

            {/* Location */}
            <div className="relative">
                <button
                    onClick={() => toggleFilter("location")}
                    className="flex items-center text-gray-700 hover:text-yellow-500"
                >
                    Location
                    {activeFilter === "location" ? (
                        <ChevronUp className="ml-2 w-5 h-5" />
                    ) : (
                        <ChevronDown className="ml-2 w-5 h-5" />
                    )}
                </button>
                {activeFilter === "location" && (
                    <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                        <ul className="py-2 text-sm text-gray-700">
                            {["Algiers", "Oran", "Medea"].map((location) => (
                                <li
                                    key={location}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleOptionSelect("location", location)}
                                >
                                    {location}
                                </li>
                            ))}
                        </ul>
                        <div className="p-2 border-t flex items-center">
                            <input
                                type="text"
                                placeholder="Autre..."
                                className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={customFilters.location}
                                onChange={(e) => handleCustomInputChange("location", e.target.value)}
                            />
                            <button
                                className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                onClick={() => handleSearchIconClick("location")}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* payment */}
            <div className="relative">
                <button
                    onClick={() => toggleFilter("payment")}
                    className="flex items-center text-gray-700 hover:text-yellow-500"
                >
                    payment
                    {activeFilter === "payment" ? (
                        <ChevronUp className="ml-2 w-5 h-5" />
                    ) : (
                        <ChevronDown className="ml-2 w-5 h-5" />
                    )}
                </button>
                {activeFilter === "payment" && (
                    <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                       
                        <div className="p-2 border-t flex items-center">
                            <input
                                type="text"
                                placeholder="enter minimal price..."
                                className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={customFilters.payment}
                                onChange={(e) => handleCustomInputChange("payment", e.target.value)}
                            />
                            <button
                                className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                onClick={() => handleSearchIconClick("payment")}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>


     
        </div>
    )}
</div>
  )
}

export default SearchStudent