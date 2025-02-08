import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { indicatorsContext } from '../contexts/indicatorContext';
import { FaCirclePlus } from "react-icons/fa6";
import AddVirtualExpForm from './AddVirtualExpForm';

function StudentVirtualExp() {
  const { id } = useParams();
  const [exp, setExp] = useVirtualExp(id)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)
  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      {localStorage.getItem("studentID") === id && <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/> }
      {exp.map((exp) => (
        <div className='flex flex-col items-center gap-2 border rounded-md shadow p-4 relative hover:scale-105 transition-all duration-500' key={exp.id}>
          <h4 className='font-semibold'>{exp.title}</h4>
          <p className='py-3'>{exp.description}</p>
          <p className='absolute top-2 right-2 p-1 bg-[#ED9AC2] bg-opacity-10 text-[#ED9AC2] border border-[#ED9AC2] rounded-md'>{exp.status}</p>
          <p className='absolute bottom-2 right-2 font-medium' >{exp.price} DA</p>
          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Buy Now</button> */}
        </div>
      ))}
      {isFormOpen && (
        <AddVirtualExpForm closeForm={closeForm}/>
      )}
    </div>
  )
}

export default StudentVirtualExp

const useVirtualExp = (id) => {
  const [exp, setExp] = useState([])
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchVirtualExp = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/virtual_experiences/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setExp(response.data);
        console.log(response.data)
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

    if (id) fetchVirtualExp(); // Ensure id exists before making a request
  }, [id]);

  return [exp, setExp];
}