import React,{useState,useEffect} from 'react';
import './Company.css';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import HeroImage from '../general/HeroImage';
import DummyData from './DummyData';
import {login,selectUserRole,selectCompanyName,selectCompanyEmail } from "../../features/userSlice";


const Company = () => {
  const dispatch = useDispatch();
  const posting1 = () => {
    console.log("Posting SDE Job");
    dispatch(login({
      userRole:"Company",
      userName:"",
      userAge:"",
      userGender:"",
      userEmail:"",
      userNumber:"",
      userEducationalInformation:"",

      userSkills:["C++","Javascript","Python"],
      userRolesPreferred:["SDE-1","Member of Technical Staff (MTS)","Data Scientist"],
      companyName:"Adobe",
      companyEmail:"www.adobe.com",
  }))
  }
  const posting2 = () => {
    console.log("Posting DS Job");
    dispatch(login({
      userRole:"Company",
      userName:"",
      userAge:"",
      userGender:"",
      userEmail:"",
      userNumber:"",
      userEducationalInformation:"",

      userSkills:["R","Pandas","Numpy","Python"],
      userRolesPreferred:["MLOps expert","Data Engineer","Data Scientist"],
      companyName:"IBM",
      companyEmail:"www.ibm.com",
  }))
  }

  return (
    <div>
      <Navbar />
        <HeroImage heading="Company Dashboard" text="View Company Dashboard" />


        <button className='btn btn-light' onClick={posting1}>
          Post an SDE Job
        </button>

        <button className='btn btn-light' onClick={posting2}>
          Post a DS Job
        </button>

        <div className='pricing'>
          <div className='card-container'>
            <h1>All jobs posted by this company</h1>
            {
              DummyData.map((data,key)=>{
                return(
                  <div className='card' key={key}>
                      <h3>Job Description</h3>
                      <p className='btc'>JobId : {data.jobId}</p>
                      <p className='btc'>JobTitle : {data.title}</p>
                      <p className='btc'>JobRole : {data.roleType}</p>
                      <p className='btc'>CompanyName : {data.companyName}</p>
                      <p className='btc'>CompanyUrl : {data.companyUrl}</p>
                      <p className='btc'>Location : {data.location}</p>
                      <p className='btc'>Description : {data.description}</p>
                      <p className='btc'>Link : {data.link}</p>
                  </div>
              )
              })
            }
          </div>
        </div>


      <Footer />
    </div>
  )
}

export default Company