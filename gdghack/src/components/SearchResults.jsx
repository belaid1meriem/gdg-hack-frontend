
import React, { useState } from "react";
import pfp from '../assets/pfp.jpeg'
const students = [
    { id: 1, name: "Alice Johnson", skill: "Web Development", available: true, image: pfp },
    { id: 2, name: "Mark Spencer", skill: "Data Science", available: false, image: pfp },
    { id: 3, name: "Sophia Lee", skill: "Graphic Design", available: true, image: pfp },
    { id: 4, name: "John Doe", skill: "Cyber Security", available: true, image: pfp},
    { id: 5, name: "Emily Davis", skill: "Mobile App Development", available: false, image: pfp },
    { id: 6, name: "Michael Brown", skill: "AI & Machine Learning", available: true, image: pfp },
    { id: 7, name: "Bouchra bachferrag", skill: "Web Development", available: true, image: pfp },
    { id: 8, name: "Meriem bachferrag", skill: "Data Science", available: false, image: pfp },
    { id: 9, name: "rofieda bachferrag", skill: "Graphic Design", available: true, image: pfp },
    { id: 10, name: "salam bachferrag", skill: "Cyber Security", available: true, image: pfp},
    { id: 11, name: "bachferrag bachferrag", skill: "Mobile App Development", available: false, image: pfp },
    { id: 12, name: "Michael Brown", skill: "AI & Machine Learning", available: true, image: pfp },
];
function SearchResults() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(students.length / itemsPerPage);

    // Get students for the current page
    const displayedStudents = students.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                {displayedStudents.map((student) => (
                    <div
                        key={student.id}
                        className="flex items-center justify-between bg-white shadow-md rounded-md p-3 border-l-4  hover:shadow-lg transition transform hover:scale-105"
                    >
                        {/* Profile Image & Name */}
                        <div className="flex items-center space-x-3">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-10 h-10 rounded-full object-cover border-2 "
                            />
                            <span className="text-lg font-bold text-gray-800">{student.name}</span>
                        </div>

                        {/* Skill */}
                        <span className="text-md font-medium text-[#4C489E]">{student.skill}</span>

                        {/* Availability */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-600">
                                {student.available ? "Active" : "Busy"}
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
                        currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
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
                        currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
  )
}

export default SearchResults