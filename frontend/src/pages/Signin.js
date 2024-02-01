import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/Signup.css'

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/signin', formData);
      console.log(response.data); // Handle success or redirect the user

      // Display a success message
      alert('Signin successful!');

    } catch (error) {
      console.error('Error signing in:', error.response ? error.response.data : error.message);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      
      <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Sign In</button>
      </form>
      </div>
    </div>
  );
};

export default Signin;
