import React,{useState,useEffect} from 'react';
import "./CompanyLoginForm.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {login,selectUrl,selectCname,selectDesc,
        selectUser_Id,selectRole,
        selectEmail,selectPassword,selectPhone
} from "../../features/userSlice";


import api from '../../api/axiosFile'


const CompanyLoginForm = () => {

    const dispatch = useDispatch();


    const [userId,setUserId] = useState('');
    const [url,setUrl] = useState('');
    const [cname,setCname] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [desc,setDesc] = useState('');
   
    const userRole = useSelector(selectRole);
    const companyUrl = useSelector(selectUrl);
    const companyName = useSelector(selectCname);
    const companyDesc = useSelector(selectDesc);
 
    const handleFormSubmit = (e) => {
        console.log("Clicked");
        e.preventDefault();

        //Axios
        api.post('/signup/company',{
            userRole,email,
            password,url,
            cname,desc,phone
        }).then((res)=>{
        console.log("hellllllo");
        console.log(res.data);
        console.log(res.data.User_Id);
        setUserId(res.data.User_Id);

        dispatch(login({
            User_Id:userId,
            role:"Company",
            url:url,
            cname:cname,
            desc:desc,
            email:email,
            password:password,
            phone:phone
        }))
        console.log(companyUrl,companyName,companyDesc);
        })
    }

  return (
    <div>
        <Navbar />
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <h1>Form Details</h1>
                
                <label>Company Name</label>
                <input 
                    type='text' 
                    name="name"
                  
                    onChange = {e => setCname(e.target.value)}
                />

                <label>Company Url</label>
                <input 
                    type='text' 
                    name="url"
                  
                    onChange = {e => setUrl(e.target.value)}
                />

                <label>Company Phone Number</label>
                <input 
                    type='text' 
                    name="phone"
                    onChange = {e => setPhone(e.target.value)}
                />

                <label>Company Email</label>
                <input 
                    type='text' 
                    name="email"
                  
                    onChange = {e => setEmail(e.target.value)}
                />

                <label>Company Password</label>
                <input 
                    type='password' 
                    name="password"
                  
                    onChange = {e => setPassword(e.target.value)}
                />

                <label>Company Description</label>
                <textarea           
                    rows='6' 
                    placeholder='Type a short message here' 
                   
                    onChange = { e=>setDesc(e.target.value) }
                />

               
                <button className='btn'>Submit</button>
            </form>
            <Link to="/companyDashboard">
                    <button className='btn'>Go to Company Dashboard</button>
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default CompanyLoginForm