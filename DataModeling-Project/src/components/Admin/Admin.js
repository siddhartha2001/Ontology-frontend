import React from 'react';
import "./Admin.css";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import HeroImage from '../general/HeroImage';

const Admin = () => {
  return (
    <div>
      <Navbar />
        <HeroImage heading="Admin Dashboard" text="View Admin Dashboard" />
      <Footer />
    </div>
  )
}

export default Admin