import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    date_of_birth: '',
    gender: '',
    address_street: '',
    address_city: '',
    address_state: '',
    address_zip: '',
    phone_number: '',
    role: '', // Add role parameter
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/register', formData);
      console.log(response.data); // Handle success or show a success message
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Last Name:
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Date of Birth:
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        <label>
          Street Address:
          <input type="text" name="address_street" value={formData.address_street} onChange={handleChange} required />
        </label>
        <br />

        <label>
          City:
          <input type="text" name="address_city" value={formData.address_city} onChange={handleChange} required />
        </label>
        <br />

        <label>
          State:
          <input type="text" name="address_state" value={formData.address_state} onChange={handleChange} required />
        </label>
        <br />

        <label>
          ZIP Code:
          <input type="text" name="address_zip" value={formData.address_zip} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Phone Number:
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Role:
          <input type="text" name="role" value={formData.role} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
