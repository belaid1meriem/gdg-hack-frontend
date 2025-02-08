
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { indicatorsContext } from '../contexts/indicatorContext';
import { FaCirclePlus } from "react-icons/fa6";
import AddRating from "./AddRating";
function StudentRating() {
  const { id } = useParams();
  const [ratings, setRatings] = useRatings(id)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)
  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      {localStorage.getItem("studentID") === id && <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/> }
      {ratings.map((rt) => (
        <div className='flex flex-col items-start gap-2 border rounded-md shadow p-4 relative hover:scale-105 transition-all duration-500' key={rt.id}>
          <span className='absolute top-2 right-2 text-md font-medium text-[#ED9AC2]'>{rt.rating}/5</span>
          <h4 className='font-semibold'>company {rt.enterprise}</h4>
          <p>{rt.review}</p>
        </div>
      ))}
      {isFormOpen && (
        <AddRating closeForm={closeForm}/>
      )}
    </div>
  )
}

export default StudentRating

const useRatings = (id) => {
  const [ratings, setRatings] = useState([])
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchRatings = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/ratingsList/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setRatings(response.data);
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

    if (id) fetchRatings(); // Ensure id exists before making a request
  }, [id]);

  return [ratings, setRatings];
}