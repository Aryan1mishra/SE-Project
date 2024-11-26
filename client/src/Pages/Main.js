import React from "react";
import Chat from "../Images/Chat.png";
import { AiFillPicture } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="border border-white flex w-full bg-blue-400">
      <div className="border border-black w-[85%] grid-cols-2  bg-blue-200">
        <div className=" h-[15%] m-2">
          <div className="flex justify-center items-center space-x-7">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>

            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div className=" flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[100px] h-[100px]">
              <img
                className="object-full w-[90px] h-[90px] rounded-full"
                src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="bg-blend-multiply object-full w-[80px] h-[80px] rounded-full"
                src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-23-512.png"
                alt="img"
              />
            </div>
            <div>
              <img
                className="bg-blend-multiply object-full w-[40px] h-[40px] rounded-full"
                src="https://cdn-icons-png.freepik.com/512/6645/6645163.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className=" h-[85%]">
          <div className="flex items-center justify-center space-x-64 h-[5%] ">
            <Link to='/post'>
            <button  className="flex items-center justify-center">
              <div>
                <AiFillPicture />
              </div>
              <div>Photo</div>
            </button>
            </Link>
            <button className="flex items-center justify-center">
              <div><AiFillPlayCircle/></div>
              <div>Reels</div>
            </button>
            <button className="flex items-center justify-center">
              <div><AiFillPieChart/></div>
              <div>Activity</div>
            </button>
            <button className="flex items-center justify-center">
              <div><AiFillContacts/></div>
              <div>Profile</div>
            </button>
          </div>
        </div>
      </div>

      {/* chating online */}
      <div className="border border-black w-[15%] bg-blue-200">
        <img className=" h-screen" src={Chat} alt="chat" />
      </div>
    </div>
  );
};

export default Main;
