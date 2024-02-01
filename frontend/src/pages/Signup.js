import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/Signup.css';

const Step1 = ({ formData, handleChange }) => (
  <>
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
      Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    </label>
    <br />
  </>
);

const Step2 = ({ formData, handleChange }) => (
  <>
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
      Phone Number:
      <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
    </label>
    <br />
  </>
);

const Step3 = ({ formData, handleChange }) => (
  <>
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
  </>
);

const Step4 = ({ formData, handleChange }) => (
  <>
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

    <label>
      Confirm Password:
      <input type="password" name="confirm_password" onChange={handleChange} required />
    </label>
    <br />
  </>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    address_street: '',
    address_city: '',
    address_state: '',
    address_zip: '',
    username: '',
    password: '',
    confirm_password: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all parameters of the current field are filled
    const currentStepFields = Object.keys(formData).filter(field => field.includes(`step${currentStep}`));
    const isCurrentStepValid = currentStepFields.every(field => formData[field]);
  
    if (!isCurrentStepValid) {
      alert('Please fill in all the fields before proceeding.');
      return;
    }
  
    // Check if the password and confirm password match
    if (currentStep === 4 && formData.password !== formData.confirm_password) {
      alert('Password and Confirm Password do not match.');
      return;
    }
  
    try {
      // Make the API call only if the passwords match and all fields are filled
      const response = await axios.post('http://localhost:8800/register', formData);
      console.log(response.data); // Handle success or show a success message
  
      // Display a success message
      alert('Registration successful!');
  
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      // Handle error or show an error message to the user
      alert('Registration failed. Please try again.');
    }
  };
  

  // Inside the return statement of Signup component
return (
  <div className="container">
    <div className="step-indicator">
      <div className={`step ${currentStep >= 1 ? 'filled' : ''}`}>
        <div className={`step-number ${currentStep >= 1 ? 'filled' : ''}`}>1</div>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 2 ? 'filled' : ''}`}>
        <div className={`step-number ${currentStep >= 2 ? 'filled' : ''}`}>2</div>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 3 ? 'filled' : ''}`}>
        <div className={`step-number ${currentStep >= 3 ? 'filled' : ''}`}>3</div>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep === 4 ? 'filled' : ''}`}>
        <div className={`step-number ${currentStep === 4 ? 'filled' : ''}`}>4</div>
      </div>
    </div>
    {/* <h2>Signup - Step {currentStep}</h2> */}
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}
      {currentStep === 4 && <Step4 formData={formData} handleChange={handleChange} />}

      <div className="button-group">
        {currentStep > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {currentStep < 4 && <button type="button" onClick={nextStep}>Next</button>}
        {currentStep === 4 && <button type="submit">Sign Up</button>}
      </div>
    </form>
  </div>
);

};

export default Signup;
