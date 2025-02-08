import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import prof from "../assets/prof.jpeg";


function SearchResults() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const location = useLocation();
    const navigate = useNavigate();

    // Get results from location state
    const results = location.state?.results || [];

    // Pagination logic
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const displayedResults = results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            {/* Header Phrase */}
            <h2 className="text-3xl font-semibold text-pink-500 h-24">
                These are the results of your search!
            </h2>

            {/* Results List */}
            <div className="w-full max-w-5xl space-y-3">
                {displayedResults.map((student) => (
                    <div
                        key={student.id}
                        className="flex items-center justify-between bg-white shadow-md rounded-md p-3 border-l-4 hover:shadow-lg transition transform hover:scale-105"
                    >
                        {/* Profile Image & Name */}
                        <div className="flex items-center space-x-3">
                            <img
                                src={prof} // Default placeholder image
                                alt={student.fullname}
                                className="w-10 h-10 rounded-full object-cover border-2"
                            />
                            <span className="text-lg font-bold text-gray-800">{student.fullname}</span>
                        </div>

                        {/* Major */}
                        <span className="text-md font-medium text-[#4C489E]">{student.major}</span>

                        {/* Skills and Email */}
                        <div className="flex flex-col items-start">
                            
                            <span className="text-sm font-medium text-gray-600">{student.email}</span>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center space-x-2">
                            <span
                                className={`text-sm font-medium ${
                                    student.status ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {student.status ? "Active" : "Busy"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2 mt-6 justify-center">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md text-white ${
                        currentPage === 1
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                >
                    Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => goToPage(i + 1)}
                        className={`px-3 py-1 rounded-md ${
                            currentPage === i + 1
                                ? "bg-gray-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md text-white ${
                        currentPage === totalPages
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default SearchResults;
