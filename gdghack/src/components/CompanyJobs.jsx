import { useState, useContext, useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { indicatorsContext } from '../contexts/indicatorContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddJobForm from './AddJobForm';

function CompanyJobs() {
  const { id } = useParams();
  const [jobs, setJobs] = useJobs(id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm} />
      {jobs.map((job) => (
        <div 
          key={job.id} 
          className="rounded-lg shadow p-6 relative bg-white hover:scale-105 transition-all duration-500"
        >
          <h4 className="font-semibold text-[#ED9AC2] text-lg">{job.title}</h4>
          <p className="py-2 text-gray-700">{job.description}</p>
          <p className="text-sm text-gray-600"><strong>Requirements:</strong> {job.requirements}</p>
          <div className="flex justify-between items-center mt-2">
            <small className="font-medium text-gray-600">💰 {job.salary} DA</small>
            <small className="italic text-gray-600">📍 {job.location}</small>
          </div>
          <small className="text-gray-600">🗓 Start Date: {job.date_start_job.split('T')[0]}</small>
        </div>
      ))}
      {isFormOpen && <AddJobForm closeForm={closeForm} />}
    </div>
  )
}

export default CompanyJobs

const useJobs = (id) => {
  const [jobs, setJobs] = useState([]);
  const { setLoading, setErrorMsg } = useContext(indicatorsContext);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/jobOffersList/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.status !== 404) {
          console.error('Error fetching jobs:', error);
          setErrorMsg('Error fetching jobs. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJobs(); // Ensure id exists before making a request
  }, [id]);

  return [jobs, setJobs];
};