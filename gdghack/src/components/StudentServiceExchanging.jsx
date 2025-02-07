import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { indicatorsContext } from '../contexts/indicatorContext';
import { FaCirclePlus } from "react-icons/fa6";


function StudentServiceExchanging() {
  const { id } = useParams();
  const [ services, setServices] = useServiceExchange(id)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <div>

    </div>
  )
}

export default StudentServiceExchanging


const useServiceExchange = (id) => {
  const [ services, setServices] = useState([])
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchVirtualExp = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/task_exchanges/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setExp(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching student info:', error);
        setErrorMsg('Error fetching student info. Please try again later.');
      }
      finally {
        setLoading(false);
      }
    };

    if (id) fetchVirtualExp(); // Ensure id exists before making a request
  }, [id]);

  return [ services, setServices];
}