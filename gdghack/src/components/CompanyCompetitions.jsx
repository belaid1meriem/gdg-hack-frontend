import { useState, useContext, useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { indicatorsContext } from '../contexts/indicatorContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddCompetitionForm from './AddCompetitionForm';
import React from 'react';

function CompanyCompetitions() {
  const { id } = useParams();
  const [competitions, setCompetitions] = useCompetitions(id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      {localStorage.getItem('entrepriseID') === id && <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/> }
      {competitions.map((competition) => (
        <div 
          key={competition.id} 
          className="rounded-lg shadow p-6 relative bg-white hover:scale-105 transition-all duration-500"
        >
          <h4 className="font-semibold text-[#ED9AC2] text-lg">{competition.title}</h4>
          <p className="py-2 text-gray-700">{competition.description}</p>
          <p className="text-sm text-gray-600"><strong>Prize:</strong> {competition.prize} DA</p>
          <div className="flex justify-between items-center mt-2">
            <small className="font-medium text-gray-600">🏆 Organized by: {competition.enterprise_name}</small>
            <small className="italic text-gray-600">⏳ Deadline: {competition.deadline}</small>
          </div>
          <small className="text-gray-600">📅 Created at: {competition.created_at.split('T')[0]}</small>
        </div>
      ))}
      {isFormOpen && <AddCompetitionForm closeForm={closeForm} />}
    </div>
  );
}

export default CompanyCompetitions;

const useCompetitions = (id) => {
  const [competitions, setCompetitions] = useState([]);
  const { setLoading, setErrorMsg } = useContext(indicatorsContext);

  useEffect(() => {
    const fetchCompetitions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/entreprise/competitionList/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setCompetitions(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.status !== 404) {
          console.error('Error fetching competitions:', error);
          setErrorMsg('Error fetching competitions. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCompetitions();
  }, [id]);

  return [competitions, setCompetitions];
};
