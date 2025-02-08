
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function SearchResultsStudent() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const location = useLocation();

    // Get job results from location state
    const jobResults = location.state?.results || [];

    // Pagination logic
    const totalPages = Math.ceil(jobResults.length / itemsPerPage);
    const displayedJobs = jobResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
    {/* Header Phrase */}
    <h2 className="text-4xl font-extrabold text-center text-[#4C489E] mb-8">
                Job Opportunities Found!
            </h2>

    {/* Job Results List */}
    <div className="w-full max-w-5xl space-y-4">
        {displayedJobs.map((job) => (
            <div
                key={job.id}
                className="flex flex-col bg-white shadow-lg rounded-lg p-4 border-l-4 border-pink-500 hover:shadow-xl transition transform hover:scale-105"
            >
                {/* Job Title and Type */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-800">{job.title}</span>
                    <span
                        className={`text-sm font-medium ${
                            job.job_type === "part-time" ? "text-yellow-500" : "text-pink-500"
                        }`}
                    >
                        {job.job_type === "part-time" ? "Task" : job.job_type}
                    </span>
                </div>

                {/* Job Details */}
                <div className="space-y-1">
                    <div className="text-sm text-gray-700">
                        <strong>Location:</strong> {job.location}
                    </div>
                    <div className="text-sm text-gray-700">
                        <strong>Compensation:</strong> ${job.salary}
                    </div>
                    <div className="text-sm text-gray-700">
                        <strong>Start Date:</strong> {job.date_start_job}
                    </div>
                </div>

                {/* Job Description */}
                <div className="mt-2 text-gray-600">
                    <p className="text-sm">
                        <strong>Description:</strong> {job.description}
                    </p>
                </div>

                {/* Requirements */}
                <div className="mt-2 text-gray-600">
                    <p className="text-sm">
                        <strong>Requirements:</strong> {job.requirements}
                    </p>
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
                    : "bg-pink-500 hover:bg-pink-600"
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
                        ? "bg-yellow-500 text-white"
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
                    : "bg-pink-500 hover:bg-pink-600"
            }`}
        >
            Next
        </button>
    </div>
</div>
  )
}

export default SearchResultsStudent