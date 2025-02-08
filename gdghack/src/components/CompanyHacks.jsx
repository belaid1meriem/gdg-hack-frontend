import { useState, useContext, useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { indicatorsContext } from '../contexts/indicatorContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddHackathonForm from './AddHackathonForm';
import React from 'react';

function CompanyHacks() {
  const { id } = useParams();
  const [hackathons, setHackathons] = useHackathons(id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      {localStorage.getItem('entrepriseID') === id && <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/> }
      {hackathons.map((hack) => (
        <div 
          key={hack.id} 
          className=" rounded-lg shadow p-6 relative bg-white hover:scale-105 transition-all duration-500"
        >
          <h4 className="font-semibold text-[#ED9AC2] text-lg">{hack.name}</h4>
          <p className="py-2 text-gray-700">{hack.description}</p>
          <div className="flex justify-between items-center mt-2">
            <small className="font-medium text-gray-600">
              📅 {hack.start_date.split('T')[0]} - {hack.end_date.split('T')[0]}
            </small>
            <small className="italic text-gray-600">📍 {hack.location}</small>
          </div>
        </div>
      ))}
      {isFormOpen && <AddHackathonForm closeForm={closeForm} />}
  </div>

  )
}

export default CompanyHacks

const useHackathons = (id) => {
  const [hackathons, setHackathons] = useState([]);
  const { setLoading, setErrorMsg } = useContext(indicatorsContext);

  useEffect(() => {
    const fetchHackathons = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/hackathons/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setHackathons(response.data);
        console.log(response.data);
      } catch (error) {
        if(error.status !== 404){
          console.error('Error fetching hackathons:', error);
          setErrorMsg('Error fetching hackathons. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchHackathons(); // Ensure id exists before making a request
  }, [id]);

  return [hackathons, setHackathons];
};