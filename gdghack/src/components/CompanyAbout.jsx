import {useState, useContext, useEffect} from 'react'

import axios from 'axios';
import { useParams } from "react-router-dom";
import { indicatorsContext } from "../contexts/indicatorContext";
import CompanyInfo from './CompanyInfo';

function CompanyAbout() {
    const { id } = useParams();
    const [companyInfo, setCompanyInfo] = useCompanyInfo(id)
  return (
    <div className='flex flex-col gap-8 pl-20'>
    <CompanyInfo companyInfo={companyInfo}/>
    <div className="pb-16">
        <h1 className='text-lg font-semibold '>About</h1>
        <p className="text-gray-600">{companyInfo.description}</p>
    </div>
</div>
  )
}

export default CompanyAbout

const useCompanyInfo = (id) => {
    const [companyInfo, setCompanyInfo] = useState({});
    const { setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
    useEffect(() => {
      const fetchCompanyInfo = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://127.0.0.1:8000/student/Entrpriseprofile/${id}/`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          setCompanyInfo(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching student info:', error);
          setErrorMsg('Error fetching student info. Please try again later.');
        }
        finally {
          setLoading(false);
        }
      };
  
      if (id) fetchCompanyInfo(); // Ensure id exists before making a request
    }, [id]);
  
    return [companyInfo, setCompanyInfo];
  };
  