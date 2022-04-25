import React,{useState,useEffect} from 'react';
import "./SeekerDetails.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {login,selectUser_Id,selectJob_desc,    
selectPrev_company,  selectStart_date, selectRole, 
selectEnd_date,selectJob_title,selectCgpa,selectCertificate,selectMajor,
selectUniversity
} from "../../features/userSlice";

import api from '../../api/axiosFile'


const SeekerLoginForm = () => {

    const dispatch = useDispatch();

    const [role,setRole] = useState("");

    const [cgpa,setCgpa] = useState("");
    const [certificate,setCertificate] = useState("");
    const [major,setMajor] = useState("");
    const [university,setUniversity] = useState("");

    const [jobDesc,setJobDesc] = useState("");
    const [prevCompany,setPrevCompany] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [jobTitle,setJobTitle] = useState("");

    const [skill,setSkill] = useState("");



    const userRole = useSelector(selectRole);
    const userId = useSelector(selectUser_Id);
    const userCgpa = useSelector(selectCgpa);
    const userCertificate = useSelector(selectCertificate);
    const userMajor = useSelector(selectMajor);
    const userUniv = useSelector(selectUniversity);

    const userJobDesc = useSelector(selectJob_desc);
    const userPrevCompany = useSelector(selectPrev_company);
    const userStartDate = useSelector(selectStart_date);
    const userEndDate = useSelector(selectEnd_date);
    const userJobTitle = useSelector(selectJob_title);

    const handleFormSubmit1 = (e) => {
        console.log("Clicked1");
        e.preventDefault();
        
        console.log("pppppppppppppppp");
        console.log(userRole);
        
        console.log(userId);

        api.post('/seeker/addedu',{
            userId,certificate,
            major,university,cgpa

            }).then((res)=>{
            console.log(userId);
            
            console.log(res.data);
            dispatch(login({
                User_Id:userId,
                certificate:certificate,
                major:major,
                cgpa:cgpa,
                university:university
            }))            
        })
    }

    const handleFormSubmit2 = (e) => {
        console.log("Clicked2");
        e.preventDefault();
        console.log(userRole);
        
        console.log(userId);
        console.log(startDate,endDate,prevCompany,jobDesc,jobTitle,userId);
        
        api.post('/seeker/addexp',{
            userId,jobTitle,
            jobDesc,startDate,endDate,
            prevCompany

            }).then((res)=>{
            console.log("hellllllo");
            console.log(userId);
            
            dispatch(login({
                User_Id:userId,
                job_title:jobTitle,
                job_desc:jobDesc,
                prev_company:prevCompany,
                start_date:startDate,
                end_date:endDate,
            }))            
        })

    }

    const handleFormSubmit3 = (e) => {
        console.log("Clicked3");
        e.preventDefault();

        api.post('/seeker/addskill',{
            userId,skill
        }).then((res)=>{
            console.log("Skill Added");
            console.log(userId);
            console.log(res.data);

            dispatch(login({
                Used_Id:userId,
                skill:skill
            }))

        })

    }

  return (
    <div>
        <Navbar />
        <div className="form">
            <form onSubmit={handleFormSubmit1}>
                <h1>Educational Details</h1>
                
                <label>Your Cgpa</label>
                <input 
                    type='text' 
                    name="cgpa"
                    onChange = {e => setCgpa(e.target.value)}
                />

                <label>Your Certificate</label>
                <input 
                    type='text' 
                    name="certificate"
                    onChange = {e => setCertificate(e.target.value)}
                />

                <label>Your Major</label>
                <input 
                    type='text' 
                    name="major"
                    onChange = {e => setMajor(e.target.value)}
                />

                <label>Your University</label>
                <input 
                    type='text' 
                    name="university"
                    onChange = {e => setUniversity(e.target.value)}
                />
                <button className='btn'>Submit</button>
            </form>


            <form onSubmit={handleFormSubmit2}>
                <h1>Experience Details</h1>
                
                <label>Your Job Description</label>
                <input 
                    type='text' 
                    name="jobDesc"
                    onChange = {e => setJobDesc(e.target.value)}
                />

                <label>Your Previous Company</label>
                <input 
                    type='text' 
                    name="prevCompany"
                    onChange = {e => setPrevCompany(e.target.value)}
                />

                <label>Start Date</label>
                <input 
                    type='text' 
                    name="start-date"
                    onChange = {e => setStartDate(e.target.value)}
                />

                <label>End Date</label>
                <input 
                    type='text' 
                    name="end-date"
                    onChange = {e => setEndDate(e.target.value)}
                />

                <label>Job title</label>
                <input 
                    type='text' 
                    name="job-title"
                    onChange = {e => setJobTitle(e.target.value)}
                />

               
                <button className='btn'>Submit</button>
            </form>

            <form onSubmit={handleFormSubmit3}>

                <h1>Add Skills</h1>


                <label>Skill</label>
                <input
                    type="text"
                    name="skill"
                    onChange={ e => setSkill(e.target.value)}
                />
                <button className='btn'>Submit</button>
            </form>

            <Link to="/seekerDashboard">
                    <button className='btn'>Go to Seeker Dashboard</button>
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default SeekerLoginForm
