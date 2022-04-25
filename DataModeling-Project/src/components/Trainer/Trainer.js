import React,{useState,useEffect} from 'react';
import './Trainer.css';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import HeroImage from '../general/HeroImage';
import DummyData from './DummyData';

import {login,
  selectUserRole,
  selectCompanyName,
  selectCompanyEmail } from "../../features/userSlice";


const Trainer = () => {

  const dispatch = useDispatch();
  
  const posting = () => {
    console.log("Posting Courses");
    dispatch(login({
      userRole:"Trainer",
      userName:"",
      userAge:"",
      userGender:"",
      userEmail:"",
      userNumber:"",
      userEducationalInformation:"",

      userSkills:["C++","C","Java","Python"],
      userRolesPreferred:["MLOps expert","Data Engineer","Data Scientist"],
      companyName:"Data Pro",
      companyEmail:"www.datapro.com",
  }))
  }

  return (
    <div>
      <Navbar />
        <HeroImage heading="Trainer Dashboard" text="View Trainer Dashboard" />

        <button className='btn btn-light' onClick={posting}>
          Post a Course
        </button>

        <div className='pricing'>
          <div className='card-container'>
            <h1>All Courses posted by this Trainer</h1>
            {
              DummyData.map((data,key)=>{
                return(
                  <div className='card' key={key}>
                      <h3>Course Description</h3>
                      <p className='btc'>CourseId : {data.courseId}</p>
                      <p className='btc'>CourseTitle : {data.title}</p>
                      <p className='btc'>CourseRole : {data.roleType}</p>
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

export default Trainer