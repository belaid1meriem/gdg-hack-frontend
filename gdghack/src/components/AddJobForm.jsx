import axios from 'axios';
import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { indicatorsContext } from '../contexts/indicatorContext';

function AddJobForm({ closeForm }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setErrorMsg } = useContext(indicatorsContext);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        date_start_job: "",
        enterprise: id
    });

    const [disabled, setDisabled] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        try {
            setDisabled(true);
            const response = await axios.post('http://127.0.0.1:8000/student/job_offers/create/', formData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response);
            navigate(0);
        } catch (error) {
            console.log(error);
            setErrorMsg('Error adding job. Please try again later.');
        } finally {
            closeForm();
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 z-50 flex items-center justify-center" onClick={closeForm}>
            <form onSubmit={handleSubmit} className=" max-h-[90%] overflow-auto mx-auto bg-white px-16 py-8 rounded-lg shadow-md space-y-4" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-gray-800">Add a New Task</h2>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        rows="3"
                        required
                    ></textarea>
                </div>

                {/* Requirements */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Requirements</label>
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        rows="3"
                        required
                    ></textarea>
                </div>

                {/* Salary */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Compensation</label>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        required
                    />
                </div>

                {/* Start Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        name="date_start_job"
                        value={formData.date_start_job}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className={disabled ? "bg-gray-300 w-full text-white py-2 rounded-md transition-colors duration-150 mt-2" : "w-full bg-[#4C489E] text-white py-2 rounded-md hover:bg-[#3e3b81] transition-colors duration-150 mt-2"} disabled={disabled}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddJobForm;
