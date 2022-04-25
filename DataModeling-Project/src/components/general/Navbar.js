import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {FaBars,FaTimes} from 'react-icons/fa';
import "./Navbar.css";
import {selectRole} from "../../features/userSlice";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);
    const userRole = useSelector(selectRole);

    const handleClick=()=>setClick(!click);
    const changeColor=async()=>{
        if(window.screenY>=100)setColor(true);
        else setColor(false);
    }
    useEffect(async()=>{
        changeColor();
    },[]);

    return (
        <div>
        {
            userRole && userRole==="Seeker" && (
                <div className={color ? 'header header-bg':'header'}>
                    <Link to="/seekerDashboard">
                        <h1>Seeker</h1>
                    </Link>

                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <div className="clickSection" onClick={handleClick}>
                        {click ? (
                            <FaTimes size={20} style={{color:'white'}} />
                        ) : (
                          <FaBars size={20} style={{color:'white'}} />
                        )}
                    </div>

                </div>
            )
        }
        {
            userRole && userRole==="Company" && (
                <div className={color ? 'header header-bg':'header'}>
                    <Link to="/companyDashboard">
                        <h1>Company</h1>
                    </Link>

                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <div className="clickSection" onClick={handleClick}>
                        {click ? (
                            <FaTimes size={20} style={{color:'white'}} />
                        ) : (
                          <FaBars size={20} style={{color:'white'}} />
                        )}
                    </div>

                </div>
            )
        }
        {
            userRole && userRole==="Trainer" && (
                <div className={color ? 'header header-bg':'header'}>
                    <Link to="/trainerDashboard">
                        <h1>Trainer</h1>
                    </Link>

                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <div className="clickSection" onClick={handleClick}>
                        {click ? (
                            <FaTimes size={20} style={{color:'white'}} />
                        ) : (
                          <FaBars size={20} style={{color:'white'}} />
                        )}
                    </div>

                </div>
            )
        }
        {
            userRole && userRole==="Admin" && (
                <div className={color ? 'header header-bg':'header'}>
                    <Link to="/adminDashboard">
                        <h1>Admin</h1>
                    </Link>

                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <div className="clickSection" onClick={handleClick}>
                        {click ? (
                            <FaTimes size={20} style={{color:'white'}} />
                        ) : (
                          <FaBars size={20} style={{color:'white'}} />
                        )}
                    </div>

                </div>
            )
        }
        </div>
    )
}

export default Navbar