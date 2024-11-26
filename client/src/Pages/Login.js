import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
        email,
        password
      })
      .then(result=>{
        console.log(result)
        if(result.data==="Login successfully"){
          navigate('/home')
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-gray-100 flex justify-center items-center w-full h-screen">
      <div className="w-3/4 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/free-vector/happy-cartoon-college-university-students-holding-diplomas-people-getting-degree-certificate-academic-success-flat-vector-illustration-education-graduation-concept-banner-website-design_74855-24229.jpg"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Full name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={fullname}
              onChange={(e)=>setFullname(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Thapar mail
            </label>
            <input
              type="text"
              placeholder="@thapar.edu"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Min 10 character"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-6 text-blue-500">
            <Link to="/sign" className="hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <Link to='/sign'>
            <button href="#" className="hover:underline">
              Sign up Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
