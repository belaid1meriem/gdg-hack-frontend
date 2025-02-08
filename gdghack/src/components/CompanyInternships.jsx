import { useState, useContext, useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { indicatorsContext } from '../contexts/indicatorContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddInternshipForm from './AddInternshipForm';

function CompanyInternships() {
  const { id } = useParams();
  const [internships, setInternships] = useInternships(id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm} />
      {internships.map((internship) => (
        <div 
          key={internship.id} 
          className="rounded-lg shadow p-6 relative bg-white hover:scale-105 transition-all duration-500"
        >
          <h4 className="font-semibold text-[#4C489E] text-lg">{internship.title}</h4>
          <p className="py-2 text-gray-700">{internship.description}</p>
          <p className="text-sm text-gray-600"><strong>Location:</strong> {internship.location}</p>
          <p className="text-sm text-gray-600"><strong>Requirements:</strong> {internship.requirements}</p>
          <div className="flex justify-between items-center mt-2">
            <small className="italic text-gray-600">📅 Start Date: {internship.start_date}</small>
            <small className="italic text-gray-600">⏳ End Date: {internship.end_date}</small>
          </div>
          <small className="text-gray-600">🕒 Created at: {internship.created_at.split('T')[0]}</small>
        </div>
      ))}
      {isFormOpen && <AddInternshipForm closeForm={closeForm} />}
    </div>
  );
}

export default CompanyInternships;

const useInternships = (id) => {
  const [internships, setInternships] = useState([]);
  const { setLoading, setErrorMsg } = useContext(indicatorsContext);

  useEffect(() => {
    const fetchInternships = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/entreprise/internshipsList/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setInternships(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.status !== 404) {
          console.error('Error fetching internships:', error);
          setErrorMsg('Error fetching internships. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchInternships();
  }, [id]);

  return [internships, setInternships];
};
