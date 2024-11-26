import React, { useEffect } from 'react'
import { useState  } from 'react';
import axios from 'axios';


const Post = () => {
  const [caption, setCaption]=useState("");
  const [file, setFile]=useState();
  const[image,setImage]=useState()
  const handleUplode=(e)=>{
    const formdata=new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:3001/uplode',formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log((err)))
  }
 
  useEffect(()=>{
    axios.post('http://localhost:3001/getImage')
    .then(res=>setImage(res.data[4].image))
    .catch(err=>console.log((err)))
  })
 
  return (
    <div className='bg-gray-100 flex items-center justify-center w-screen border-black border'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md'>
        <div className='flex flex-col gap-4 items-center justify-between mb-4'>
          <input className='border rounded-sm border-black' type="text" placeholder='Entre Caption'  value={caption} onChange={(e)=>setCaption(e.target.value)}/>
          <input className='border rounded-sm border-black' type="file" onChange={(e)=>setFile(e.target.files[0])}/>
          <button onClick={handleUplode} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Uplode
          </button>
          <br />
          <img src={`http://localhost:3001/images/`+image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Post;