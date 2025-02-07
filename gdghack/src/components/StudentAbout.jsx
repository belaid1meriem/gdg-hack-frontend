import {useState, useContext, useEffect} from 'react'
import StudentInfo from './StudentInfo'
import StudentTeams from './StudentTeams'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { indicatorsContext } from "../contexts/indicatorContext";

function StudentAbout() {
  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useStudentInfo(id)
  return (
    <div className='flex flex-col gap-8 pl-20'>
        <StudentInfo studentInfo={studentInfo}/>
        <StudentTeams/>
        <div className="pb-16">
            <h1 className='text-lg font-semibold '>About</h1>
            <p className='text-sm'>{studentInfo.bio}</p>
        </div>
    </div>
  )
}

export default StudentAbout


const useStudentInfo = (id) => {
  const [studentInfo, setStudentInfo] = useState({});
  const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  useEffect(() => {
    const fetchStudentInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/studentprofile/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setStudentInfo(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching student info:', error);
        setErrorMsg('Error fetching student info. Please try again later.');
      }
      finally {
        setLoading(false);
      }
    };

    if (id) fetchStudentInfo(); // Ensure id exists before making a request
  }, [id]);

  return [studentInfo, setStudentInfo];
};
