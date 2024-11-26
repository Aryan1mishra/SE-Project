import React, { useState } from 'react'
import {motion} from 'framer-motion';
import {FaBars, FaHome}from 'react-icons/fa';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const routes=[
    {
        path:"/home",
        name:"Home",
        icon:<FaHome/>,
    },
    {
        path:"/post",
        name:"Post",
        icon:<AiFillPlusCircle />,
    },
    {
        path:"/job",
        name:"Jobs",
        icon:<AiFillShopping />,
    },
    {
        path:"/communities",
        name:"Communities",
        icon:<AiFillMessage />,
    },
];

const Sidebar = () => {
    const[Isopen,setIsopen]=useState(false);
    const toggle=()=>setIsopen(!Isopen);
  return (
    <div >
        <motion.div animate={{width: Isopen ? "260px": "50px"}} className=' bg-[rgb(0,7,61)] h-screen text-white glex items-center'>
            <div className='flex justify-between items-center gap-x-2 px-[15px] py-[10px] '>
                {Isopen && <h1 className='font-bold text-2xl leading-0 mt-2'>College Connect</h1>}
                <div className='mt-2 object-cover flex justify-center items-center px-1'><FaBars onClick={toggle} size={25}/></div>
            </div>
            <div className='flex items-center m-[10px]  mt-5'>
                <div className='px-3'><AiFillAudio size={25}/></div>
                {Isopen && <motion.input  type="text" className=' w-[160px] ml-[10px] rounded-md p-[2px]' placeholder='search' />}
            </div>
            <section>
                {routes.map((route)=>(
                    <NavLink className='flex items-center text-white border-white my-10 gap-x-3 p-5 text-2xl hover:border-r-4 transition hover:bg-[rgb(45,51,89)]' to={route.path} key={route.name}>
                        <div>{route.icon}</div>
                        <div>{ Isopen ? route.name: ""}</div>
                    </NavLink>
                ))}
            </section>

        </motion.div>
      
    </div>
  )
}

export default Sidebar
