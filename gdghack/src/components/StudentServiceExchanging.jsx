import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { indicatorsContext } from '../contexts/indicatorContext';
import { FaCirclePlus } from "react-icons/fa6";
import AddServiceExchange from './AddServiceExchange';


function StudentServiceExchanging() {
  const { id } = useParams();
  const [ services, setServices] = useServiceExchange(id)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/>
      {services.map((service) => (
      <div 
        className="flex flex-col items-start gap-2 border rounded-md shadow p-4 relative hover:scale-105 transition-all duration-500" 
        key={service.id}
      >
        <span className="absolute top-2 right-2 text-md font-medium text-gray-500">
          {service.status}
        </span>
        <h4 className="font-semibold">
          {service.student1_id+"  "+service.student1_name} ↔ {service.student2_id+"  "+service.student2_name}
        </h4>
        <p className="text-sm text-gray-700">🎯 {service.task1}</p>
        <p className="text-sm text-gray-700">🎯 {service.task2}</p>
        <span className="text-xs text-gray-500">
          {new Date(service.created_at).toLocaleDateString()}
        </span>
      </div>
    ))}

      {isFormOpen && (
        <AddServiceExchange closeForm={closeForm}/>
      )}
    </div>
  )
}

export default StudentServiceExchanging


const useServiceExchange = (id) => {
  const [ services, setServices] = useState([])
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchServiceExchange = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/task_exchangesList/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        if(error.status !== 404){
         console.error('Error fetching student info:', error);
         setErrorMsg('Error fetching student info. Please try again later.');
        }
      }
      finally {
        setLoading(false);
      }
    };

    if (id) fetchServiceExchange(); // Ensure id exists before making a request
  }, [id]);

  return [ services, setServices];
}