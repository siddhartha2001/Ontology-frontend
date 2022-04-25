import React from 'react'
import "./AddCompany.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';


const AddCompany = () => {
  return (
    <div>
        <Navbar />
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default AddCompany