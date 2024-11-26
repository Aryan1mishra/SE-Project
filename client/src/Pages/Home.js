import React from "react";
import mainPic from "../Images/mainPic.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" bg-cyan-950  border-l-4 border-white ">
      <div className="absolute">
        <div className=" bg-cover bg-center opacity-70 z-0 ">
          <img
            className=" overflow-hidden w-screen h-screen"
            src={mainPic}
            alt="img"
          />
        </div>
        <div className=" w-[75%] text-center absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className=" space-3 text-8xl  font-bold items-center ">
            COLLEGE CONNECT
          </h1>
          <h3 className="  text-4xl  font-bold ">
            Your College, Your Community
          </h3>
        </div>
      </div>
      <div className="absolute  w-[100px] top-0 right-20 mt-3 h-[30px]">
        <div className=" absolute text-white">
          <Link to="/login">
          <button className="flex justify-center items-center rounded-full bg-cyan-950 w-[70px]">
            Login
          </button>
          </Link>
        </div>
        <div className="absolute w-[100px] top-0 -right-20">
          <div className=" text-white">
            <Link to='/sign'>
            <button className="flex justify-center items-center rounded-full bg-cyan-950 w-[70px]">
              Sign in
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
