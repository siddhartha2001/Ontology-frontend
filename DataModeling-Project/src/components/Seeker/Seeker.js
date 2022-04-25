import React ,{useState}from 'react';
import './Seeker.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import HeroImage from '../general/HeroImage';
import DummyData from './DummyData';
import SeekerDetails from './SeekerDetails';
import {Link} from 'react-router-dom';
import api from '../../api/axiosFile';


const Seeker = () => {

    const [cname,setCname] = useState('');
    const [jobTitle,setJobTitle] = useState('');

    const handleButton = () =>{
        console.log("See Jobs");
        api.post('/seeker',{}).then((res)=>{
            console.log("hellllllo");
            console.log(res.data);    
        })
    }

    const handleFormSubmit1 =() => {
        console.log(cname);
        console.log("Search by company");
        api.get('/search/company_name?company_name='+cname,{}).then((res)=>{
            console.log(res.data);
        })
    }

    const handleFormSubmit2 = () => {
        console.log(jobTitle);
        console.log("Search by Job Title");
        api.post('/search/job?job_name='+jobTitle,{}).then((res)=>{
            console.log(res.data);
        })
    }


  return (
    <div>
        <Navbar />
            <HeroImage heading="Seeker Dashboard" text="View Seeker Dashboard" />
            
            <Link to="/seekerDetails">
                <button className='btn'>
                    Click to fill form
                </button>
            </Link>

            <form onSubmit={handleFormSubmit1}>
                <h1>Search by Company</h1>
                <label>Company Name</label>
                <input
                    type="text"
                    name="company_name"
                    onChange={ e => setCname(e.target.value)}
                />
                <button className='btn'>Submit</button>
            </form>

            <form onSubmit={handleFormSubmit2}>
                <h1>Search by Job title</h1>
                <label>Job Title</label>
                <input
                    type="text"
                    name="job_title"
                    onChange={ e => setJobTitle(e.target.value)}
                />
                <button className='btn'>Submit</button>
            </form>

            <div className="pricing">
                <div className="card-container">
                    <h1>All Jobs Posted by Company</h1>
                    
                    <button className='btn' onClick={handleButton}>
                        Click to get Jobs
                    </button>
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

export default Seeker