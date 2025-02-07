
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { ChevronDown, ChevronUp } from "lucide-react";

function SearchCompany() {
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    const toggleFilter = (filter) => {
        setActiveFilter((prev) => (prev === filter ? null : filter));
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
                    {/* Filter 1 */}
                    <div className="relative">
                    <button
    onClick={() => toggleFilter("filter1")}
    className="flex items-center text-gray-700 hover:text-yellow-500"
>
    Filter 1
    {activeFilter === "filter1" ? (
        <ChevronUp className="ml-2 w-5 h-5" />
    ) : (
        <ChevronDown className="ml-2 w-5 h-5" />
    )}
</button>
                        {activeFilter === "filter1" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-40 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Filter 2 */}
                    <div className="relative">
                    <button
    onClick={() => toggleFilter("filter2")}
    className="flex items-center text-gray-700 hover:text-yellow-500"
>
    Filter 2
    {activeFilter === "filter2" ? (
        <ChevronUp className="ml-2 w-5 h-5" />
    ) : (
        <ChevronDown className="ml-2 w-5 h-5" />
    )}
</button>
                        {activeFilter === "filter2" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-40 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option A</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option B</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option C</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Filter 3 */}
                    <div className="relative">
                    <button
    onClick={() => toggleFilter("filter3")}
    className="flex items-center text-gray-700 hover:text-yellow-500"
>
    Filter 3
    {activeFilter === "filter3" ? (
        <ChevronUp className="ml-2 w-5 h-5" />
    ) : (
        <ChevronDown className="ml-2 w-5 h-5" />
    )}
</button>
                        {activeFilter === "filter3" && (
                            <div className="absolute bg-white border rounded-lg shadow-md mt-2 w-40 z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option X</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option Y</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option Z</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchCompany;
