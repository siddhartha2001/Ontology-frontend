import React from 'react';
import "./Login.css";
import { useSelector,useDispatch } from 'react-redux';
import {login,logout,
    selectRole,selectEmail,selectPassword,   
    selectGender,selectFirst_name,selectLast_name,
    selectDob,selectPhone,   

    selectUrl,selectCname,selectDesc,

    selectJob_desc,selectJob_title,selectJob_type,
    selectSalary,selectCurrency,selectLoc_city,selectLoc_country,
    selectLoc_state,selectLoc_zip,selectLoc_street_name,

    selectPrev_company,selectStart_date,selectEnd_date,

    selectCgpa,selectCertificate,selectMajor,selectUniversity

} from "../../features/userSlice";   

import {Link} from 'react-router-dom';

import jobVideo from "../assets/video.mp4";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Login = (props) => {

    const dispatch = useDispatch();

    const userRole = useSelector(selectRole);
    const userEmail = useSelector(selectEmail);
    const userPassword = useSelector(selectPassword);
    const userGender = useSelector(selectGender);
    const userFirst_name = useSelector(selectFirst_name);
    const userLast_name = useSelector(selectLast_name);
    const userDob = useSelector(selectDob);
    const userPhone = useSelector(selectPhone);


    const userUrl   = useSelector(selectUrl);
    const userCname = useSelector(selectCname);
    const userDesc  = useSelector(selectDesc);


    const userJob_desc  = useSelector(selectJob_desc);
    const userJob_title = useSelector(selectJob_title);
    const userJob_type  = useSelector(selectJob_type);
    const userSalary    = useSelector(selectSalary);
    const userCurrency  = useSelector(selectCurrency);
    const userLoc_city  = useSelector(selectLoc_city);
    const userLoc_country = useSelector(selectLoc_city);
    const userLoc_state = useSelector(selectLoc_state);
    const userLoc_zip = useSelector(selectLoc_zip);
    const userLoc_street_name  = useSelector(selectLoc_street_name);

    const userPrev_company  = useSelector(selectPrev_company);
    const userStart_date    = useSelector(selectStart_date);
    const userEnd_date      = useSelector(selectEnd_date);

    const userCgpa          = useSelector(selectCgpa);
    const userCertificate   = useSelector(selectCertificate);
    const userMajor         = useSelector(selectMajor);
    const userUniversity    = useSelector(selectUniversity);

    const registerSeeker = () => {
        console.log("Register Seeker");
        dispatch(login({
            role: "Seeker",
            email:"aman.kumar@iiitb.org",
            password:"password",
            gender:"Male",
            first_name:"Aman",
            last_name:"Kumar",
            dob:"2000-11-15",
            phone:"9380480882",
        }))
    }
    const loginSeeker = () => {
        console.log("Login Seeker");
        dispatch(login({
            role: "Seeker",
            email:"aman.kumar@iiitb.org",
            password:"password",
            gender:"Male",
            first_name:"Aman",
            last_name:"Kumar",
            dob:"2000-11-15",
            phone:"9380480882",
        }))
    }
    const registerCompany = () => {
        console.log("Login Company");
        dispatch(login({
            role: "Company",
            url: "www.adobe.com",
            cname:"Adobe",
            desc:"We build digital products"
        }))
    }
    const loginCompany = () => {
        console.log("Login Company");
        dispatch(login({
            role: "Company",
            url: "www.adobe.com",
            cname:"Adobe",
            desc:"We build digital products"
        }))
    }
    /*const loginTrainer = () => {
        console.log("Login Trainer");
        dispatch(login({
            userRole:"Trainer",
            userName:"",
            userAge:"",
            userGender:"",
            userEmail:"",
            userNumber:"",
            userEducationalInformation:"",
            userSkills:[],
            userRolesPreferred:[],
            companyName:"Byjus",
            companyEmail:"www.byjus.com",
        }))
    }
    const loginAdmin = () => {
        console.log("Login Admin");
        dispatch(login({
            userRole:"Admin",
            userName:"",
            userAge:"",
            userGender:"",
            userEmail:"",
            userNumber:"",
            userEducationalInformation:"",
            userSkills:[],
            userRolesPreferred:[],
            companyName:"",
            companyEmail:"",
        }))
    }*/
    return (
      <div>
        <Navbar />
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={jobVideo} type='video/mp4'/>
            </video>

            <div className='content'>
                <h1>Hire D</h1>
                <p>Semantic Web App</p>
                <div>
                    
                    <Link to='/seekerLoginForm'>
                        <button className='btn btn-light' onClick={registerSeeker}>
                            Register Seeker
                        </button>
                    </Link>
                    <Link to='/seekerDashboard'>
                        <button className='btn btn-light' onClick={loginSeeker}>
                            Login Seeker
                        </button>
                    </Link>
                    <Link to='/companyLoginForm'>
                        <button className='btn btn-light' onClick={registerCompany}>
                            Register Company
                        </button>
                    </Link>
                    <Link to='/companyDashboard'>
                        <button className='btn btn-light' onClick={loginCompany}>
                            Login Company
                        </button>
                    </Link>
                    

                </div>
            </div>
        </div>
        <Footer />
      </div>
    )
}

export default Login