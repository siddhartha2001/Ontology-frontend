import React,{useState,useEffect} from 'react';
import "./SeekerLoginForm.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {login,selectUser_Id,
    selectRole,selectEmail,selectPassword,   
    selectGender,selectFirst_name,selectLast_name,
    selectDob,selectPhone } from "../../features/userSlice";

import api from '../../api/axiosFile'


const SeekerLoginForm = () => {

    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('');
    const [fname,setFirstName] = useState('');
    const [lname,setLastName] = useState('');
    const [dob,setDob] = useState('');
    const [phone,setPhone] = useState('');
    const [userId,setUserId] = useState('');

    const userRole = useSelector(selectRole);
    const userEmail = useSelector(selectEmail);
    const userPassword = useSelector(selectPassword);
    const userGender = useSelector(selectGender);
    const userFirst_name = useSelector(selectFirst_name);
    const userLast_name = useSelector(selectLast_name);
    const userDob = useSelector(selectDob);
    const userPhone = useSelector(selectPhone);
    const user_Id = useSelector(selectUser_Id);


    const handleFormSubmit = (e) => {
        console.log("Clicked");
        e.preventDefault();
        
        api.post('/signup/seeker',{
                        userRole,email,
                        password,gender,
                        fname,lname,
                        dob,phone
        }).then((res)=>{
            console.log("hellllllo");
            console.log(res.data);
            console.log(res.data.User_Id);
            setUserId(res.data.User_Id);
        
            console.log(userId);

        dispatch(login({
            User_Id:res.data.User_Id,
            role: "Seeker",
            email:email,
            password:password,
            gender:gender,
            first_name:fname,
            last_name:lname,
            dob:dob,
            phone:phone,
        }))

        console.log(userRole,userEmail,userPassword);
    })
                  
    }

  return (
    <div>
        <Navbar />
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <h1>Form Details</h1>
                
                <label>Your First Name</label>
                <input 
                    type='text' 
                    name="name"
                  
                    onChange = {e => setFirstName(e.target.value)}
                />

                <label>Your Last Name</label>
                <input 
                    type='text' 
                    name="name"
                  
                    onChange = {e => setLastName(e.target.value)}
                />

                <label>Your Gender</label>
                <input 
                    type='text' 
                    name="gender"
                   
                    onChange = {e => setGender(e.target.value)}
                />

                <label>Your Email</label>
                <input 
                    type='text' 
                    name="email"
                    onChange = {e => setEmail(e.target.value)}
                />

                <label>Your Password</label>
                <input 
                    type='password' 
                    name="email"
                    onChange = {e => setPassword(e.target.value)}
                />

                <label>Your Date of Birth</label>
                <input 
                    type='text' 
                    name="number"
                   
                    onChange = {e=>setDob(e.target.value)}
                />

                <label>Your Phone Number</label>
                <input 
                    type='text' 
                    name="number"
                   
                    onChange = {e=>setPhone(e.target.value)}
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