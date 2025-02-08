import {useState, useContext, useEffect} from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { indicatorsContext } from '../contexts/indicatorContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import AddProjectForm from './AddProjectForm';

function StudentProjects() {
  const { id } = useParams();
  const [projects, setProjects] = useProjects(id)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  
  return (
    <div className='flex flex-col gap-4 px-8 py-4'>
      {localStorage.getItem("studentID") === id && <FaCirclePlus className='text-3xl self-end cursor-pointer' onClick={openForm}/> }
      {projects.map((exp) => (
        <div className='flex flex-col items-center gap-2 border rounded-md shadow p-4 relative hover:scale-105 transition-all duration-500' key={exp.id}>
          <h4 className='font-semibold'>{exp.title}</h4>
          <p className='py-3'>{exp.description}</p>
          <small className='font-medium ' >from {exp.date_debut.split('T')[0]} to {exp.date_fin.split('T')[0]}</small>
          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Buy Now</button> */}
        </div>
      ))}
      {isFormOpen && (
        <AddProjectForm closeForm={closeForm}/>
      )}
    </div>
  )
}

export default StudentProjects


const useProjects = (id) => {
  const [ projects, setProjects] = useState([])
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/projects/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProjects(response.data);
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

    if (id) fetchProjects(); // Ensure id exists before making a request
  }, [id]);

  return [ projects, setProjects];
}