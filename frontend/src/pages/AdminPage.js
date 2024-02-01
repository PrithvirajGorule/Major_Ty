import React from 'react';
import { FaUserPlus, FaListAlt, FaUsers, FaChartBar, FaUser } from 'react-icons/fa';
import './../CSS/Adminpage.css';

const AdminPage = () => {
  const handleButtonClick = (action) => {
    // Add logic here for each button click
    console.log(`Button clicked: ${action}`);
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <div className="logo-and-title">
          <img src='https://static.vecteezy.com/system/resources/thumbnails/008/302/513/small/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg' alt="Admin Logo" />
          <h3>Admin</h3>
        </div>
        <hr></hr>
        <button onClick={() => handleButtonClick('Add Supplier')}>
          <FaUserPlus /> Add Supplier
        </button>
        <button onClick={() => handleButtonClick('View Suppliers')}>
          <FaListAlt /> View Suppliers
        </button>
        <button onClick={() => handleButtonClick('View Users')}>
          <FaUsers /> View Users
        </button>
        <button onClick={() => handleButtonClick('Dashboard')}>
          <FaChartBar /> Dashboard
        </button>
        <button onClick={() => handleButtonClick('Profile')}>
          <FaUser /> Profile
        </button>
      </div>
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AdminPage;
