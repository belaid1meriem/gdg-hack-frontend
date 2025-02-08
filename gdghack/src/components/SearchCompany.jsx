import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
function SearchCompany() {
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const [customFilters, setCustomFilters] = useState({
        uni: "",
        major: "",
        year: "",
        skill: "",
    });

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };
    

    const navigate = useNavigate();

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
                case "uni":
                    url = `http://127.0.0.1:7000/student/SearchStudentByUniv/?university=${value}`;
                    break;
                case "major":
                    url = `http://127.0.0.1:7000/student/SearchStudentByUniv/?major=${value}`;
                    break;
                case "year":
                    url = `http://127.0.0.1:7000/student/SearchStudentByUniv/?year_studying=${value}`;
                    break;
                    case "skill":
                        url = `http://127.0.0.1:7000/student/SearchStudentByUniv/?skill=${value}`;
                        break;    
                default:
                    break;
            }

            if (url) {
                const response = await fetch(url);
                const data = await response.json();
                console.log("Search Results:", data); 
                navigate("/Searchresults", { state: { results: data } });
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
                <h1 className="text-6xl font-bold text-[#4C489E]">Hire skilled students for your tasks</h1>
                <h1 className="text-6xl font-bold text-[#4C489E]">fast and easy!</h1>
            </div>

            {/* Search and Filters Section */}
            <div className="flex items-center space-x-4 mb-8">
                {/* Search Bar */}
                <SearchBar />
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
                    {/* University */}
                    <div className="relative">
                        <button
                            onClick={() => toggleFilter("uni")}
                            className="flex items-center text-gray-700 hover:text-yellow-500"
                        >
                            University
                            {activeFilter === "uni" ? (
                                <ChevronUp className="ml-2 w-5 h-5" />
                            ) : (
                                <ChevronDown className="ml-2 w-5 h-5" />
                            )}
                        </button>
                        {activeFilter === "uni" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    {["ESI", "USTHB", "Polytech"].map((university) => (
                                        <li
                                            key={university}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleOptionSelect("uni", university)}
                                        >
                                            {university}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-2 border-t flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Write your university..."
                                        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        value={customFilters.uni}
                                        onChange={(e) => handleCustomInputChange("uni", e.target.value)}
                                    />
                                    <button
                                        className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                        onClick={() => handleSearchIconClick("uni")}
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Major */}
                    <div className="relative">
                        <button
                            onClick={() => toggleFilter("major")}
                            className="flex items-center text-gray-700 hover:text-yellow-500"
                        >
                            Major
                            {activeFilter === "major" ? (
                                <ChevronUp className="ml-2 w-5 h-5" />
                            ) : (
                                <ChevronDown className="ml-2 w-5 h-5" />
                            )}
                        </button>
                        {activeFilter === "major" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    {["Computer Science", "Marketing", "Business Administration"].map((major) => (
                                        <li
                                            key={major}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleOptionSelect("major", major)}
                                        >
                                            {major}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-2 border-t flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Write your major..."
                                        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        value={customFilters.major}
                                        onChange={(e) => handleCustomInputChange("major", e.target.value)}
                                    />
                                    <button
                                        className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                        onClick={() => handleSearchIconClick("major")}
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Year of Study */}
                    <div className="relative">
                        <button
                            onClick={() => toggleFilter("year")}
                            className="flex items-center text-gray-700 hover:text-yellow-500"
                        >
                            Studying year
                            {activeFilter === "year" ? (
                                <ChevronUp className="ml-2 w-5 h-5" />
                            ) : (
                                <ChevronDown className="ml-2 w-5 h-5" />
                            )}
                        </button>
                        {activeFilter === "year" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"].map((year) => (
                                        <li
                                            key={year}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleOptionSelect("year", year)}
                                        >
                                            {year}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-2 border-t flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Write your studying year..."
                                        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        value={customFilters.year}
                                        onChange={(e) => handleCustomInputChange("year", e.target.value)}
                                    />
                                    <button
                                        className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                        onClick={() => handleSearchIconClick("year")}
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>


                     {/* skills */}
                     <div className="relative">
                        <button
                            onClick={() => toggleFilter("skill")}
                            className="flex items-center text-gray-700 hover:text-yellow-500"
                        >
                            Skills
                            {activeFilter === "skill" ? (
                                <ChevronUp className="ml-2 w-5 h-5" />
                            ) : (
                                <ChevronDown className="ml-2 w-5 h-5" />
                            )}
                        </button>
                        {activeFilter === "skill" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-64 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    {[
    "Web Dev",
    "Graphic Design",
    "Mobile Development",
    "UI/UX Design",
    "Data Analysis",
    "Machine Learning",
    "Cybersecurity",
    "Game Development",
    "Digital Marketing",
    "Video Editing",
    "Animation",
    "E-commerce Development",
    "Project Management",
    "Software Testing",
    "Front-End Development",
    "Back-End Development",
    "Full-Stack Development"
].map((skill) => (
                                        <li
                                            key={skill}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleOptionSelect("skill", skill)}
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-2 border-t flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Autre..."
                                        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        value={customFilters.skill}
                                        onChange={(e) => handleCustomInputChange("skill", e.target.value)}
                                    />
                                    <button
                                        className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                                        onClick={() => handleSearchIconClick("skill")}
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
    );
}

export default SearchCompany;
