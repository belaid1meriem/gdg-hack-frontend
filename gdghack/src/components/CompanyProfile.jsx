
import { useContext } from "react";
import React from 'react'
import Header from './Header'
import { indicatorsContext } from "../contexts/indicatorContext";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import CompanyHero from './CompanyHero';
import CompanyAbout from './CompanyAbout';
import CompanyMenu from './CompanyMenu';

function CompanyProfile() {
  const { loading, setLoading, errorMsg, setErrorMsg } = useContext(indicatorsContext)
  return (
    <div className='flex flex-col '>
        <Header/>
        <CompanyHero/>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <CompanyAbout/>
            <CompanyMenu/>
        </div>
        { loading && <Loading/>}
        { errorMsg && <ErrorMsg msg={errorMsg} closeError={()=> setErrorMsg(null)} />}
    </div>
  )
}

export default CompanyProfile