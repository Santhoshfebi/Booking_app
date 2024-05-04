import React, { useState } from 'react';
import axios from 'axios';
import loginBackground from "../Resources/login.webp";
import bmsLogo from "../Resources/bms-logo.png";
import Dash from '../Dashboardcont/Dash';
import App from '../App';
import Home from './Home';

export default function SignIn() {
  const [formData, setFormData] = useState({
    emailid: '',
    password: ''
  });
  const [loginStatus, setLoginStatus] = useState('');
  const [userRole, setUserRole] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      const role = response.data; // Assuming the backend returns the user's role directly
  
      if (role === 'admin') {
        // Redirect to dashboard
        setUserRole('admin');
      } else if (role === 'user') {
        // Redirect to website or home page
        setUserRole('user');
      } else {
        setLoginStatus('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus('An error occurred');
    }
  };

  // Redirect if userRole is set
  if (userRole === 'admin') {
    return <Dash role={userRole} />;
  } else if (userRole === 'user') {
    // Redirect to website or home page
    // Replace the below line with the appropriate redirection logic
    return <Home role={userRole} />;
  }

  return (
    <div className="flex items-center justify-center py-10 outline-none">
      <div className="h-[500px] w-[60%] flex rounded-lg overflow-hidden shadow-2xl justify-center items-center relative">
        <div className="h-full w-full relative">
          <img src={loginBackground} alt="" className="h-full w-full object-cover" />
        </div>
    
        <div className="bg-black bg-opacity-70 flex flex-col gap-6 absolute px-3 py-3 rounded-lg">
          <div className="h-14 w-36 ml-24">
            <img src={bmsLogo} alt="" className="w-full h-full" />
          </div>
          <form onSubmit={handleSubmit} className="cont flex gap-4 flex-col items-center text-white">
            <input
              type="email"
              placeholder="Email Address"
              name="emailid" value={formData.emailid} onChange={handleChange} required 
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              name="password" value={formData.password} onChange={handleChange} required
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none text-black"
            />
         
            <div className="text-xs text-white">By signing up,you agree to our <a href="" className="text-red-500 underline">Terms of use</a> and <a href="" className="text-red-500 underline">Privacy Policy</a>.</div>
            <button type="submit" className="w-[90%] rounded-md bg-[#F84464] text-white text-sm h-8">SIGN IN</button>
            <div className="font-semibold text-sm text-white">New member? <a href="" className="text-red-500 italic underline">SignUp</a></div>

            {loginStatus && <p>{loginStatus}</p>}
          </form>
          <div><a href="" className="font-semibold text-sm text-white pb-">Forgot Password?</a></div>
        </div>
      </div>
    </div>
  );
}
