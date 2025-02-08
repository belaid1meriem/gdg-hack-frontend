import axios from 'axios';
import {useContext, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { indicatorsContext } from '../contexts/indicatorContext';

function JoinServiceExchange({closeForm,exchangeId}) {
    const navigate = useNavigate()
    const { setErrorMsg } = useContext(indicatorsContext);

    const [formData, setFormData] = useState({
        task2:"",
        student2_id: localStorage.getItem('studentID'),
        exchange_id: exchangeId
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
            const response = await axios.put('http://127.0.0.1:8000/student/task-exchange/join/', formData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response);
            navigate(0);
        } catch (error) {
            console.log(error);
            setErrorMsg('Error adding task. Please try again later.');
        } finally {
            closeForm();
        }
    };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 z-50 flex items-center justify-center" onClick={closeForm}>
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white px-16 py-8 rounded-lg shadow-md space-y-4"
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-xl font-bold">Exchange a Service</h2>

            {/* Task */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Task</label>
                <input
                    type="text"
                    name="task2"
                    value={formData.task2}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400"
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className={disabled ? "bg-gray-300 w-full text-white py-2 rounded-md transition-colors duration-150 mt-2" : "w-full bg-[#4C489E] text-white py-2 rounded-md hover:bg-[#3E3C8A] transition-colors duration-150 mt-2"}
                disabled={disabled}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default JoinServiceExchange